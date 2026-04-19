import styles from "../DayForm.module.css"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { ClockIcon } from "@/UI/Icons/Icons"
import { ClockPicker } from "@/UI/ClockPicker/ClockPicker"
import clsx from "clsx"
import { useFormContext } from "react-hook-form"

export function ClockDropdown() {
   const { watch } = useFormContext()
   const scheduledFor = watch("scheduledFor")
   const date = new Date(scheduledFor)
   const time = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
   return (
      <Dropdown className={`${styles.dropdown} bg-alpha`}>
         <Dropdown.Button className={styles.button}>
            <ClockIcon />
            <p className={styles.clock__time}>{time}</p>
         </Dropdown.Button>
         <Dropdown.Content className={clsx(styles.content, styles.clock)}>
            <ClockPicker name="scheduledFor" minuteStep={5} />
         </Dropdown.Content>
      </Dropdown>
   )
}
