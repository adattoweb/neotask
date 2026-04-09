"use client"

import { createContext, useRef } from "react"
import { PropsWithChildren } from "react"
import { Item } from "./Item"

interface IContext {
   select?: (val: string) => void
   value?: string
   onItemClick: () => void
}

export const ListContext = createContext<IContext | null>(null)

interface ListProps extends PropsWithChildren {
   className: string
   value?: string
   onChange?: (value: string) => void
   onClick?: () => void
}

function List({ className, children, value, onChange, onClick }: ListProps) {
   const listRef = useRef(null)

   const select = (val: string) => {
      onChange?.(val)
   }

   const onItemClick = () => {
      onClick?.()
   }

   const ctxValue = {
      select,
      value,
      onItemClick,
   }

   return (
      <ListContext.Provider value={ctxValue}>
         <div className={className} ref={listRef}>
            {children}
         </div>
      </ListContext.Provider>
   )
}

List.Item = Item

export default List
