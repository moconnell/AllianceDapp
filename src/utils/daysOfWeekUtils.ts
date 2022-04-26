import DayOfWeek from "../types/dayOfWeek";
import DaysOfWeek from "../types/daysOfWeek";

export const toDaysOfWeek = (day: DayOfWeek) => DaysOfWeek[DayOfWeek[day] as keyof typeof DaysOfWeek];