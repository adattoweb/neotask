"use client"

import { FormProvider, useForm } from "react-hook-form"
import { ProjectDropdown } from "@/components/AddForm/components/ProjectDropdown"
import styles from "./page.module.scss"
import { TaskList } from "@/app/components/TaskList/TaskList"
import { useTranslation } from "@/hooks/useTranslation"

export default function Today(){
    const methods = useForm()
    const t = useTranslation("ua");
    return (
        <FormProvider {...methods}>
            <div className={`${styles.today} bg-alpha br-alpha`}>
                <h2 className={styles.header}>{t("today")} <ProjectDropdown /></h2>
                <TaskList className={styles.list}/>
            </div>
        </FormProvider>
    )
}