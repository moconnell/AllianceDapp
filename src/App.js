
import * as React from 'react'
import './App.css'
import {Calendar} from './components/Calendar'
import { MeetingCard } from './components/MeetingCard'
import { Input } from "./components/Input";
export default function App() {
  return (
    <main style={{background:"#333333",width:"vw",height:"vh",display:"flex",justifyContent:"space-between"}}>
        {/*<Calendar onChange={(date)=>{console.log(date)}}/>*/}
        {/*<MeetingCard attendee={"John Salchichon"} date={new Date()} endDate={new Date(new Date().setHours(23))} description={"Meeting to discuss the next steps in the Nazi World Domination Schedule "}/>*/}
        <Input />
    </main>
  )
}