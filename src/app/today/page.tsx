"use client"

import { FormProvider, useForm } from "react-hook-form"
import { ProjectDropdown } from "@/components/AddForm/components/ProjectDropdown"
import noteStyles from "@/app/notes/page.module.scss"
import styles from "./page.module.scss"
import { TaskList } from "@/app/components/TaskList/TaskList"
import { useTranslation } from "@/hooks/useTranslation"

export default function Today(){
    const methods = useForm()
    const t = useTranslation("ua");
    return (
        <FormProvider {...methods}>
            <div className={`${noteStyles.notes} bg-alpha br-alpha page ${styles.today}`}>
                <h2 className={noteStyles.header}>{t("today")} <ProjectDropdown /></h2>
                <TaskList className={styles.list}/>
            </div>
        </FormProvider>
    )
}