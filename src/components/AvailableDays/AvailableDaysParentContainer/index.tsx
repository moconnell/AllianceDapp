import React from "react";
import AvailableDaysText from "../AvailableDaysTextContainer";
import AvailableDaysButton from "../AvailableDaysCircleContainer";

const AvailableDaysComponent: React.VFC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <AvailableDaysText></AvailableDaysText>
      <AvailableDaysButton name="Monday"></AvailableDaysButton>
      <AvailableDaysButton name="Tuesday"></AvailableDaysButton>
      <AvailableDaysButton name="Wednesday"></AvailableDaysButton>
      <AvailableDaysButton name="Thursday"></AvailableDaysButton>
      <AvailableDaysButton name="Friday"></AvailableDaysButton>
      <AvailableDaysButton name="Saturday"></AvailableDaysButton>
      <AvailableDaysButton name="Sunday"></AvailableDaysButton>
    </div>
  );
};

export default AvailableDaysComponent;
