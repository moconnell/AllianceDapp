export function getMeridian(hour,minutes){
        return hour > 12 ? `${hour-12}:${minutes}PM` : `${hour}:${minutes}AM`
}