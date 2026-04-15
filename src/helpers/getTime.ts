export function getTime(timestamp: number | null): string | null {
   if (timestamp === null) return null
   const time = new Date(timestamp)
   return `${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}`
}
