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
import { editDate } from "@/helpers/editDate"

export function DateDropdown() {
   const t = useTranslation("ua")

   const { control } = useFormContext()

   const today = new Date()

   return (
      <Controller
         name="scheduledFor"
         control={control}
         render={({ field }) => {
            const date = new Date(field.value)
            const isDisplay = field.value !== null && today.toDateString() !== date.toDateString()

            return (
               <Dropdown className={`${styles.dropdown} bg-alpha`}>
                  <Dropdown.Button className={styles.button}>
                     <CalendarIcon />
                     {isDisplay && (
                        <p>
                           {capitalize(
                              date.toLocaleDateString(undefined, {
                                 weekday: "long",
                              }),
                           )}
                        </p>
                     )}
                     {isDisplay && (
                        <CloseIcon
                           className={styles.close}
                           onClick={() => field.onChange(editDate(new Date(), date.getHours(), date.getMinutes()))}
                        />
                     )}
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
                        footer={field.value ? `${t("selected")}: ${date?.toLocaleDateString()}` : `${t("pickADay")}.`}
                     />
                  </Dropdown.Content>
               </Dropdown>
            )
         }}
      />
   )
}
