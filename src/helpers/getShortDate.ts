export function getShortDate(timestamp: number | null): string | null {
   if (!timestamp) return null

   const date = new Date(timestamp)

   if (isNaN(date.getTime())) return null

   const parts = new Intl.DateTimeFormat("uk-UA", {
      day: "numeric",
      month: "long",
      weekday: "long",
   }).formatToParts(date)

   const day = parts.find(p => p.type === "day")?.value
   const monthRaw = parts.find(p => p.type === "month")?.value
   let weekday = parts.find(p => p.type === "weekday")?.value

   if (!day || !monthRaw || !weekday) return null

   const month = monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1)
   weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)

   return `${day} ${month}, ${weekday}`
}
