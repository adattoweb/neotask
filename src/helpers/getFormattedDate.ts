export function getFormattedDate(timestamp: number | null): string | null {
   if (timestamp === null || !timestamp) return null
   const date = new Date(timestamp)

   const formatted = new Intl.DateTimeFormat("uk-UA").format(date)

   return formatted
}
