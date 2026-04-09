import styles from "@/app/components/TaskList/TaskList.module.css"
import taskStyles from "@/app/components/TaskList/TaskList.module.css"
import formStyles from "./NotesList.module.css"
import { useState, useEffect } from "react"
import { NoteForm } from "../NoteForm/NoteForm"
import { Footer } from "@/app/components/TaskList/Footer"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"
import Menu from "@/app/components/TaskList/Menu"
import { PlusCircleIcon } from "@/UI/Icons/Icons"
import { useTranslation } from "@/hooks/useTranslation"
import { useModalsStore } from "@/stores/useModalsStore"
import { useNoteStore } from "@/stores/useNoteStore"
import { ignoreClick } from "@/helpers/ignoreClick"

export function Note() {
   const [isEdit, setIsEdit] = useState(false)

   const data = {
      title: "How to cook something",
      project: "Project",
      text: `React hook form - це бібліотека на реакт, що дозволяє легко керувати та створювати форми що відповідають принципам масштабован
      React hook form - це бібліотека на реакт, що дозволяє легко керувати та створювати форми що відповідають принципам масштабован
      React hook form - це бібліотека на реакт, що дозволяє легко керувати та створювати форми що відповідають принципам масштабован`,
   }

   const toggleModal = useModalsStore(store => store.toggleModal)
   const setNote = useNoteStore(store => store.setNote)

   const onClick = () => {
      toggleModal("isNoteOpen")
      setNote(data)
   }

   return isEdit ? (
      <NoteForm className={styles.form} isOpen={isEdit} setIsOpen={setIsEdit} defaultData={data} />
   ) : (
      <li className={`${styles.task} ${formStyles.note} br-alpha`} onClick={onClick}>
         <div className={styles.content}>
            <h4 className={styles.name}>{data.title ?? "without title"}</h4>
            <p className={styles.description}>{data.text ?? "witout text"}</p>
            <Footer onClick={ignoreClick}>
               <ProjectDropdown />
               <Menu>
                  <Menu.Edit onClick={() => setIsEdit(true)} />
                  <Menu.Remove />
               </Menu>
            </Footer>
         </div>
      </li>
   )
}

function Add() {
   const [isOpen, setIsOpen] = useState(false)
   const [isVisible, setIsVisible] = useState(false)

   const t = useTranslation("ua")

   useEffect(() => {
      if (isOpen) setIsVisible(true)
   }, [isOpen])

   return (
      <footer className={taskStyles.add__wrapper}>
         {isVisible ? (
            <NoteForm
               className={isOpen ? "fade-in" : "fade-out"}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               setIsVisible={setIsVisible}
            />
         ) : (
            <div className={`${taskStyles.add} ${isOpen ? "fade-out" : "fade-in"}`} onClick={() => setIsOpen(true)}>
               <PlusCircleIcon className={taskStyles.icon} />
               <p>{t("addNewNote")}</p>
            </div>
         )}
      </footer>
   )
}

export function NotesList() {
   return (
      <div className={`${formStyles.list} ${styles.list}`}>
         <Note />
         <Note />
         <Note />
         <Add />
      </div>
   )
}
