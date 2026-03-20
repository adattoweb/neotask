"use client"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../settings/components/Constructor/Constructor"
import styles from "./page.module.css"

export default function Login() {
   const methods = useForm<FormData>();
   const { handleSubmit } = methods

   const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log(data)
   }

   return (
      <FormProvider {...methods}>
         <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
            <Input name="username" />
         </form>
      </FormProvider>
   )
}