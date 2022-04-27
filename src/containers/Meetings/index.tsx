import { Navigate } from "react-router-dom";
import MeetingCardList from "../../components/MeetingCardList";
import { useCalendar } from "../../hooks";
import Meeting from "../../types/meeting";
import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import { Container, Flex } from "@chakra-ui/react";

const Meetings = () => {
  const { calendar, getMeetings } = useCalendar();
  const [meetings, setMeetings] = useState([] as Meeting[]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetings() {
      const meetingsOnDate = await getMeetings(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      if (meetingsOnDate) setMeetings(meetingsOnDate);
    }

    loadMeetings();
  }, [calendar, date, getMeetings]);

  if (!calendar) return <Navigate to="/" />;

  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100%" }}
        py={10}
        direction={{ base: "column", md: "row" }}
      >
        <Calendar onChange={setDate} />
        <MeetingCardList meetings={meetings} />
      </Flex>
    </Container>
  );
};

export default Meetings;
