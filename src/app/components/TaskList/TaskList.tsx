import { useEffect, useState } from "react"
import { CheckMarkIcon, ClockIcon, PlusCircleIcon, } from "@/UI/Icons/Icons"

import styles from "./TaskList.module.scss"
import { Footer } from "./Footer"
import { TaskForm } from "../TaskForm/TaskForm"
import Menu from "./Menu"
import { ProjectDropdown } from "@/components/AddForm/components/ProjectDropdown"
import { WithClassName } from "@/types/types"

import { useTranslation } from "@/hooks/useTranslation"

function Add(){
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslation("ua")

  useEffect(() => {
    if (isOpen) setIsVisible(true)
  }, [isOpen])

  return (
    <footer className={styles.add__wrapper}>
      {isVisible ? <TaskForm className={isOpen ? "fade-in" : "fade-out"} isOpen={isOpen} setIsOpen={setIsOpen} setIsVisible={setIsVisible}/> : (
        <div className={`${styles.add} ${isOpen ? "fade-out" : "fade-in"}`}>
          <PlusCircleIcon className={styles.icon}/>
          <p onClick={() => setIsOpen(true)}>{t("addNewTask")}</p>
        </div>
      )}
    </footer>
  )
}

function Task(){
  const [isCompleted, setIsCompleted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isEdit, setIsEdit] = useState(false)

  const data = {
    name: "SKIBIDI TASK",
    description: "I need to do something..."
  }

  if(!isVisible) return null

  return isEdit ? <TaskForm className={styles.form} isOpen={isEdit} setIsOpen={setIsEdit} defaultData={data}/> : (<li className={`${styles.task} bg-alpha br-alpha ${isCompleted ? "fade-out" : ""}`}>
      <div className={`${styles.circle} ${styles.orange} ${isCompleted ? styles.active : ""}`} onClick={() => setIsCompleted(true)}>
        <CheckMarkIcon className={styles.checkmark} onAnimationEnd={() => setIsVisible(false)}/>
      </div>
      <div className={styles.content}>
      <h4 className={styles.name}>{data.name}</h4>
      <p className={styles.description}>{data.description}</p>
      <Footer>
        <ProjectDropdown />
        <Menu>
          <Menu.Edit onClick={() => setIsEdit(true)}/>
          <Menu.Duplicate/>
          <Menu.PriorityList/>
          <Menu.Remove/>
        </Menu>
        <div className={styles.time}>
          <ClockIcon/>
          <p>16:00</p>
        </div>
      </Footer>
    </div>
  </li>)

}

export function TaskList({ className = ""}:WithClassName){
  return (
    <ul className={`${styles.list} ${className}`}>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Add/>
    </ul>
  )
}