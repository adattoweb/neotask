"use client"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import styles from "./page.module.css"
import clsx from "clsx";
import { Block, Button, Header, Input } from "@/app/settings/components/Constructor/Constructor";

export default function Login() {
   const methods = useForm<FormData>();
   const { handleSubmit } = methods

   const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log(data)
   }

   return (
      <FormProvider {...methods}>
         <div className={clsx(styles.page, "br-alpha bg-alpha blur")}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <h1 className={styles.title}>Login</h1>
               <div className={styles.content}>
                  <Block>
                     <Header>Username</Header>
                     <Input className={styles.input} name="username" />
                  </Block>
                  <Block>
                     <Header>Password</Header>
                     <Input className={styles.input} name="password" type="password"/>
                     <a href="#" className={styles.reset}>Забули пароль?</a>
                  </Block>
                  <Button className={styles.button}>
                     Увійти
                  </Button>
               </div>
            </form>
         </div>
      </FormProvider>
   )
}