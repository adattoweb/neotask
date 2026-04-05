"use client"

import styles from "./page.module.css"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Sidebar } from "./Sidebar/Sidebar"
import { useTabStore } from "./stores/useTabStore"
import { tabs } from "./tabs"

export default function Settings() {
   const tab = useTabStore((set) => set.tab)

   const methods = useForm<FormData>()
   const { handleSubmit } = methods

   const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log(data)
   }

   const Content = tabs[tab].content
   return (
      <div className={`${styles.settings} bg-alpha br-alpha blur`}>
         <Sidebar />
         <FormProvider {...methods}>
            <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
               <h2 className={styles.header}>{tabs[tab].name.ua}</h2>
               <Content />
            </form>
         </FormProvider>
      </div>
   )
}
