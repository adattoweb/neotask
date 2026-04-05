import styles from "./Checkbox.module.css"
import { forwardRef, PropsWithChildren, InputHTMLAttributes } from "react"
import { WithClassName } from "@/types/types"
import clsx from "clsx"
import { CheckMarkIcon } from "../Icons/Icons"

interface CheckboxProps extends PropsWithChildren, WithClassName, InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, children, ...props }, ref) => {
   return (
      <label className={clsx(styles.checkbox, className)}>
         <input ref={ref} type="checkbox" className={styles.input} {...props} />
         <span className={clsx(styles.box, "br-alpha")}>
            <CheckMarkIcon className={styles.icon} stroke="#fff" />
         </span>
         {children && <span className={styles.text}>{children}</span>}
      </label>
   )
})

Checkbox.displayName = "Checkbox"
