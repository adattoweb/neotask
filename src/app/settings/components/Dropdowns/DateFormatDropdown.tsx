import styles from "../../page.module.css"
import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { ChevronIcon } from "@/UI/Icons/Icons"

const dates = ["YYYY/MM/DD"]

export function DateFormatDropdown() {
   const { control } = useFormContext()
   return (
      <Controller
         name="date-format"
         control={control}
         defaultValue={dates[0]}
         render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange} className={styles.dropdown}>
               <Dropdown.Button className={styles.dropdown__button} needToRotating={true}>
                  <div className={styles.dropdown__text}>{field.value}</div>
                  <ChevronIcon className={styles.dropdown__chevron} />
               </Dropdown.Button>
               <Dropdown.Content className={styles.dropdown__content} addTop={6}>
                  {dates.map((el) => (
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
