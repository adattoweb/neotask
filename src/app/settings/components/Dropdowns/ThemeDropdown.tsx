import styles from "../../page.module.css"
import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { useTranslation } from "@/hooks/useTranslation"

type Themes = Record<string, string>

export function ThemeDropdown() {
   const t = useTranslation("ua")

   const themes: Themes = {
      dark: t("dark"),
      light: t("light"),
      custom: t("custom"),
   }
   const { control } = useFormContext()
   return (
      <Controller
         name="themes"
         control={control}
         defaultValue={"dark"}
         render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange} className={styles.dropdown}>
               <Dropdown.Button className={styles.dropdown__button} needToRotating={true}>
                  <div className={styles.dropdown__text}>{themes[field.value]}</div>
                  <ChevronIcon className={styles.dropdown__chevron} />
               </Dropdown.Button>
               <Dropdown.Content className={styles.dropdown__content} addTop={6}>
                  {Object.keys(themes).map((key) => (
                     <Dropdown.Item key={key} value={key}>
                        {themes[key]}
                     </Dropdown.Item>
                  ))}
               </Dropdown.Content>
            </Dropdown>
         )}
      />
   )
}
