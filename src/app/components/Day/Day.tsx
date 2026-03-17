import { ChevronIcon } from "@/UI/Icons/Icons"
import { TaskList } from "../TaskList/TaskList"
import styles from "./Day.module.scss"
import { useTranslation } from "@/hooks/useTranslation"
import clsx from "clsx"
import { useGetWidth } from "@/hooks/useGetWidth"

function MobileDate() {
   return (
      <div className={styles.date__wrapper}>
         <ChevronIcon className={styles.chevron__left} />
         <div className={clsx(styles.date__button, "bg-alpha", "br-alpha")}>2/02</div>
         <ChevronIcon className={styles.chevron__right} />
      </div>
   )
}

export function Day() {
   const t = useTranslation("ua")

   const [width] = useGetWidth()

   return (
      <div className={`${styles.day} br-alpha`}>
         <header className={styles.header}>
            {width !== null && width <= 768 && <MobileDate/>}
            <h3 className={styles.date}>2 {t("feb")}, {t("monday")}</h3>
            <p className={styles.counter}>{t("tasksCompleted", { completed: 2, total: 9 })}</p>
         </header>
         <TaskList />
      </div>
   )
}