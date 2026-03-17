import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../../page.module.scss"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"

type Themes = Record<string, string>

export function ThemeDropdown() {
    const t = useTranslation("ua")

    const themes: Themes = {
        dark: t("dark"),
        light: t("light"),
        custom: t("custom")
    }
    const { control } = useFormContext()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Controller name="themes" control={control} defaultValue={"dark"} render={({field}) => (
            <Dropdown onClick={() => setIsOpen(prev => !prev)} value={field.value} onChange={field.onChange} className={styles.dropdown}>
                <Dropdown.Button className={styles.dropdown__button}>
                    <div className={styles.dropdown__text}>
                        {themes[field.value]}
                    </div>
                    <ChevronIcon className={`${styles.dropdown__chevron} ${isOpen ? styles.active : ""}`}/>
                </Dropdown.Button>
                <Dropdown.Content className={styles.dropdown__content}>
                    {Object.keys(themes).map(key => <Dropdown.Item key={key} value={key}>{themes[key]}</Dropdown.Item>)}
                </Dropdown.Content>
            </Dropdown>
        )}/>
    )
}