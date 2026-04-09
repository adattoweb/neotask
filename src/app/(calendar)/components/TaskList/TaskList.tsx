import styles from "./TaskList.module.css"
import { WithClassName } from "@/types/types"

import { Task } from "./Task"
import { Add } from "./Add"

export function TaskList({ className = "" }: WithClassName) {
   return (
      <ul className={`${styles.list} ${className}`}>
         <Task />
         <Task />
         <Task />
         <Task />
         <Add />
      </ul>
   )
}
