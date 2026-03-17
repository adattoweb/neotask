import { useModalsStore } from "@/stores/useModalsStore";
import { CloseMark } from "../Modal/Constructor";
import { Modal } from "../Modal/Modal";
import styles from "./NoteModal.module.scss"
import { useNoteStore } from "@/stores/useNoteStore";

export function NoteModal(){
   const modals = useModalsStore(store => store.modals)
   const toggleModal = useModalsStore(store => store.toggleModal)
   const note = useNoteStore(store => store.note)
   return (
      <Modal isOpen={modals.isNoteOpen} className={styles.modal}>
         <CloseMark onClick={() => toggleModal("isNoteOpen")}/>
         <div className={styles.header}><h2 className={styles.title}>{note.title ?? "title"}</h2><p className={styles.project}>{note.project ?? "project"}</p></div>
         <p className={styles.text}>{note.text ?? "text"}</p>
      </Modal>
   )
}