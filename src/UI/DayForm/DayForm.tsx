"use client"

import styles from "./DayForm.module.css"
import { CloseIcon, SendIcon } from "@/UI/Icons/Icons"
import { FieldError, SubmitHandler, useFormContext } from "react-hook-form"
import { WithClassName } from "@/types/types"
import { PropsWithChildren } from "react"
import { useCheckContext } from "@/hooks/useCheckContext"
import { FormContext, IFormContext } from "@/app/(calendar)/components/Task/TaskProvider"

interface FormProps extends PropsWithChildren<WithClassName> {
   isOpen: boolean
   setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
   defaultData?: Record<string, any>
}

interface InputProps extends WithClassName {
   placeholder?: string
   name: string
   required?: false | string
   maxLength?: number
}

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

function DayForm({ className = "", isOpen, setIsVisible, children }: FormProps) {
   const { handleSubmit } = useFormContext()
   const onSubmit: SubmitHandler<FormData> = data => {
      console.log(data)
   }

   function toggleVisible() {
      if (!isOpen) setIsVisible?.(false)
   }

   return (
      <form
         className={`${styles.form} bg-alpha br-alpha ${className}`}
         onSubmit={handleSubmit(onSubmit)}
         onAnimationEnd={toggleVisible}
      >
         {children}
      </form>
   )
}

DayForm.Input = Input
DayForm.Parameters = Parameters
DayForm.Footer = Footer
DayForm.Textarea = Textarea

export default DayForm
