import './styles.css'
import ReactCalendar from 'react-calendar'

export function Calendar({onChange,defaultValue   }){
            
            return  <ReactCalendar
            onDrillDown={({ activeStartDate, view }) =>
              console.log("Drilled down to: ", activeStartDate, view)
            }
            tileContent={({ date, view }) =>
              view === "month" && date.getDay() === 0 ? "" : null
            }
            onChange={onChange}
            defaultValue={defaultValue}
          />

}