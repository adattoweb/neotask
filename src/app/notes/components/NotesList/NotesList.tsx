import styles from "./NotesList.module.css"
import taskStyles from "@/app/(calendar)/components/Task/Task.module.css"

import { useState, useEffect } from "react"
import { NoteForm } from "../NoteForm/NoteForm"
import { Footer } from "@/app/(calendar)/components/Task/Footer"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"
import { Menu, Edit, Remove } from "@/UI/Menu/Menu"
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
      <NoteForm className={taskStyles.form} isOpen={isEdit} setIsOpen={setIsEdit} defaultData={data} />
   ) : (
      <li className={`${taskStyles.task} ${styles.note} br-alpha`} onClick={onClick}>
         <div className={taskStyles.content}>
            <h4 className={taskStyles.name}>{data.title ?? "without title"}</h4>
            <p className={taskStyles.description}>{data.text ?? "witout text"}</p>
            <Footer onClick={ignoreClick}>
               <ProjectDropdown />
               <Menu>
                  <Edit onClick={() => setIsEdit(true)} />
                  <Remove />
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
      <footer className={styles.add__wrapper}>
         {isVisible ? (
            <NoteForm
               className={isOpen ? "fade-in" : "fade-out"}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               setIsVisible={setIsVisible}
            />
         ) : (
            <div className={`${styles.add} ${isOpen ? "fade-out" : "fade-in"}`} onClick={() => setIsOpen(true)}>
               <PlusCircleIcon className={styles.icon} />
               <p>{t("addNewNote")}</p>
            </div>
         )}
      </footer>
   )
}

export function NotesList() {
   return (
      <div className={`${styles.list} ${styles.list}`}>
         <Note />
         <Note />
         <Note />
         <Add />
      </div>
   )
}
