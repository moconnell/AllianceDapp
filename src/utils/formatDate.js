export function getMeridian(hour, minutes) {
  const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  return hour > 11
    ? `${hour - 12 || 12}:${formattedMinutes}PM`
    : `${hour}:${formattedMinutes}AM`;
}
