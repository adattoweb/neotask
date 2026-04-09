import { FormProvider, useForm } from "react-hook-form"
import styles from "./Task.module.css"
import { PropsWithChildren, useEffect } from "react"

interface FormData {
   priority: string
   project: string
}

interface FooterProps extends PropsWithChildren {
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function Footer({ onClick, children }: FooterProps) {
   const methods = useForm<FormData>()
   const priorityWatch = methods.watch("priority")

   useEffect(() => {
      console.log("priority changed:", priorityWatch)
   }, [priorityWatch])
   return (
      <FormProvider {...methods}>
         <footer className={styles.footer} onClick={onClick}>
            {children}
         </footer>
      </FormProvider>
   )
}
