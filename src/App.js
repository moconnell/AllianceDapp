import React, { useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar";
import { MeetingCard } from "./components/MeetingCard";
import { MeetingCardList } from "./components/MeetingCardList";
import { ModalComponent } from "./components/Modal";
import { LoadingTransaction } from "./components/Modal/components/LoadingTransaction";
import { TimeList } from "./components/TimeList";
import { MOCK_MEETINGS, MOCK_TIMES } from "./mock";
import { Input } from "./components/Input";
export default function App() {
  const [selectedTime, setselectedTime] = useState(null);

  // Keeping modal logic in this level for testing purposes
  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
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
        <MeetingCardList meetings={MOCK_MEETINGS} />
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
        <Input />
          {/* Showing modal for testing purposes */}
          <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
              <LoadingTransaction />
          </ModalComponent>
      </main>
  );
}
