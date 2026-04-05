import styles from "./Dropdown.module.css"
import { WithClassName } from "@/types/types"
import { PropsWithChildren } from "react"
import { DropdownContext } from "./Dropdown"
import { useCheckContext } from "@/hooks/useCheckContext"

type ButtonProps = {
   needToRotating?: boolean
} & PropsWithChildren &
   WithClassName

export function Button({ children, className, needToRotating = false }: ButtonProps) {
   const { isOpen, setIsOpen } = useCheckContext("Dropdown Context", DropdownContext)
   const onClick = () => {
      setIsOpen((prev) => !prev)
   }
   return (
      <div
         className={`${styles.button} ${className} ${isOpen && needToRotating ? styles.rotated : ""}`}
         onClick={onClick}
      >
         {children}
      </div>
   )
}
