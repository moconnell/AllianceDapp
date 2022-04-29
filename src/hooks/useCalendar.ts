import { useEffect, useState } from "react";

import { useWeb3Context } from "../context/Web3Context";
import assert from "assert";
import {
  Calendar,
  CalendarFactory,
  CalendarFactory__factory,
  Calendar__factory,
} from "../typechain-types";
import DaysOfWeek from "../types/daysOfWeek";
import {
  assertValid,
  compare,
  fromTotalMins,
  totalMinutes,
} from "../utils/timeUtils";
import Meeting from "../types/meeting";
import ProfileInfo from "../types/profileInfo";
import AvailabilityInfo from "../types/availabilityInfo";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

const toString = (value: any) => (value ? String(value) : "");

export const useCalendar = () => {
  const { address, signer, web3Provider } = useWeb3Context();
  const [calendarFactory, setCalendarFactory] = useState<CalendarFactory>();
  const [calendar, setCalendar] = useState<Calendar>();
  const [availability, setAvailability] = useState<AvailabilityInfo>();
  const [profile, setProfile] = useState<ProfileInfo>();

  const { REACT_APP_WEB3_CONTRACT_FACTORY_ADDRESS } = process.env;
  assert(
    REACT_APP_WEB3_CONTRACT_FACTORY_ADDRESS,
    "REACT_APP_WEB3_CONTRACT_FACTORY_ADDRESS not set"
  );

  useEffect(() => {
    function getCalendarFactory() {
      if (!web3Provider || !address || !signer) return undefined;
      return CalendarFactory__factory.connect(
        REACT_APP_WEB3_CONTRACT_FACTORY_ADDRESS!,
        signer
      );
    }

    const fac = getCalendarFactory();
    if (fac) setCalendarFactory(fac);
  }, [REACT_APP_WEB3_CONTRACT_FACTORY_ADDRESS, address, signer, web3Provider]);

  useEffect(() => {
    async function getCalendar() {
      if (!address || !calendarFactory || !web3Provider) return;

      const calendarAddress = await calendarFactory.userToCalendar(address);
      if (calendarAddress === NULL_ADDRESS) {
        console.log(`wallet ${address} has no saved calendar`);
        return;
      }

      console.log(`fetching calendar at ${calendarAddress}`);

      const cal = Calendar__factory.connect(calendarAddress, web3Provider);
      setCalendar(cal);
    }

    getCalendar();
  }, [address, calendarFactory, web3Provider]);

  useEffect(() => {
    async function loadProfileAvailability() {
      if (!calendar) return;

      const newProfile = await calendar.profile();
      setProfile(newProfile);

      let newAvailability = await calendar.availability();
      const from = fromTotalMins(newAvailability.earliestTimeInMinutes);
      const to = fromTotalMins(
        newAvailability.earliestTimeInMinutes + newAvailability.minutesAvailable
      );
      setAvailability({ ...newAvailability, from, to });
    }

    loadProfileAvailability();
  }, [calendar]);

  useEffect(() => {
    const createCalendar = async () => {
      if (
        calendar ||
        !calendarFactory ||
        !web3Provider ||
        !profile ||
        !availability
      )
        return;

      assert(profile.email, "No email");
      assertValid(availability.from);
      assertValid(availability.to);
      assert(
        compare(availability.from!, availability.to!) < 0,
        "from after to"
      );

      const p = {
        description: toString(profile.description),
        email: profile.email!,
        picture: toString(profile.picture),
        url: toString(profile.url),
        username: toString(profile.username),
      };

      const a = {
        availableDays: availability.availableDays ?? DaysOfWeek.None,
        earliestTimeInMinutes: totalMinutes(availability.from!),
        minutesAvailable:
          totalMinutes(availability.to!) - totalMinutes(availability.from!),
        location: availability.location!,
        timeZone: availability.timeZone!,
      };

      console.log("creating calendar now ... ", p, a);

      const tx = await calendarFactory.createCalendar(p, a);
      const receipt = await tx.wait();
      const txEvent = receipt.events?.[0]?.args;
      const calendarAddr = txEvent?.calendar;
      const cal = Calendar__factory.connect(calendarAddr, web3Provider);

      console.log("calendar created ok", cal);

      setCalendar(cal);
    };

    createCalendar();
  }, [
    profile,
    availability,
    calendar,
    calendarFactory,
    web3Provider,
    address,
    REACT_APP_WEB3_CONTRACT_FACTORY_ADDRESS,
  ]);

  const getMeetings = async (year: number, month: number, date: number) => {
    if (!calendar) return undefined;

    const meetingsOnDate = await calendar.getMeetings(year, month, date);

    return meetingsOnDate.map((m) => {
      let from = new Date(date);
      from.setHours(m.hour, m.minute);

      let to = new Date(from);
      to.setMinutes(to.getMinutes() + m.duration);

      return {
        date: from,
        endDate: to,
        attendee: m.attendee,
        description: `${m.duration} minute meeting`,
      } as Meeting;
    });
  };

  const setProfileAvailability = (info: ProfileInfo & AvailabilityInfo) => {
    setProfile(info);
    setAvailability(info);
  };

  return {
    availability,
    calendar,
    getMeetings,
    profile,
    setProfileAvailability,
  };
};
