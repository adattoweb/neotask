import styles from "./TaskList.module.css"
import { useState } from "react"
import { CheckMarkIcon, ClockIcon } from "@/UI/Icons/Icons"
import { Footer } from "./Footer"
import { TaskForm } from "../TaskForm/TaskForm"
import Menu from "./Menu"
import { ProjectDropdown } from "@/components/AddForm/components/ProjectDropdown"

interface CheckMarkCircleProps {
   isCompleted: boolean
   setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
   setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const taskCompletedSounds = {
   "Sound One": "/audio/taskCompleted1.mp3",
   "Sound Two": "/audio/taskCompleted2.mp3",
   "Sound Three": "/audio/taskCompleted3.mp3",
   "Sound Four": "/audio/taskCompleted4.mp3",
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

export function Task() {
   const [isCompleted, setIsCompleted] = useState(false)
   const [isVisible, setIsVisible] = useState(true)
   const [isEdit, setIsEdit] = useState(false)

   const data = {
      name: "SKIBIDI TASK",
      description: "I need to do something...",
   }

   if (!isVisible) return null

   return isEdit ? (
      <TaskForm className={styles.form} isOpen={isEdit} setIsOpen={setIsEdit} defaultData={data} />
   ) : (
      <li className={`${styles.task} bg-alpha br-alpha ${isCompleted ? "fade-out" : ""}`}>
         <CheckMarkCircle isCompleted={isCompleted} setIsCompleted={setIsCompleted} setIsVisible={setIsVisible} />
         <div className={styles.content}>
            <h4 className={styles.name}>{data.name}</h4>
            <p className={styles.description}>{data.description}</p>
            <Footer>
               <ProjectDropdown />
               <Menu>
                  <Menu.Edit onClick={() => setIsEdit(true)} />
                  <Menu.Duplicate />
                  <Menu.PriorityList />
                  <Menu.Remove />
               </Menu>
               <div className={styles.time}>
                  <ClockIcon />
                  <p>16:00</p>
               </div>
            </Footer>
         </div>
      </li>
   )
}
