import styles from "./Dropdowns.module.css"
import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { ChevronIcon } from "@/UI/Icons/Icons"

const times = ["UTC+1", "UTC+2", "UTC+3"]

export function TimeFormatDropdown() {
   const { control } = useFormContext()
   return (
      <Controller
         name="time-format"
         control={control}
         defaultValue={times[0]}
         render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange} className={styles.dropdown}>
               <Dropdown.Button className={styles.dropdown__button} needToRotating={true}>
                  <div className={styles.dropdown__text}>{field.value}</div>
                  <ChevronIcon className={styles.dropdown__chevron} />
               </Dropdown.Button>
               <Dropdown.Content className={styles.dropdown__content} addTop={6}>
                  {times.map(el => (
                     <Dropdown.Item key={el} value={el}>
                        {el}
                     </Dropdown.Item>
                  ))}
               </Dropdown.Content>
            </Dropdown>
         )}
      />
   )
}
