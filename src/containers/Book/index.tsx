import {
  Button,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { useCalendar } from "../../hooks";
import DaysOfWeek from "../../types/daysOfWeek";
import { tomorrow } from "../../utils/timeUtils";
import ModalComponent from "../../components/Modal";
import LoadingTransaction from "../../components/Modal/components/LoadingTransaction";
import TimeList from "../../components/TimeList";

const Book = () => {
  const { calendarAddress } = useParams();
  const { getProfileAvailability, getAvailableTimes } = useCalendar();
  const [selectedTime, setselectedTime] = useState<DateTime | undefined>();
  const [availableDays, setAvailableDays] = useState(DaysOfWeek.None);
  const [availableTimes, setAvailableTimes] = useState([] as DateTime[]);
  const [description, setDescription] = useState("");
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
        const [
          { username, description },
          { availableDays, location, timeZone },
        ] = pa;
        if (availableDays) setAvailableDays(availableDays);
        if (location) setLocation(location);
        if (timeZone) setTimeZone(timeZone);
        if (username) setUsername(username);
        if (description) setDescription(description);
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
    <Container maxW="container.xl" p={1}>
      <Heading color="raid.100" fontFamily="Inter">
        Book a {durationMinutes} minute meeting{username && ` with ${username}`}
        ...
      </Heading>
      <Flex
        h={{ base: "auto", md: "100%" }}
        py={10}
        direction={{ base: "column", md: "row" }}
      >
        {(location || timeZone || description) && (
          <Container paddingTop="24">
            <Table>
              <Tbody fontFamily="Inter">
                {location && (
                  <Tr>
                    <Th border={0} color="gray.500">
                      Location
                    </Th>
                    <Td border={0} color="gray.300" fontSize="sm">
                      {location}
                    </Td>
                  </Tr>
                )}
                {timeZone && (
                  <Tr>
                    <Th border={0} color="gray.500">
                      Time-Zone
                    </Th>
                    <Td border={0} color="gray.300" fontSize="sm">
                      {timeZone}
                    </Td>
                  </Tr>
                )}
                {description && (
                  <Tr>
                    <Th border={0} color="gray.500">
                      About
                    </Th>
                    <Td border={0} color="gray.300" fontSize="sm">
                      {description}
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Container>
        )}
        <Container p={0}>
          <Calendar
            onChange={setDate}
            defaultValue={date}
            tileDisabled={({ date }) =>
              date < now ||
              ((1 << date.getDay()) & availableDays) !== 1 << date.getDay()
            }
          />
        </Container>
        <Container p={4}>
          <TimeList
            selectedTime={selectedTime}
            onChange={(time: any) => {
              setselectedTime(time);
            }}
            times={availableTimes}
            duration={durationMinutes}
          />
        </Container>
      </Flex>
      <Container pr={10} maxW="xs">
        <Button onClick={() => setShowModal(true)}>Book meeting</Button>
      </Container>
      <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
        <LoadingTransaction />
      </ModalComponent>
    </Container>
  );
};

export default Book;
