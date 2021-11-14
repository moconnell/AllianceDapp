import { TimeItem } from "./components/TimeItem"
import { TimeContainer } from "./styles"

export function TimeList({times,onChange,selectedTime}){
    return (
        <TimeContainer>
            {times.map(({hours,minutes,seconds},index)=>(
                    <TimeItem active={(hours===selectedTime?.hours && minutes=== selectedTime?.minutes)} onClick={(e)=>{
                        e.preventDefault();
                        onChange({hours,minutes,seconds})
                    }} key={index+"key"} hours={hours} minutes={minutes} seconds={seconds} />
            ))}
        </TimeContainer>
    )
}