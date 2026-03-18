import { Controller, useFormContext } from "react-hook-form"
import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../../page.module.scss"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { ROUTES } from "@/constants/routes"

export function ScreenDropdown() {
    const { control } = useFormContext()

    const lang = "UA"

    return (
        <Controller name="screen" control={control} defaultValue={"HOME"} render={({field}) => {
            const Icon = ROUTES[field.value].ICON
            return (
            <Dropdown value={field.value} onChange={field.onChange} className={styles.dropdown}>
                <Dropdown.Button className={styles.dropdown__button} needToRotating={true}>
                    <div className={styles.dropdown__text}>
                        <Icon/>
                        {ROUTES[field.value].NAME[lang]}
                    </div>
                    <ChevronIcon className={styles.dropdown__chevron}/>
                </Dropdown.Button>
                <Dropdown.Content className={styles.dropdown__content}>
                    {Object.keys(ROUTES).map(key => {
                        const Icon = ROUTES[key].ICON
                        return (
                            <Dropdown.Item key={key} value={key}>
                                <Icon/>
                                <p>{ROUTES[key].NAME[lang]}</p>
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Content>
            </Dropdown>)
        }}/>
    )
}