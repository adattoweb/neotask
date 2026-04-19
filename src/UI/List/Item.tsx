import { PropsWithChildren } from "react"
import { useCheckContext } from "@/hooks/useCheckContext"
import { ListContext } from "./List"

interface ItemProps extends PropsWithChildren {
   className: string
   value: string
}

export function Item({ value, children, className }: ItemProps) {
   const { select, onItemClick } = useCheckContext("Dropdown Context", ListContext)

   const onClick = () => {
      select?.(value)
      onItemClick()
   }

   return (
      <div className={className} onClick={onClick}>
         {children}
      </div>
   )
}
