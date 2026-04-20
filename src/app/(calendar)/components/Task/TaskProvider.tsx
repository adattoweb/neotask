import { useState } from "react"
import { Task } from "./Task"
import { ITask } from "@/types/task"
import { FormProvider, useForm } from "react-hook-form"
import { FormContext } from "@/context/taskFormContext"

interface TaskProviderProps {
   task: ITask
}

export function TaskProvider({ task }: TaskProviderProps) {
   const [isEdit, setIsEdit] = useState(false)
   console.log(task)
   const defaultData: ITask = {
      name: task.name,
      description: task.description,
      project: task.project,
      priority: task.priority,
      scheduledFor: task.scheduledFor,
      completed: task.completed,
      completedAt: task.completedAt,
      createdAt: task.createdAt,
   }

   const value = { setIsEdit }

   const methods = useForm<ITask>({
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
