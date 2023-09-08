export const dateTimeFormat = (date: Date) => {
  const fullTime = date.toLocaleTimeString('tr')
  const [hours, minutes] = fullTime.split(/[:\s]/)

  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${hours}:${minutes}`
}
