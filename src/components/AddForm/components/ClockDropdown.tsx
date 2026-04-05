import Dropdown from "@/UI/Dropdown/Dropdown"
import { ClockIcon } from "@/UI/Icons/Icons"
import styles from "../AddForm.module.css"
import { ClockPicker } from "@/UI/ClockPicker/ClockPicker"
import type { ClockData } from "@/UI/ClockPicker/ClockPicker"
import clsx from "clsx"

export function ClockDropdown() {
   const defaultData: ClockData = {
      hours: 12,
      minutes: 0,
   }
   return (
      <Dropdown className={`${styles.dropdown} bg-alpha`}>
         <Dropdown.Button className={styles.button}>
            <ClockIcon />
         </Dropdown.Button>
         <Dropdown.Content className={clsx(styles.content, styles.clock)}>
            <ClockPicker name="time" defaultData={defaultData} />
         </Dropdown.Content>
      </Dropdown>
   )
}
