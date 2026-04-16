import styles from "@/UI/DayForm/DayForm.module.css"

import DayForm from "@/UI/DayForm/DayForm"
import { ClockDropdown } from "@/UI/DayForm/dropdowns/ClockDropdown"
import { DateDropdown } from "@/UI/DayForm/dropdowns/DateDropdown"
import { PriorityDropdown } from "@/UI/DayForm/dropdowns/PriorityDropdown"
import { ProjectDropdown } from "@/UI/DayForm/dropdowns/ProjectDropdown"
import { useTranslation } from "@/hooks/useTranslation"
import { WithClassName } from "@/types/types"
import { TaskProps } from "@/types/task"

interface TaskForm extends WithClassName, TaskProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
   defaultData?: Record<string, string>
}

export function TaskForm({
   className,
   isOpen,
   setIsOpen,
   setIsVisible,
   name,
   description,
   completed,
   project,
   priority,
   scheduledFor,
}: TaskForm) {
   const defaultData = {
      name: name,
      description: description ?? "",
      project: project ?? "test",
      priority: String(priority),
      scheduledFor: {
         date: new Date(),
         hours: 12,
         minutes: 0,
      },
   }

   if (scheduledFor !== null) {
      const date = new Date(scheduledFor)
      defaultData.scheduledFor = {
         date: date,
         hours: date.getHours(),
         minutes: date.getMinutes(),
      }
   }
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
