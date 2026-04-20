import styles from "./TasksList.module.css"
import { useEffect, useState } from "react"
import { PlusCircleIcon } from "@/UI/Icons/Icons"
import { TaskForm } from "../Task/TaskForm"

import { useTranslation } from "@/hooks/useTranslation"
import { FormProvider, useForm } from "react-hook-form"
import { FormContext } from "@/context/taskFormContext"
import { ITask } from "@/types/task"

export function Add() {
   const [isOpen, setIsOpen] = useState(false)
   const [isVisible, setIsVisible] = useState(false)
   const t = useTranslation("ua")

   useEffect(() => {
      if (isOpen) setIsVisible(true)
   }, [isOpen])

   const value = {
      setIsEdit: setIsOpen,
   }

   const defaultData: ITask = {
      name: "",
      description: null,
      project: null,
      priority: 5,
      scheduledFor: null,
      completed: false,
      completedAt: null,
      createdAt: new Date().getTime(),
   }

   const methods = useForm<ITask>({
      defaultValues: defaultData,
   })

   return (
      <FormProvider {...methods}>
         <FormContext value={value}>
            <footer className={styles.add__wrapper}>
               {isVisible ? (
                  <TaskForm className={isOpen ? "fade-in" : "fade-out"} isEdit={isOpen} setIsVisible={setIsVisible} />
               ) : (
                  <div className={`${styles.add} ${isOpen ? "fade-out" : "fade-in"}`} onClick={() => setIsOpen(true)}>
                     <PlusCircleIcon className={styles.icon} />
                     <p>{t("addNewTask")}</p>
                  </div>
               )}
            </footer>
         </FormContext>
      </FormProvider>
   )
}
