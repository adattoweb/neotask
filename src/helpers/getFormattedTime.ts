export function getFormattedTime(timestamp: number | null): string | null {
   if (timestamp === null || !timestamp) return null
   const date = new Date(timestamp)

   const formatted = new Intl.DateTimeFormat("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
   }).format(date)

   return formatted
}
