import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../DayForm.module.css"
import { CalendarIcon, CloseIcon } from "@/UI/Icons/Icons"
import { DayPicker } from "react-day-picker"
import { uk } from "react-day-picker/locale"
import "react-day-picker/style.css"
import { useTranslation } from "@/hooks/useTranslation"
import clsx from "clsx"
import { capitalize } from "@/helpers/capitalize"
import { Controller, useFormContext } from "react-hook-form"

export function DateDropdown() {
   const t = useTranslation("ua")

   const { control } = useFormContext()

   return (
      <Controller
         name="scheduledFor"
         control={control}
         render={({ field }) => {
            const date = new Date(field.value)

            return (
               <Dropdown className={`${styles.dropdown} bg-alpha`}>
                  <Dropdown.Button className={styles.button}>
                     <CalendarIcon />
                     <p>
                        {!date
                           ? t("notSelected")
                           : capitalize(
                                date.toLocaleDateString(undefined, {
                                   weekday: "long",
                                }),
                             )}
                     </p>
                     <CloseIcon className={styles.close} onClick={() => field.onChange(null)} />
                  </Dropdown.Button>
                  <Dropdown.Content className={clsx(styles.content, "rdp-dropdown__content")}>
                     <DayPicker
                        locale={uk}
                        animate
                        required
                        showOutsideDays
                        mode="single"
                        selected={field.value}
                        onSelect={newDate => field.onChange(newDate.getTime())}
                        footer={
                           field.value
                              ? `${t("selected")}: ${field.value.date?.toLocaleDateString()}`
                              : `${t("pickADay")}.`
                        }
                     />
                  </Dropdown.Content>
               </Dropdown>
            )
         }}
      />
   )
}
