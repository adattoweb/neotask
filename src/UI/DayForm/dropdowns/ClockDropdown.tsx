import Dropdown from "@/UI/Dropdown/Dropdown"
import { ClockIcon } from "@/UI/Icons/Icons"
import styles from "../DayForm.module.css"
import { ClockPicker } from "@/UI/ClockPicker/ClockPicker"
import clsx from "clsx"

export function ClockDropdown() {
   return (
      <Dropdown className={`${styles.dropdown} bg-alpha`}>
         <Dropdown.Button className={styles.button}>
            <ClockIcon />
         </Dropdown.Button>
         <Dropdown.Content className={clsx(styles.content, styles.clock)}>
            <ClockPicker name="scheduledFor" />
         </Dropdown.Content>
      </Dropdown>
   )
}
