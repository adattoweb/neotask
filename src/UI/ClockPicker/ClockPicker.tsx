import styles from "./ClockPicker.module.css"
import { Controller, useFormContext } from "react-hook-form"
import clsx from "clsx"
import { useEffect } from "react"

export interface ClockData {
   hours: number
   minutes: number
}

interface ClockProps {
   name: string
}

interface ItemProps {
   value: number
   onClick: () => void
   activeValue: number
}

type TimeType = "hours" | "minutes"

function Item({ value, onClick, activeValue }: ItemProps) {
   return (
      <div className={clsx(styles.item, activeValue === value && styles.active)} onClick={onClick}>
         {value}
      </div>
   )
}

export function ClockPicker({ name }: ClockProps) {
   const { control } = useFormContext()
   const hours = Array.from({ length: 24 }, (_, i) => i)
   const minutes = Array.from({ length: 60 }, (_, i) => i)

   const getNewTime = (date: Date, value: number, type: TimeType): number => {
      if (type === "hours") {
         date.setHours(value)
      } else if (type === "minutes") {
         date.setMinutes(value)
      }
      return date.getTime()
   }

   return (
      <Controller
         name={name}
         control={control}
         render={({ field }) => {
            const date = new Date(field.value)
            return (
               <div className={styles.wrapper}>
                  <h3 className={styles.time}>
                     {String(date.getHours())?.padStart(2, "0")}:{String(date.getMinutes())?.padStart(2, "0")}
                  </h3>
                  <div className={styles.picker}>
                     <div className={styles.hours}>
                        {hours.map(el => (
                           <Item
                              key={el}
                              value={el}
                              onClick={() => field.onChange(getNewTime(date, el, "hours"))}
                              activeValue={date.getHours()}
                           />
                        ))}
                     </div>
                     <div className={styles.minutes}>
                        {minutes.map(el => (
                           <Item
                              key={el}
                              value={el}
                              onClick={() => field.onChange(getNewTime(date, el, "minutes"))}
                              activeValue={date.getMinutes()}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            )
         }}
      />
   )
}
