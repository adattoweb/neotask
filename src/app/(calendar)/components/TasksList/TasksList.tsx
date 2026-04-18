import styles from "./TasksList.module.css"
import { WithClassName } from "@/types/types"

import { Add } from "./Add"
import { ITask } from "@/types/task"
import { TaskProvider } from "../Task/TaskProvider"

interface ListProps extends WithClassName {
   tasks: ITask[]
}

export function TasksList({ className = "", tasks }: ListProps) {
   return (
      <ul className={`${styles.list} ${className}`}>
         {tasks.map(
            (t, index) => (
               <TaskProvider key={index} task={t} />
            ), // INDEX МОЖЕ І НЕ БУТИ УНІКАЛЬНИЙ KEY
         )}
         <Add />
      </ul>
   )
}
