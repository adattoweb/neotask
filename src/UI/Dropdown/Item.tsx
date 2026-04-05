import styles from "./Dropdown.module.css"
import { WithClassName } from "@/types/types"
import { PropsWithChildren } from "react"
import { useCheckContext } from "@/hooks/useCheckContext"
import { DropdownContext } from "./Dropdown"

interface ItemProps extends PropsWithChildren<WithClassName> {
   value: string
}

export function Item({ value, children, className }: ItemProps) {
   const { select, onItemClick } = useCheckContext("Dropdown Context", DropdownContext)

   const onClick = () => {
      select?.(value)
      onItemClick()
   }

   return (
      <div className={`${styles.item} ${className}`} onClick={onClick}>
         {children}
      </div>
   )
}
