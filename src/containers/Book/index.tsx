import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { useCalendar } from "src/hooks";
import DaysOfWeek from "src/types/daysOfWeek";
import { tomorrow } from "src/utils/timeUtils";
import ModalComponent from "../../components/Modal";
import LoadingTransaction from "../../components/Modal/components/LoadingTransaction";
import TimeList from "../../components/TimeList";
import Time from "../../types/time";

const Book = () => {
  const { calendarAddress } = useParams();
  const { getProfileAvailability, getAvailableTimes } = useCalendar();
  const [selectedTime, setselectedTime] = useState<Time | undefined>(undefined);
  const [availableDays, setAvailableDays] = useState(DaysOfWeek.None);
  const [availableTimes, setAvailableTimes] = useState([] as Time[]);
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(tomorrow());
  const [durationMinutes] = useState(60);
  const now = new Date();

  useEffect(() => {
    const loadProfileAvailability = async () => {
      if (!calendarAddress) return;
      const pa = await getProfileAvailability(calendarAddress);
      if (pa) {
        const [{ username }, { availableDays, location, timeZone }] = pa;
        if (availableDays) setAvailableDays(availableDays);
        if (location) setLocation(location);
        if (timeZone) setTimeZone(timeZone);
        if (username) setUsername(username);
      }
    };

    loadProfileAvailability();
  }, [calendarAddress, getProfileAvailability]);

  useEffect(() => {
    const loadTimes = async () => {
      if (!calendarAddress) return;
      const availableTimes_ = await getAvailableTimes(
        calendarAddress,
        date,
        durationMinutes
      );
      if (availableTimes_) {
        console.log(availableTimes_);
        setAvailableTimes(availableTimes_);
      }
    };

    loadTimes();
  }, [calendarAddress, date, durationMinutes, getAvailableTimes]);

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Heading>
        Book a {durationMinutes} minute meeting{username && ` with ${username}`}
        ...
      </Heading>
      <Flex
        h={{ base: "auto", md: "100%" }}
        py={10}
        direction={{ base: "column", md: "row" }}
      >
        <Calendar
          onChange={setDate}
          defaultValue={date}
          tileDisabled={({ date }) =>
            date < now ||
            ((1 << date.getDay()) & availableDays) !== 1 << date.getDay()
          }
        />

        <TimeList
          selectedTime={selectedTime}
          onChange={(time: any) => {
            setselectedTime(time);
          }}
          times={availableTimes}
          timeZone={timeZone}
          duration={durationMinutes}
        />
      </Flex>
      <Container pr={10} maxW="xs">
        <Button onClick={() => setShowModal(true)}>Book</Button>
      </Container>
      <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
        <LoadingTransaction />
      </ModalComponent>
    </Container>
  );
};

export default Book;
