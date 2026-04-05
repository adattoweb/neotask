import styles from "./ImageModal.module.css"
import formStyles from "@/components/AddForm/AddForm.module.css"
import { forwardRef } from "react"
import { Modals, useModalsStore } from "@/stores/useModalsStore"
import { Modal } from "../Modal/Modal"
import { CloseIcon, DownloadIcon, SendIcon } from "@/UI/Icons/Icons"
import clsx from "clsx"
import { useTranslation } from "@/hooks/useTranslation"
import Image from "next/image"

interface ImageModalProps extends React.InputHTMLAttributes<HTMLInputElement> {
   isOpen: boolean
   modalKey: keyof Modals
}

export const ImageModal = forwardRef<HTMLInputElement, ImageModalProps>(({ isOpen, modalKey, ...props }, ref) => {
   const t = useTranslation("en")
   const toggleModal = useModalsStore((store) => store.toggleModal)
   return (
      <Modal className={styles.modal} isOpen={isOpen} id="root">
         <div className={styles.content}>
            <input id="file" type="file" hidden ref={ref} {...props} />
            <label htmlFor="file" className={styles.button}>
               <DownloadIcon className={clsx(styles.icon, "br-alpha", "bg-alpha")} />
               <p className={styles.text}>{t("uploadImageFromPc")}</p>
            </label>
         </div>
         <div className={clsx(formStyles.footer, styles.footer)}>
            <Image
               height={50}
               width={50}
               src="/images/themes/theme11.jpg"
               alt="image"
               draggable={false}
               className={styles.image}
            />
            <div className={formStyles.buttons}>
               <div className={formStyles.button} onClick={() => toggleModal(modalKey)}>
                  <CloseIcon />
               </div>
               <button type="submit" className={clsx(formStyles.send, formStyles.button)}>
                  <SendIcon />
               </button>
            </div>
         </div>
      </Modal>
   )
})
ImageModal.displayName = "ThemesModal"
