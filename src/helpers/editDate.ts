export function editDate(date: Date, hours: number | null, minutes: number | null) {
   if (hours !== null) {
      date.setHours(hours)
      date.setSeconds(1)
   } else {
      date.setHours(0)
      date.setSeconds(0)
   }

   if (minutes !== null) {
      date.setMinutes(minutes)
      date.setSeconds(0)
   } else {
      date.setMinutes(1)
      date.setSeconds(0)
   }

   return date.getTime()
}
