"use client"

import styles from "./page.module.css"

import { Day } from "@/app/(calendar)/components/Day/Day"
import { useGetWidth } from "@/hooks/useGetWidth"

const days = [0, 1, 2, 3, 4]

export default function Calendar() {
   const [width] = useGetWidth()
   return (
      <div className={`${styles.calendar} bg-alpha page`}>
         {width === null || width > 768 ? (
            <>
               {days.map(el => (
                  <Day key={el} />
               ))}
            </>
         ) : (
            <Day />
         )}
      </div>
   )
}
