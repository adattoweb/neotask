import { Area, AreaChart, ResponsiveContainer, Tooltip, TooltipContentProps, XAxis, YAxis } from "recharts"
import styles from "./AnalyticsModal.module.css"
import { useGetWidth } from "@/hooks/useGetWidth"

const testData = [
   {
      date: "Пн",
      tasks: 6,
      lastTasks: 3,
   },
   {
      date: "Вт",
      tasks: 9,
      lastTasks: 6,
   },
   {
      date: "Ср",
      tasks: 3,
      lastTasks: 4,
   },
   {
      date: "Чт",
      tasks: 8,
      lastTasks: 4,
   },
   {
      date: "Пт",
      tasks: 5,
      lastTasks: 7,
   },
   {
      date: "Сб",
      tasks: 10,
      lastTasks: 8,
   },
   {
      date: "Вс",
      tasks: 5,
      lastTasks: 9,
   },
]

function CustomToolTip({ active, payload, label }: TooltipContentProps) {
   if (active && payload && payload.length) {
      return (
         <div className={`${styles.tooltip} bg-alpha br-alpha`}>
            <p className={styles.tooltip__label}>{label}</p>
            <p className={styles.tooltip__item}>
               This week: <span>{payload[0].value}</span>
            </p>
            <p className={styles.tooltip__item}>
               Last week: <span>{payload[1].value}</span>
            </p>
         </div>
      )
   }
}

export default function AreaChartComponent() {
   const [width] = useGetWidth()
   return (
      <ResponsiveContainer width="100%" height="100%">
         <AreaChart data={testData} margin={{ right: width <= 480 ? 20 : 30 }}>
            <YAxis width={30} />
            <XAxis dataKey="date" />
            <Tooltip content={CustomToolTip} />
            <Area type="monotone" dataKey="tasks" stroke="#64ade1" fill="#4891c6" stackId="0" />
            <Area type="monotone" dataKey="lastTasks" stroke="#e1c464" fill="#c69a48" stackId="1" />
         </AreaChart>
      </ResponsiveContainer>
   )
}
