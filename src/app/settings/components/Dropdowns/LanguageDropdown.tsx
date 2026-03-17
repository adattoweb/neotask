import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../../page.module.scss"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { useState } from "react"

type Languages = Record<string, string>

const languages:Languages = {
    en: "English",
    ua: "Українська (Ukrainian)"
}

export function LanguageDropdown() {
    const { control } = useFormContext()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Controller name="language" control={control} defaultValue={"en"} render={({field}) => (
            <Dropdown onClick={() => setIsOpen(prev => !prev)} value={field.value} onChange={field.onChange} className={styles.dropdown}>
                <Dropdown.Button className={styles.dropdown__button}>
                    <div className={styles.dropdown__text}>
                        {languages[field.value]}
                    </div>
                    <ChevronIcon className={`${styles.dropdown__chevron} ${isOpen ? styles.active : ""}`}/>
                </Dropdown.Button>
                <Dropdown.Content className={styles.dropdown__content}>
                    {Object.keys(languages).map(key => <Dropdown.Item key={key} value={key}>{languages[key]}</Dropdown.Item>)}
                </Dropdown.Content>
            </Dropdown>
        )}/>
    )
}