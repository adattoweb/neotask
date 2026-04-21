"use client"

import styles from "./page.module.css"

import { Day } from "@/app/(calendar)/components/Day/Day"
import { days } from "@/constants/days"
import { useGetWidth } from "@/hooks/useGetWidth"

export default function Calendar() {
   const [width, setWidth] = useGetWidth()
   return (
      <div className={`${styles.calendar} bg-alpha page`}>
         {width === null || width > 768 ? (
            <>
               {days.map(day => (
                  <Day key={day.timestamp} timestamp={day.timestamp} tasks={day.tasks} />
               ))}
            </>
         ) : (
            <Day timestamp={days[0].timestamp} tasks={days[0].tasks} />
         )}
      </div>
   )
}
