import DayForm from "@/UI/DayForm/DayForm"

import styles from "@/UI/DayForm/DayForm.module.css"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"
import { WithClassName } from "@/types/types"

import { useTranslation } from "@/hooks/useTranslation"

interface TaskForm extends WithClassName {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
   defaultData?: Record<string, string>
}

export function NoteForm({ className, isOpen, setIsOpen, setIsVisible, defaultData }: TaskForm) {
   const t = useTranslation("ua")

   return (
      <DayForm
         className={className}
         isOpen={isOpen}
         setIsOpen={setIsOpen}
         setIsVisible={setIsVisible}
         defaultData={defaultData}
      >
         <DayForm.Input
            className={styles.name}
            placeholder={t("noteTitlePlaceholder")}
            name={"title"}
            required={t("requiredField")}
            maxLength={96}
         />
         <DayForm.Textarea
            className={styles.description}
            placeholder={t("noteContentPlaceholder")}
            name={"content"}
            required={t("requiredField")}
            maxLength={512}
         />
         <DayForm.Footer>
            <ProjectDropdown />
         </DayForm.Footer>
      </DayForm>
   )
}
