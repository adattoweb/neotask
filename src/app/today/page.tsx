"use client"

import styles from "./page.module.css"
import noteStyles from "@/app/notes/page.module.css"
import { FormProvider, useForm } from "react-hook-form"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"
import { TasksList } from "@/app/(calendar)/components/TasksList/TasksList"
import { useTranslation } from "@/hooks/useTranslation"
import { ITask } from "@/types/task"

const date = new Date()

const tasks: ITask[] = [
   {
      name: "Зробити домашнє завдання",
      description: null,
      completed: false,
      project: "Study",
      priority: 1,
      scheduledFor: null,
      createdAt: date.getDate(),
      completedAt: null,
   },
]

export default function Today() {
   const methods = useForm()
   const t = useTranslation("ua")
   return (
      <FormProvider {...methods}>
         <div className={`${noteStyles.notes} bg-alpha page ${styles.today}`}>
            <h2 className={noteStyles.header}>
               {t("today")} <ProjectDropdown />
            </h2>
            <TasksList className={styles.list} tasks={tasks} />
         </div>
      </FormProvider>
   )
}
