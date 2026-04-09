import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../DayForm.module.css"
import { CalendarIcon, CloseIcon } from "@/UI/Icons/Icons"
import { DayPicker } from "react-day-picker"
import { useState } from "react"
import { uk } from "react-day-picker/locale"
import "react-day-picker/style.css"
import { useTranslation } from "@/hooks/useTranslation"
import clsx from "clsx"

export function DateDropdown() {
   const [selected, setSelected] = useState<Date>()
   const t = useTranslation("ua")
   return (
      <Dropdown className={`${styles.dropdown} bg-alpha`}>
         <Dropdown.Button className={styles.button}>
            <CalendarIcon />
            <p>Четвер</p>
            <CloseIcon className={styles.close} />
         </Dropdown.Button>
         <Dropdown.Content className={clsx(styles.content, "rdp-dropdown__content")}>
            <DayPicker
               locale={uk}
               animate
               required
               showOutsideDays
               mode="single"
               selected={selected}
               onSelect={setSelected}
               footer={selected ? `${t("selected")}: ${selected.toLocaleDateString()}` : `${t("pickADay")}.`}
            />
         </Dropdown.Content>
      </Dropdown>
   )
}
