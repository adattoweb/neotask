import styles from "./TasksList.module.css"
import { WithClassName } from "@/types/types"

import { Add } from "./Add"
import { ITask } from "@/types/task"
import { Task } from "../Task/Task"

interface ListProps extends WithClassName {
   tasks: ITask[]
}

export function TasksList({ className = "", tasks }: ListProps) {
   return (
      <ul className={`${styles.list} ${className}`}>
         {tasks.map(
            t => (
               <Task
                  key={t.createdAt}
                  name={t.name}
                  description={t.description}
                  completed={t.completed}
                  project={t.project}
                  priority={t.priority}
                  scheduledFor={t.scheduledFor}
               />
            ), // CREATED AT МОЖЕ І НЕ БУТИ УНІКАЛЬНИЙ KEY
         )}
         <Add />
      </ul>
   )
}
