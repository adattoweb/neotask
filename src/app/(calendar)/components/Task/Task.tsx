"use client"

import styles from "./Task.module.css"

import { useState } from "react"
import { Menu, Edit, Duplicate, Remove, PriorityList } from "@/UI/Menu/Menu"
import { CheckMarkIcon, ClockIcon } from "@/UI/Icons/Icons"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"

import { Footer } from "./Footer"
import { TaskForm } from "./TaskForm"
import { ITask, TaskView } from "@/types/task"
import { taskCompletedSounds } from "@/constants/taskCompletedSounds"
import clsx from "clsx"
import { getFormattedTime } from "@/helpers/getFormattedTime"
import { useFormContext } from "react-hook-form"

interface CheckMarkCircleProps {
   isCompleted: boolean
   setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
   setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function CheckMarkCircle({ isCompleted, setIsCompleted, setIsVisible }: CheckMarkCircleProps) {
   function playAudio() {
      const audioKey: keyof typeof taskCompletedSounds = "Sound One" // у майбутньому буде якийсь запит на бдшчку
      if (audioKey === null) return
      const audio = new Audio(taskCompletedSounds[audioKey])
      audio.play()
   }

   function toggleCompleted() {
      setIsCompleted(prev => {
         if (!prev) playAudio()
         return !prev
      })
   }
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
   const { getValues } = useFormContext()
   const [isVisible, setIsVisible] = useState(true) // у майбутньому будемо фільтрувати за параметром у календарю
   const getCompletedTasksView: TaskView = "crossed"
   const isHidden = getCompletedTasksView === "hidden"

   const t = getValues()
   console.log(t)

   const [isCompleted, setIsCompleted] = useState(t.completed)

   let scheduledDate = null
   if (t.scheduledFor) {
      console.log(t.scheduledFor)
      scheduledDate = getFormattedTime(t.scheduledFor.hours)
   }

   if (t.completed && isHidden) return null
   if (!isVisible && isHidden) return null

   function duplicate() {}

   function remove() {}

   return isEdit ? (
      <TaskForm className={styles.form} isOpen={isEdit} />
   ) : (
      <li
         className={clsx(
            styles.task,
            "bg-alpha br-alpha",
            isCompleted && isHidden ? "fade-out" : isCompleted && getCompletedTasksView === "crossed" && styles.crossed,
         )}
      >
         <CheckMarkCircle isCompleted={isCompleted} setIsCompleted={setIsCompleted} setIsVisible={setIsVisible} />
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
               {t.scheduledFor != null && (
                  <div className={styles.time}>
                     <ClockIcon />
                     <p>{isCompleted && !isHidden ? getFormattedTime(t.completedAt) : scheduledDate}</p>
                  </div>
               )}
            </Footer>
         </div>
      </li>
   )
}
