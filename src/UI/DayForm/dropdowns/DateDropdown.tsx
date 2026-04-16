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
import { IScheduledFor } from "@/types/task"

export function DateDropdown() {
   const t = useTranslation("ua")

   const { control } = useFormContext()

   const getDateUndefined = (value: IScheduledFor): IScheduledFor => {
      return {
         date: undefined,
         hours: value.hours,
         minutes: value.minutes,
      }
   }

   return (
      <Controller
         name="scheduledFor"
         control={control}
         render={({ field }) => (
            <Dropdown className={`${styles.dropdown} bg-alpha`}>
               <Dropdown.Button className={styles.button}>
                  <CalendarIcon />
                  <p>
                     {field.value.date === undefined
                        ? t("notSelected")
                        : capitalize(
                             field.value.date.toLocaleDateString(undefined, {
                                weekday: "long",
                             }),
                          )}
                  </p>
                  <CloseIcon className={styles.close} onClick={() => field.onChange(getDateUndefined(field.value))} />
               </Dropdown.Button>
               <Dropdown.Content className={clsx(styles.content, "rdp-dropdown__content")}>
                  <DayPicker
                     locale={uk}
                     animate
                     required
                     showOutsideDays
                     mode="single"
                     selected={field.value.date}
                     onSelect={newDate => {
                        field.onChange({
                           ...field.value,
                           date: newDate,
                        })
                     }}
                     footer={
                        field.value.date
                           ? `${t("selected")}: ${field.value.date?.toLocaleDateString()}`
                           : `${t("pickADay")}.`
                     }
                  />
               </Dropdown.Content>
            </Dropdown>
         )}
      />
   )
}
