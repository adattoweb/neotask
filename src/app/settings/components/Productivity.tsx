import clsx from "clsx"
import styles from "../page.module.css"
import AreaChartComponent from "@/UI/Modals/AnalyticsModal/AreaChartComponent"

export function Productivity() {
   return (
      <div className={clsx(styles.productivity, styles.content)}>
         <div className={styles.area}>
            <AreaChartComponent />
         </div>
      </div>
   )
}
