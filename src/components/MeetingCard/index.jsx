import { getMeridian } from '../../utils/formatDate'
import { dayNameByNumber } from './constants'
import {DateText,CardContainer,MeetingDescription,Attendee} from './styles'

export function MeetingCard({meeting:{date,endDate,attendee,description}}){
        return <CardContainer>
            <DateText>{`${dayNameByNumber[date.getDay()]} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${getMeridian(date.getHours(),date.getMinutes())}-${getMeridian(endDate.getHours(),endDate.getMinutes())}`}</DateText>
            <Attendee>{attendee}</Attendee>
            <MeetingDescription>{description}</MeetingDescription>
        </CardContainer>
}