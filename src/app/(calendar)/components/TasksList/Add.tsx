import styles from "./TasksList.module.css"
import { useEffect, useState } from "react"
import { PlusCircleIcon } from "@/UI/Icons/Icons"
import { TaskForm } from "../Task/TaskForm"

import { useTranslation } from "@/hooks/useTranslation"

export function Add() {
   const [isOpen, setIsOpen] = useState(false)
   const [isVisible, setIsVisible] = useState(false)
   const t = useTranslation("ua")

   useEffect(() => {
      if (isOpen) setIsVisible(true)
   }, [isOpen])

   return (
      <footer className={styles.add__wrapper}>
         {isVisible ? (
            <TaskForm
               className={isOpen ? "fade-in" : "fade-out"}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               setIsVisible={setIsVisible}
            />
         ) : (
            <div className={`${styles.add} ${isOpen ? "fade-out" : "fade-in"}`} onClick={() => setIsOpen(true)}>
               <PlusCircleIcon className={styles.icon} />
               <p>{t("addNewTask")}</p>
            </div>
         )}
      </footer>
   )
}
