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
import { Home } from "./containers/Home";
import { Header } from "./components/Header";
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
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Calendar
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
        <button
          style={{ width: "200px", height: "30px", background: "#fff" }}
          onClick={() => setShowModal(true)}
        >
          Test Modal!
        </button>
        <Input />
          <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
              <LoadingTransaction />
          </ModalComponent> */}
      <Header />
      <Home />
    </main>
  );
}
