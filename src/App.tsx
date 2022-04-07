import React, { useState } from "react";
import "./App.css";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Calendar' was resolved to '/U... Remove this comment to see the full error message
import { Calendar } from "./components/Calendar";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/MeetingCard' was resolved to ... Remove this comment to see the full error message
import { MeetingCard } from "./components/MeetingCard";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/MeetingCardList' was resolved... Remove this comment to see the full error message
import { MeetingCardList } from "./components/MeetingCardList";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Modal' was resolved to '/User... Remove this comment to see the full error message
import { ModalComponent } from "./components/Modal";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Modal/components/LoadingTrans... Remove this comment to see the full error message
import { LoadingTransaction } from "./components/Modal/components/LoadingTransaction";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/TimeList' was resolved to '/U... Remove this comment to see the full error message
import { TimeList } from "./components/TimeList";
import { MOCK_MEETINGS, MOCK_TIMES } from "./mock";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Input' was resolved to '/User... Remove this comment to see the full error message
import { Input } from "./components/Input";
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/Home' was resolved to '/Users... Remove this comment to see the full error message
import { Home } from "./containers/Home";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Header' was resolved to '/Use... Remove this comment to see the full error message
import { Header } from "./components/Header";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/AvailableDays/AvailableDaysPa... Remove this comment to see the full error message
import AvailableDaysComponent from "./components/AvailableDays/AvailableDaysParentContainer";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Button' was resolved to '/Use... Remove this comment to see the full error message
import { Button } from "./components/Button";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Input/profile' was resolved t... Remove this comment to see the full error message
import { Profile } from "./components/Input/profile";
export default function App() {
  const [selectedTime, setselectedTime] = useState(null);

  // Keeping modal logic in this level for testing purposes
  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <main
      style={{
        background: "#333333",
        width: "vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header />

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Home />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Input />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Calendar
        onChange={(date: any) => {
          console.log(date);
        }}
      />

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TimeList
        selectedTime={selectedTime}
        onChange={(time: any) => {
          setselectedTime(time);
        }}
        times={MOCK_TIMES}
        duration={60}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button onClick={() => setShowModal(true)}>Test Modal!</Button>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalComponent showModal={showModal} closeModal={handleCloseModal}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingTransaction />
      </ModalComponent>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MeetingCardList meetings={MOCK_MEETINGS} />
      {/* <AvailableDaysComponent/> */}
    </main>
  );
}
