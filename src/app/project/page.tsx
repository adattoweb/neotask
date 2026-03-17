"use client"

import { FormProvider, useForm } from "react-hook-form"
import styles from "./page.module.scss"
import { TaskList } from "../components/TaskList/TaskList"
import { NotesList } from "../notes/components/NotesList/NotesList"
import { useTranslation } from "@/hooks/useTranslation"

export default function Today() {
    const methods = useForm()
    const t = useTranslation("ua")

    return (
        <FormProvider {...methods}>
            <div className={`${styles.today} bg-alpha br-alpha`}>
                <h2 className={styles.header}>{t("project")}</h2>
                <h3 className={styles.name}>{t("tasks")}</h3>
                <TaskList className={styles.list} />
                <hr className={`${styles.divider} bg-alpha`} />
                <h3 className={styles.name}>{t("notes")}</h3>
                <NotesList />
            </div>
        </FormProvider>
    )
}