import AddForm from "@/components/AddForm/AddForm"

import styles from "@/components/AddForm/AddForm.module.css"
import { ClockDropdown } from "@/components/AddForm/components/ClockDropdown"
import { DateDropdown } from "@/components/AddForm/components/DateDropdown"
import { PriorityDropdown } from "@/components/AddForm/components/PriorityDropdown"
import { ProjectDropdown } from "@/components/AddForm/components/ProjectDropdown"
import { useTranslation } from "@/hooks/useTranslation"
import { WithClassName } from "@/types/types"

interface TaskForm extends WithClassName {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
   defaultData?: Record<string, string>
}

export function TaskForm({ className, isOpen, setIsOpen, setIsVisible, defaultData }: TaskForm) {
   const t = useTranslation("ua")
   return (
      <AddForm
         className={className}
         isOpen={isOpen}
         setIsOpen={setIsOpen}
         setIsVisible={setIsVisible}
         defaultData={defaultData}
      >
         <AddForm.Input
            className={styles.name}
            placeholder={t("learn5PhrasesDaily")}
            name={"name"}
            required={t("requiredField")}
            maxLength={96}
         />
         <AddForm.Input className={styles.description} placeholder={t("description")} name={"description"} />
         <AddForm.Parameters>
            <DateDropdown />
            <PriorityDropdown />
            <ClockDropdown />
         </AddForm.Parameters>
         <AddForm.Footer>
            <ProjectDropdown />
         </AddForm.Footer>
      </AddForm>
   )
}
