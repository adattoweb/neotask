"use client"

import styles from "./DayForm.module.css"
import { CloseIcon, SendIcon } from "@/UI/Icons/Icons"
import { FieldError, FormProvider, SubmitHandler, useForm, useFormContext } from "react-hook-form"
import { WithClassName } from "@/types/types"
import { createContext, PropsWithChildren, useEffect } from "react"
import { useCheckContext } from "@/hooks/useCheckContext"

interface FormProps extends PropsWithChildren<WithClassName> {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
   defaultData?: Record<string, string>
}

interface InputProps extends WithClassName {
   placeholder?: string
   name: string
   required?: false | string
   maxLength?: number
}

interface IFormContext {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FormContext = createContext<IFormContext | null>(null)

function Input({ className = "", placeholder, name, required = false, maxLength = Infinity }: InputProps) {
   const {
      formState: { errors },
      register,
   } = useFormContext()
   return (
      <>
         <input
            className={className}
            placeholder={placeholder}
            type="text"
            {...register(name, { required: required, maxLength: maxLength })}
         />
         {required && errors[name] && <p className="error">{(errors[name] as FieldError).message}</p>}
      </>
   )
}

function Textarea({ className = "", placeholder, name, required = false, maxLength = Infinity }: InputProps) {
   const {
      formState: { errors },
      register,
   } = useFormContext()
   return (
      <>
         <textarea
            className={`${styles.textarea} ${className}`}
            placeholder={placeholder}
            {...register(name, { required: required, maxLength: maxLength })}
         />
         {required && errors[name] && <p className="error">{(errors[name] as FieldError).message}</p>}
      </>
   )
}

function Parameters({ className, children }: PropsWithChildren<WithClassName>) {
   return <div className={`${styles.parameters} ${className}`}>{children}</div>
}

function Footer({ className, children }: PropsWithChildren<WithClassName>) {
   const { setIsOpen } = useCheckContext<IFormContext>("Form Context", FormContext)
   return (
      <footer className={`${styles.footer} ${className}`}>
         {children}
         <div className={styles.buttons}>
            <div className={`${styles.close} ${styles.button}`}>
               <CloseIcon onClick={() => setIsOpen(false)} />
            </div>
            <button className={`${styles.send} ${styles.button}`}>
               <SendIcon />
            </button>
         </div>
      </footer>
   )
}

function TaskForm({ className = "", isOpen, setIsOpen, setIsVisible, defaultData, children }: FormProps) {
   const methods = useForm<FormData>()
   const { handleSubmit, reset } = methods
   const onSubmit: SubmitHandler<FormData> = data => {
      console.log(data)
   }

   function toggleVisible() {
      if (!isOpen) setIsVisible?.(false)
   }

   useEffect(() => {
      if (defaultData !== undefined) {
         reset(defaultData)
      }
   }, [])

   const value = { setIsOpen }

   return (
      <FormProvider {...methods}>
         <FormContext.Provider value={value}>
            <form
               className={`${styles.form} bg-alpha br-alpha ${className}`}
               onSubmit={handleSubmit(onSubmit)}
               onAnimationEnd={toggleVisible}
            >
               {children}
            </form>
         </FormContext.Provider>
      </FormProvider>
   )
}

TaskForm.Input = Input
TaskForm.Parameters = Parameters
TaskForm.Footer = Footer
TaskForm.Textarea = Textarea

export default TaskForm
