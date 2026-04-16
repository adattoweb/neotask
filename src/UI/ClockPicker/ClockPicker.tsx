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

type Time = "hours" | "minutes" | "seconds"

function Item({ value, onClick, activeValue }: ItemProps) {
   return (
      <div className={clsx(styles.item, activeValue === value && styles.active)} onClick={onClick}>
         {value}
      </div>
   )
}

export function ClockPicker({ name }: ClockProps) {
   const { control, setValue, watch } = useFormContext()
   const hours = Array.from({ length: 24 }, (_, i) => i)
   const minutes = Array.from({ length: 60 }, (_, i) => i)

   const time = watch(name)

   const onClick = (typeTime: Time, value: number) => {
      setValue(name, {
         ...time,
         [typeTime]: value,
      })
   }

   useEffect(() => {
      console.log(time.hours)
   }, [time])

   return (
      <Controller
         name={name}
         control={control}
         render={({ field }) => (
            <div className={styles.wrapper}>
               <h3 className={styles.time}>
                  {String(time.hours)?.padStart(2, "0")}:{String(time.minutes)?.padStart(2, "0")}
               </h3>
               <div className={styles.picker}>
                  <div className={styles.hours}>
                     {hours.map(el => (
                        <Item
                           key={el}
                           value={el}
                           onClick={() => onClick("hours", el)}
                           activeValue={field.value.hours}
                        />
                     ))}
                  </div>
                  <div className={styles.minutes}>
                     {minutes.map(el => (
                        <Item
                           key={el}
                           value={el}
                           onClick={() => onClick("minutes", el)}
                           activeValue={field.value.minutes}
                        />
                     ))}
                  </div>
               </div>
            </div>
         )}
      />
   )
}
