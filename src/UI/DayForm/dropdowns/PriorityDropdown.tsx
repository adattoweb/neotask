import styles from "../DayForm.module.css"
import menuStyles from "@/UI/Menu/Menu.module.css"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { FlagIcon } from "@/UI/Icons/Icons"
import { Controller, useFormContext } from "react-hook-form"
import { priorities } from "@/constants/priorities"

import List from "@/UI/List/List"
import clsx from "clsx"

export function PriorityDropdown() {
   const { control } = useFormContext()
   return (
      <Controller
         name="priority"
         control={control}
         render={({ field }) => (
            <Dropdown className={`${styles.dropdown} bg-alpha`}>
               <Dropdown.Button className={styles.button}>
                  <FlagIcon />
               </Dropdown.Button>
               <Dropdown.Content className={styles.content}>
                  <List onChange={field.onChange} className={menuStyles["priority-list"]}>
                     {priorities.map((p, idx) => (
                        <List.Item
                           key={idx}
                           className={clsx(menuStyles["priority-item"], field.value == p.priority && menuStyles.active)}
                           value={String(p.priority)}
                        >
                           <FlagIcon stroke={p.color} />
                        </List.Item>
                     ))}
                  </List>
               </Dropdown.Content>
            </Dropdown>
         )}
      ></Controller>
   )
}
