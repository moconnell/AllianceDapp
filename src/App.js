import React, { useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar";
import { MeetingCard } from "./components/MeetingCard";
import { ModalComponent } from "./components/Modal";
import { ChakraProvider } from "@chakra-ui/react";
import { LoadingTransaction } from "./components/Modal/components/LoadingTransaction";
import { TimeList } from "./components/TimeList";
import { MOCK_MEETING, MOCK_TIMES } from "./mock";
export default function App() {
  const [selectedTime, setselectedTime] = useState(null);

  // Keeping modal logic in this level for testing purposes
  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <ChakraProvider>
      <main
        style={{
          background: "#333333",
          width: "vw",
          height: "100vh",
          padding: "200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Calendar
          onChange={(date) => {
            console.log(date);
          }}
        />
        <MeetingCard meeting={MOCK_MEETING} />
        <TimeList
          selectedTime={selectedTime}
          onChange={(time) => {
            setselectedTime(time);
          }}
          times={MOCK_TIMES}
          duration={60}
        />
        {/* Button for modal logic */}
        <button
          style={{ width: "200px", height: "30px", background: "#fff" }}
          onClick={() => setShowModal(true)}
        >
          Test Modal!
        </button>
      </main>

      {/* Showing modal for testing purposes */}
      <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
        <LoadingTransaction />
      </ModalComponent>
    </ChakraProvider>
  );
}
