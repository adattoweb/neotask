import { createContext, useState } from "react"
import { Task } from "./Task"
import { ITask } from "@/types/task"
import { FormProvider, useForm } from "react-hook-form"

interface TaskProviderProps {
   task: ITask
}

export const FormContext = createContext<IFormContext | null>(null)

export interface IFormContext {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function TaskProvider({ task }: TaskProviderProps) {
   const [isEdit, setIsEdit] = useState(false)
   const defaultData = {
      name: task.name,
      description: task.description ?? "",
      project: task.project ?? "test",
      priority: String(task.priority),
      scheduledFor: {
         date: new Date(),
         hours: 12,
         minutes: 0,
      },
   }

   if (task.scheduledFor !== null) {
      const date = new Date(task.scheduledFor)
      defaultData.scheduledFor = {
         date: date,
         hours: date.getHours(),
         minutes: date.getMinutes(),
      }
   }

   const setIsOpen = setIsEdit
   const value = { setIsOpen }

   const methods = useForm<FormData>({
      defaultValues: defaultData,
   })

   return (
      <FormProvider {...methods}>
         <FormContext.Provider value={value}>
            <Task isEdit={isEdit} setIsEdit={setIsEdit} />
         </FormContext.Provider>
      </FormProvider>
   )
}
