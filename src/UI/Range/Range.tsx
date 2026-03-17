import { Controller, useFormContext } from "react-hook-form"
import styles from "./Range.module.scss"
import clsx from "clsx";

interface RangeProps {
   name: string;
   min?: number;
   max?: number;
   step?: number;
   defaultValue?: string
}

export default function Range({ name, min = 0, max = 100, step = 1, defaultValue = "0"}: RangeProps) {
   const { control } = useFormContext()
   return (
      <div className={styles.wrapper}>
         <Controller name={name} control={control} defaultValue={defaultValue} render={({ field }) => (
            <div className={styles.rangeContainer}>
               <input className={clsx(styles.range, "bg-alpha")} {...field} type="range" min={min} max={max} step={step}/>
               <span className={styles.value}>{field.value}</span>
            </div>
         )} />
      </div>
   )
}