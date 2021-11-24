import React from "react";
import AvailableDaysText from "../AvailableDaysTextContainer";
import AvailableDaysButton from "../AvailableDaysCircleContainer";

export default class AvailableDaysComponent extends React.Component {
    render() {
        return (<>
            <AvailableDaysText></AvailableDaysText>
            <AvailableDaysButton name="Monday"></AvailableDaysButton>
            <AvailableDaysButton name="Tuesday"></AvailableDaysButton>
            <AvailableDaysButton name="Wednesday"></AvailableDaysButton>
            <AvailableDaysButton name="Thursday"></AvailableDaysButton>
            <AvailableDaysButton name="Friday"></AvailableDaysButton>
            <AvailableDaysButton name="Saturday"></AvailableDaysButton>
            <AvailableDaysButton name="Sunday"></AvailableDaysButton>
        </>)
    }
}