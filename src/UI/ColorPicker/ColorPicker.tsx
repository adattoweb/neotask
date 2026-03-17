import { Controller, useFormContext } from "react-hook-form"
import styles from "./ColorPicker.module.scss"
import clsx from "clsx";

interface PickerProps {
   name: string;
   defaultValue: string
}

export function ColorPicker({ name, defaultValue }:PickerProps){
   const { control } = useFormContext()
   return (
      <Controller name={name} control={control} defaultValue={defaultValue} render={({field}) => (
         <div className={clsx(styles.picker__wrapper, "bg-alpha", "br-alpha")}>
            <input className={styles.picker} {...field} type="color"/>
            <p className={styles.color}>{field.value}</p>
         </div>
      )}/>
   )
}