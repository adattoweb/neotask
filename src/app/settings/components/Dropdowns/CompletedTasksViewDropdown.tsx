import styles from "./Dropdowns.module.css"
import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { getLang } from "@/helpers/getLang"

interface IValue {
   en: string
   ua: string
}
type ValuesType = Record<string, IValue>

const values: ValuesType = {
   hidden: {
      en: "Hide",
      ua: "Не показувати",
   },
   show: {
      en: "Show",
      ua: "Показувати",
   },
   crossed: {
      en: "Strikethrough",
      ua: "Закреслити",
   },
} as const

export function CompletedTasksViewDropdown() {
   const { control } = useFormContext()
   const lang = getLang()
   return (
      <Controller
         name="completedTasksView"
         control={control}
         defaultValue={"hidden"}
         render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange} className={styles.dropdown}>
               <Dropdown.Button className={styles.dropdown__button} needToRotating={true}>
                  <div className={styles.dropdown__text}>{values[field.value][lang]}</div>
                  <ChevronIcon className={styles.dropdown__chevron} />
               </Dropdown.Button>
               <Dropdown.Content className={styles.dropdown__content} addTop={6}>
                  {Object.keys(values).map(key => (
                     <Dropdown.Item key={key} value={key}>
                        {values[key][lang]}
                     </Dropdown.Item>
                  ))}
               </Dropdown.Content>
            </Dropdown>
         )}
      />
   )
}
