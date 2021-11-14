
import * as React from 'react'
import './App.css'
import {Calendar} from './components/Calendar'
import { MeetingCard } from './components/MeetingCard'
import { MeetingCardList } from './components/MeetingCardList'
import { Profile } from './components/Profile'
import { TimeList } from './components/TimeList'
import { MOCK_MEETINGS, MOCK_PROFILE, MOCK_TIMES } from './mock'
export default function App() {
  const [selectedTime,setselectedTime] = React.useState(null)
  const [selectedDate,setSelectedDate] = React.useState(null)
  return (
    <main style={{background:"#333333",width:"vw",height:"vh",padding:"200px",display:"flex",justifyContent:"space-between"}}>
          <Profile profile={MOCK_PROFILE} />
          <Calendar  onChange={(date)=>{console.log(date)}}/>
          <MeetingCardList meetings={MOCK_MEETINGS}/>
          <TimeList
          selectedTime={selectedTime}
          onChange={(time)=>{
            setselectedTime(time)
          }}
          times={
           MOCK_TIMES
          } 
          duration={60}
          />
    </main>
  )
}