"use client"

import styles from "./Task.module.css"

import { useState } from "react"
import { Menu, Edit, Duplicate, Remove, PriorityList } from "@/UI/Menu/Menu"
import { CheckMarkIcon, ClockIcon } from "@/UI/Icons/Icons"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"

import { Footer } from "./Footer"
import { TaskForm } from "./TaskForm"
import { TaskProps } from "@/types/task"
import { taskCompletedSounds } from "@/constants/taskCompletedSounds"

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

export function Task({ name, description, completed, project, priority, scheduledFor }: TaskProps) {
   const [isCompleted, setIsCompleted] = useState(completed)
   const [isVisible, setIsVisible] = useState(true) // у майбутньому будемо фільтрувати за параметром у календарю
   const [isEdit, setIsEdit] = useState(false)

   let scheduledDate = null
   if (scheduledFor) {
      const scheduledTime = new Date(scheduledFor)
      scheduledDate = `${scheduledTime.getHours()}:${String(scheduledTime.getMinutes()).padStart(2, "0")}`
   }

   if (!isVisible) return null

   function duplicate() {}

   function remove() {}

   return isEdit ? (
      <TaskForm className={styles.form} isOpen={isEdit} setIsOpen={setIsEdit} />
   ) : (
      <li className={`${styles.task} bg-alpha br-alpha ${isCompleted ? "fade-out" : ""}`}>
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
                     <p>{scheduledDate}</p>
                  </div>
               )}
            </Footer>
         </div>
      </li>
   )
}
