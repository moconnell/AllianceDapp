import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import ModalComponent from "../../components/Modal";
import LoadingTransaction from "../../components/Modal/components/LoadingTransaction";
import TimeList from "../../components/TimeList";
import { MOCK_TIMES } from "../../mock";
import Time from "../../types/time";

const Book: React.VFC = () => {
  const [selectedTime, setselectedTime] = useState<Time | undefined>(undefined);

  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <Calendar
        onChange={(date: any) => {
          console.log(date);
        }}
      />

      <TimeList
        selectedTime={selectedTime}
        onChange={(time: any) => {
          setselectedTime(time);
        }}
        times={MOCK_TIMES}
        duration={60}
      />
      <Button onClick={() => setShowModal(true)}>Test Modal!</Button>
      <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
        <LoadingTransaction />
      </ModalComponent>
    </>
  );
};

export default Book;
