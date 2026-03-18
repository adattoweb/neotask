import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../../page.module.scss"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { useTranslation } from "@/hooks/useTranslation"

export function StartWeekDropdown() {
    const t = useTranslation("ua")

    const starts = [
        t("monday"),
        t("tuesday"),
        t("wednesday"),
        t("thursday"),
        t("friday"),
        t("saturday"),
        t("sunday")
    ]
    const { control } = useFormContext()
    return (
        <Controller name="start-week" control={control} defaultValue={starts[0]} render={({field}) => (
            <Dropdown value={field.value} onChange={field.onChange} className={styles.dropdown}>
                <Dropdown.Button className={styles.dropdown__button} needToRotating={true}>
                    <div className={styles.dropdown__text}>
                        {field.value}
                    </div>
                    <ChevronIcon className={styles.dropdown__chevron}/>
                </Dropdown.Button>
                <Dropdown.Content className={styles.dropdown__content} addTop={6}>
                    {starts.map(el => <Dropdown.Item key={el} value={el}>{el}</Dropdown.Item>)}
                </Dropdown.Content>
            </Dropdown>
        )}/>
    )
}