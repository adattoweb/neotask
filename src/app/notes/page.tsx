"use client"

import { FormProvider, useForm } from "react-hook-form"
import { ProjectDropdown } from "@/components/AddForm/components/ProjectDropdown"
import styles from "./page.module.scss"
import { NotesList } from "./components/NotesList/NotesList"
import { useTranslation } from "@/hooks/useTranslation"
import { NoteModal } from "@/UI/Modals/NoteModal/NoteModal"

export default function Notes(){
    const methods = useForm()
    const t = useTranslation("ua")

    return (
        <FormProvider {...methods}>
            <div className={`${styles.notes} bg-alpha br-alpha page`}>
                <h2 className={styles.header}>{t("notes")}<ProjectDropdown /></h2>
                <NotesList/>
            </div>
            <NoteModal/>
        </FormProvider>
    )
}