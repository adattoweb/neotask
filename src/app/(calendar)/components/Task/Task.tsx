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

export function Task({ name, description, completed, project, priority, scheduledFor, completedAt, createdAt }: ITask) {
   const getCompletedTasksView: TaskView = "crossed"
   const isHidden = getCompletedTasksView === "hidden"
   const [isCompleted, setIsCompleted] = useState(completed)
   const [isVisible, setIsVisible] = useState(true) // у майбутньому будемо фільтрувати за параметром у календарю
   const [isEdit, setIsEdit] = useState(false)

   let scheduledDate = null
   if (scheduledFor) {
      scheduledDate = getFormattedTime(scheduledFor)
   }

   if (completed && isHidden) return null
   if (!isVisible && isHidden) return null

   function duplicate() {}

   function remove() {}

   return isEdit ? (
      <TaskForm
         className={styles.form}
         isOpen={isEdit}
         setIsOpen={setIsEdit}
         name={name}
         description={description}
         completed={completed}
         project={project}
         priority={priority}
         scheduledFor={scheduledFor}
      />
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
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.description}>{description}</p>
            <Footer>
               <ProjectDropdown project={project} />
               <Menu>
                  <Edit onClick={() => setIsEdit(true)} />
                  <Duplicate onClick={duplicate} />
                  <PriorityList priority={priority} />
                  <Remove onClick={remove} />
               </Menu>
               {scheduledFor != null && (
                  <div className={styles.time}>
                     <ClockIcon />
                     <p>{isCompleted && !isHidden ? getFormattedTime(completedAt) : scheduledDate}</p>
                  </div>
               )}
            </Footer>
         </div>
      </li>
   )
}
