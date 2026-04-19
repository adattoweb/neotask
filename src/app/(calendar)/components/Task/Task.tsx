"use client"

import styles from "./Task.module.css"

import { useState } from "react"
import { Menu, Edit, Duplicate, Remove, PriorityList } from "@/UI/Menu/Menu"
import { CheckMarkIcon, ClockIcon } from "@/UI/Icons/Icons"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"

import { Footer } from "./Footer"
import { TaskForm } from "./TaskForm"
import { TaskView } from "@/types/task"
import { taskCompletedSounds } from "@/constants/taskCompletedSounds"
import clsx from "clsx"
import { getFormattedTime } from "@/helpers/getFormattedTime"
import { useFormContext } from "react-hook-form"

interface CheckMarkCircleProps {
   toggleCompleted: () => void
   isCompleted: boolean
   setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function CheckMarkCircle({ toggleCompleted, isCompleted, setIsVisible }: CheckMarkCircleProps) {
   return (
      <div
         className={`${styles.circle} ${styles.orange} ${isCompleted ? styles.active : ""}`}
         onClick={toggleCompleted}
      >
         <CheckMarkIcon className={styles.checkmark} onAnimationEnd={() => setIsVisible(false)} />
      </div>
   )
}

interface TaskProps {
   isEdit: boolean
   setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export function Task({ isEdit, setIsEdit }: TaskProps) {
   const { getValues, setValue, watch } = useFormContext()
   const [isVisible, setIsVisible] = useState(true) // у майбутньому будемо фільтрувати за параметром у календарю
   const getCompletedTasksView: TaskView = "crossed"
   const isHidden = getCompletedTasksView === "hidden"

   const completedAt = watch("completedAt")

   const t = getValues()

   const [isCompleted, setIsCompleted] = useState<boolean>(t.completed)

   function toggleCompleted() {
      function playAudio() {
         const audioKey: keyof typeof taskCompletedSounds = "Sound One" // у майбутньому буде якийсь запит на бдшчку
         if (audioKey === null) return
         const audio = new Audio(taskCompletedSounds[audioKey])
         audio.play()
      }

      if (!isCompleted) {
         playAudio()
         setValue("completedAt", Date.now())
      } else {
         setValue("completedAt", null)
      }

      setIsCompleted(prev => !prev)
   }

   if (t.completed && isHidden) return null
   if (!isVisible && isHidden) return null

   function duplicate() {}

   function remove() {}

   console.log("t.completedAt:", completedAt, isCompleted, t.name, t.scheduledFor)

   const isAnyTimeExist = t.scheduledFor || completedAt

   return isEdit ? (
      <TaskForm className={styles.form} isEdit={isEdit} />
   ) : (
      <li
         className={clsx(
            styles.task,
            "bg-alpha br-alpha",
            isCompleted && isHidden ? "fade-out" : isCompleted && getCompletedTasksView === "crossed" && styles.crossed,
            isCompleted && styles.completed,
         )}
      >
         <CheckMarkCircle toggleCompleted={toggleCompleted} isCompleted={isCompleted} setIsVisible={setIsVisible} />
         <div className={styles.content}>
            <h4 className={styles.name}>{t.name}</h4>
            <p className={styles.description}>{t.description}</p>
            <Footer>
               <ProjectDropdown />
               <Menu>
                  <Edit onClick={() => setIsEdit(true)} />
                  <Duplicate onClick={duplicate} />
                  <PriorityList />
                  <Remove onClick={remove} />
               </Menu>
               {isAnyTimeExist && (
                  <div className={styles.time}>
                     <ClockIcon />
                     <p>
                        {isCompleted && !isHidden ? getFormattedTime(completedAt) : getFormattedTime(t?.scheduledFor)}
                     </p>
                  </div>
               )}
            </Footer>
         </div>
      </li>
   )
}
