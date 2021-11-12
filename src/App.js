
import * as React from 'react'
import './App.css'
import {Calendar} from './components/Calendar'
export default function App() {
  return (
    <main style={{background:"#333333",width:"vw",height:"vh",padding:"200px",display:"flex",justifyContent:"center"}}>
          <Calendar onChange={(date)=>{console.log(date)}}/>
    </main>
  )
}