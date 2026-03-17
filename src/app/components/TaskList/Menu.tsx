import Dropdown from "@/UI/Dropdown/Dropdown"
import { DuplicateIcon, EditIcon, EllipsisIcon, FlagIcon, RemoveIcon } from "@/UI/Icons/Icons"
import { Controller, useFormContext } from "react-hook-form"
import styles from "./TaskList.module.scss"
import dropdownStyles from "@/UI/Dropdown/Dropdown.module.scss"
import { PropsWithChildren } from "react"
import { WithClassName } from "@/types/types"

import { useTranslation } from "@/hooks/useTranslation"

type MenuProps = PropsWithChildren<WithClassName>

interface MenuItem {
    onClick?: () => void
}

function Remove({ onClick }:MenuItem) {
    const t = useTranslation("ua")
    return (
        <div className={dropdownStyles.item}>
            <RemoveIcon />
            <p>{t("remove")}</p>
        </div>
    )
}

function Edit({ onClick }:MenuItem){
    const t = useTranslation("ua")
    return (
        <div className={dropdownStyles.item} onClick={onClick}>
            <EditIcon />
            <p>{t("edit")}</p>
        </div>
    )
}

function Duplicate({ onClick }:MenuItem){
    const t = useTranslation("ua")
    return (
        <div className={dropdownStyles.item}>
            <DuplicateIcon />
            <p>{t("duplicate")}</p>
        </div>
    )
}

function PriorityList({ onClick }: MenuItem){
    const t = useTranslation("ua")

    return (
        <>
            <h4 className={dropdownStyles.header}>{t("priority")}</h4>
            <div className={dropdownStyles["list-grid"]}>
                <Dropdown.Item value="1"><FlagIcon stroke="#e12c2c" /></Dropdown.Item>
                <Dropdown.Item value="2"><FlagIcon stroke="#e6871a" /></Dropdown.Item>
                <Dropdown.Item value="3"><FlagIcon stroke="#5ec05d" /></Dropdown.Item>
                <Dropdown.Item value="4"><FlagIcon stroke="#5392e9" /></Dropdown.Item>
                <Dropdown.Item value="5"><FlagIcon stroke="#fff" /></Dropdown.Item>
            </div>
        </>
    )
}


function Menu({ className = "", children }:MenuProps){
    const { control } = useFormContext()

    return (
        <Controller name="priority" control={control} defaultValue={undefined} render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange} className={`${styles.ellipsis} ${className}`}>
                <Dropdown.Button>
                    <EllipsisIcon className={styles.ellipsis__svg} />
                </Dropdown.Button>
                <Dropdown.Content>
                    {children}
                </Dropdown.Content>
            </Dropdown>
        )} />
    )
}

Menu.Remove = Remove
Menu.Edit = Edit
Menu.Duplicate = Duplicate
Menu.PriorityList = PriorityList

export default Menu