import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../../page.module.scss"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { useState } from "react"

const times = [
    "UTC+1",
    "UTC+2",
    "UTC+3",
]

export function TimeFormatDropdown() {
    const { control } = useFormContext()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Controller name="time-format" control={control} defaultValue={times[0]} render={({field}) => (
            <Dropdown onClick={() => setIsOpen(prev => !prev)} value={field.value} onChange={field.onChange} className={styles.dropdown}>
                <Dropdown.Button className={styles.dropdown__button}>
                    <div className={styles.dropdown__text}>
                        {field.value}
                    </div>
                    <ChevronIcon className={`${styles.dropdown__chevron} ${isOpen ? styles.active : ""}`}/>
                </Dropdown.Button>
                <Dropdown.Content className={styles.dropdown__content}>
                    {times.map(el => <Dropdown.Item key={el} value={el}>{el}</Dropdown.Item>)}
                </Dropdown.Content>
            </Dropdown>
        )}/>
    )
}