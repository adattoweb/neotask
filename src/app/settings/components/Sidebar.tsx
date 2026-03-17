import { Checkbox } from "@/UI/Checkbox/Checkbox"
import styles from "../page.module.scss"
import { useFormContext } from "react-hook-form"
import { ClipboardIcon, MagnifyingGlassIcon, SunIcon } from "@/UI/Icons/Icons"
import { Block } from "./Constructor/Constructor"
import { useTranslation } from "@/hooks/useTranslation"

export function Sidebar(){
    const { register } = useFormContext()
    const t = useTranslation("ua")
    return (
        <div className={`${styles.sidebar} ${styles.content}`}>
            <Block className={styles["mt-6"]}>
                <Checkbox {...register("isCounterVisible")}><p>{t("showTaskCount")}</p></Checkbox>
                <Checkbox {...register("isSearchVisible")}><MagnifyingGlassIcon /> <p>{t("search")}</p></Checkbox>
                <Checkbox {...register("isTodayVisible")}><SunIcon /> <p>{t("today")}</p></Checkbox>
                <Checkbox {...register("isNotesVisible")}><ClipboardIcon /> <p>{t("notes")}</p></Checkbox>
                <Checkbox {...register("isProjectsVisible")}>{t("projects")}</Checkbox>
            </Block>
        </div>
    )
}