export function getMeridian(hour,minutes){
       const formattedMinutes =  minutes>9 ? minutes : `0${minutes}`
        return hour > 12 ? `${hour-12}:${formattedMinutes}PM` : `${hour}:${formattedMinutes}AM`
}