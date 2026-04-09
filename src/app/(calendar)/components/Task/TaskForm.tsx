import styles from "@/UI/DayForm/DayForm.module.css"

import DayForm from "@/UI/DayForm/DayForm"
import { ClockDropdown } from "@/UI/DayForm/dropdowns/ClockDropdown"
import { DateDropdown } from "@/UI/DayForm/dropdowns/DateDropdown"
import { PriorityDropdown } from "@/UI/DayForm/dropdowns/PriorityDropdown"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"
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
      <DayForm
         className={className}
         isOpen={isOpen}
         setIsOpen={setIsOpen}
         setIsVisible={setIsVisible}
         defaultData={defaultData}
      >
         <DayForm.Input
            className={styles.name}
            placeholder={t("learn5PhrasesDaily")}
            name={"name"}
            required={t("requiredField")}
            maxLength={96}
         />
         <DayForm.Input className={styles.description} placeholder={t("description")} name={"description"} />
         <DayForm.Parameters>
            <DateDropdown />
            <PriorityDropdown />
            <ClockDropdown />
         </DayForm.Parameters>
         <DayForm.Footer>
            <ProjectDropdown />
         </DayForm.Footer>
      </DayForm>
   )
}
