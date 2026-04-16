import styles from "./Day.module.css"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { TasksList } from "../TasksList/TasksList"
import { useTranslation } from "@/hooks/useTranslation"
import clsx from "clsx"
import { useGetWidth } from "@/hooks/useGetWidth"
import { IDay } from "@/types/day"
import { getShortDate } from "@/helpers/getShortDate"

function MobileDate() {
   return (
      <div className={styles.date__wrapper}>
         <ChevronIcon className={styles.chevron__left} />
         <div className={clsx(styles.date__button, "bg-alpha", "br-alpha")}>2/02</div>
         <ChevronIcon className={styles.chevron__right} />
      </div>
   )
}

export function Day({ timestamp, tasks }: IDay) {
   const t = useTranslation("ua")

   const [width] = useGetWidth()

   console.log(timestamp)

   return (
      <div className={`${styles.day} br-alpha`}>
         <header className={styles.header}>
            {width !== null && width <= 768 && <MobileDate />}
            <h3 className={styles.date}>{getShortDate(timestamp)}</h3>
            <p className={styles.counter}>{t("tasksCompleted", { completed: 2, total: 9 })}</p>
         </header>
         <TasksList tasks={tasks} />
      </div>
   )
}
