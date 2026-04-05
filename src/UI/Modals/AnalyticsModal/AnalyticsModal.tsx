"use client"

import styles from "./AnalyticsModal.module.css"
import { useModalsStore } from "@/stores/useModalsStore"

import { Modal } from "../Modal/Modal"
import Tabs from "@/UI/Tabs/Tabs"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { ReactNode } from "react"
import { TrophyIcon } from "@/UI/Icons/Icons"
import dynamic from "next/dynamic"
import { CloseMark } from "../Modal/Constructor"
import { useTranslation } from "@/hooks/useTranslation"
import { useGetWidth } from "@/hooks/useGetWidth"

const AreaChartComponent = dynamic(() => import("./AreaChartComponent"), {
   ssr: false,
})

type frequencyType = "daily" | "weekly" | "monthly"

interface FormData {
   frequency: frequencyType
}

interface CircularProps {
   progress: number
   size?: number
   stroke?: number
   children?: ReactNode
}

function CircularProgress({ progress, size = 80, stroke = 8, children }: CircularProps) {
   const r = (size - stroke) / 2,
      c = 2 * Math.PI * r,
      o = c - (progress / 100) * c

   return (
      <div className={styles.progress} style={{ width: size, height: size }}>
         <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
            <circle cx={size / 2} cy={size / 2} r={r} stroke="#e5e5e5" strokeWidth={stroke} fill="none" />
            <circle
               cx={size / 2}
               cy={size / 2}
               r={r}
               stroke="#000"
               strokeWidth={stroke}
               fill="none"
               strokeDasharray={c}
               strokeDashoffset={o}
               strokeLinecap="round"
               style={{ transition: "stroke-dashoffset .35s" }}
            />
         </svg>
         <div
            style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
         >
            {children}
         </div>
      </div>
   )
}

export function AnalyticsModal() {
   const modals = useModalsStore((state) => state.modals)
   const toggleModal = useModalsStore((state) => state.toggleModal)

   const methods = useForm<FormData>()

   const t = useTranslation("ua")
   const [width] = useGetWidth()

   return (
      <FormProvider {...methods}>
         <Modal className={styles.analytics} isOpen={modals.isAnalyticsOpen} id="root">
            <CloseMark onClick={() => toggleModal("isAnalyticsOpen")} />
            <h2 className={styles.header}>{t("productivity")}</h2>
            <Controller
               name="frequency"
               control={methods.control}
               defaultValue="daily"
               render={({ field }) => (
                  <Tabs selectedValue={field.value} onChange={field.onChange}>
                     <Tabs.Item value="daily">{t("daily")}</Tabs.Item>
                     <Tabs.Item value="weekly">{t("weekly")}</Tabs.Item>
                     <Tabs.Item value="monthly">{t("monthly")}</Tabs.Item>
                  </Tabs>
               )}
            />
            <CircularProgress
               progress={50}
               size={width <= 480 ? 100 : width <= 768 ? 120 : 150}
               stroke={width <= 480 ? 7 : 9}
            >
               <TrophyIcon className={styles.trophy__icon} />
            </CircularProgress>
            <div className={styles.content}>
               <p className={styles.text__header}>{t("goalTasksCompleted", { completed: 2, total: 9 })}</p>
               <p className={styles.description}>{t("yourPace")}</p>
               <p className={styles.text__underline}>{t("editGoalBtn")}</p>
            </div>
            <div className={styles.content}>
               <p className={styles.text__header}>{t("noStreakMessage")}</p>
               <p className={styles.description}>{t("bestStreak", { best: 7 })}</p>
               <p className={styles.description}>{t("streakPeriod", { start: "12/02/2025", end: "19/02/2025" })}</p>
            </div>
            <div className={styles.area}>
               <AreaChartComponent />
            </div>
         </Modal>
      </FormProvider>
   )
}
