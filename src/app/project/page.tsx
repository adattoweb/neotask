"use client"

import styles from "./page.module.css"
import { FormProvider, useForm } from "react-hook-form"
import noteStyles from "@/app/notes/page.module.scss"
import { TaskList } from "../(calendar)/components/TaskList/TaskList"
import { NotesList } from "../notes/components/NotesList/NotesList"
import { useTranslation } from "@/hooks/useTranslation"

export default function Today() {
   const methods = useForm()
   const t = useTranslation("ua")

   return (
      <FormProvider {...methods}>
         <div className={`${noteStyles.notes} ${styles.project} bg-alpha br-alpha page`}>
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
