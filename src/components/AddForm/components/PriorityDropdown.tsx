import styles from "../AddForm.module.css"
import dropdownStyles from "@/UI/Dropdown/Dropdown.module.css"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { FlagIcon } from "@/UI/Icons/Icons"
import { Controller, useFormContext } from "react-hook-form"

export function PriorityDropdown() {
   const { control } = useFormContext()
   return (
      <Controller
         name="priority"
         control={control}
         defaultValue="2"
         render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange} className={`${styles.dropdown} bg-alpha`}>
               <Dropdown.Button className={styles.button}>
                  <FlagIcon />
               </Dropdown.Button>
               <Dropdown.Content className={styles.content}>
                  <div className={dropdownStyles["list-grid"]}>
                     <Dropdown.Item value="1">
                        <FlagIcon stroke="#e12c2c" />
                     </Dropdown.Item>
                     <Dropdown.Item value="2">
                        <FlagIcon stroke="#e6871a" />
                     </Dropdown.Item>
                     <Dropdown.Item value="3">
                        <FlagIcon stroke="#5ec05d" />
                     </Dropdown.Item>
                     <Dropdown.Item value="4">
                        <FlagIcon stroke="#5392e9" />
                     </Dropdown.Item>
                     <Dropdown.Item value="5">
                        <FlagIcon stroke="#fff" />
                     </Dropdown.Item>
                  </div>
               </Dropdown.Content>
            </Dropdown>
         )}
      ></Controller>
   )
}
