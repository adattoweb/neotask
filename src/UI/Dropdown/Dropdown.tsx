"use client"

import styles from "./Dropdown.module.css"
import { createContext, useEffect, useLayoutEffect, useRef } from "react"
import { PropsWithChildren, useState } from "react"
import { WithClassName } from "@/types/types"
import { useCheckContext } from "@/hooks/useCheckContext"
import { createPortal } from "react-dom"
import { Item } from "./Item"
import { Button } from "./Button"

interface IContext {
   isOpen: boolean
   select?: (val: string) => void
   value?: string
   onItemClick: () => void
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   dropdownRef: React.RefObject<HTMLDivElement | null>
}

export const DropdownContext = createContext<IContext | null>(null)

interface DropdownProps extends PropsWithChildren<WithClassName> {
   value?: string
   onChange?: (value: string) => void
   onClick?: () => void
}

function Dropdown({ className, children, value, onChange, onClick }: DropdownProps) {
   const [isOpen, setIsOpen] = useState(false)
   const dropdownRef = useRef(null)

   const select = (val: string) => {
      onChange?.(val)
   }

   const onItemClick = () => {
      setIsOpen((prev) => !prev)
      onClick?.()
   }

   const ctxValue = {
      isOpen,
      select,
      value,
      onItemClick,
      setIsOpen,
      dropdownRef,
   }

   return (
      <DropdownContext.Provider value={ctxValue}>
         <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
            {children}
         </div>
      </DropdownContext.Provider>
   )
}

interface ContentProps extends PropsWithChildren<WithClassName> {
   addTop?: number
}

function Content({ children, className, addTop = 0 }: ContentProps) {
   const { isOpen, dropdownRef } = useCheckContext("Dropdown Context", DropdownContext)
   const [mounted, setMounted] = useState(false)
   const [stylesPos, setStylesPos] = useState<React.CSSProperties>({})
   const currentRef = useRef<HTMLDivElement>(null)

   useEffect(() => setMounted(true), [])

   useLayoutEffect(() => {
      if (!isOpen || !dropdownRef.current || !currentRef.current) return

      const rect = dropdownRef.current.getBoundingClientRect()
      const dropdownRect = currentRef.current.getBoundingClientRect()

      let left = rect.left
      let top = rect.bottom

      if (left + dropdownRect.width > window.innerWidth) left = window.innerWidth - dropdownRect.width
      if (left < 0) left = 0
      if (top + dropdownRect.height > window.innerHeight) top = rect.top - dropdownRect.height
      if (top < 0) top = 0

      top += addTop

      setStylesPos({ left, top })
   }, [isOpen])

   const handleAnimationEnd = () => {
      if (!isOpen) setStylesPos({})
   }

   if (!mounted) return null

   return createPortal(
      <div
         ref={currentRef}
         style={stylesPos}
         className={`${styles.content} ${className} bg-alpha br-alpha ${isOpen ? "top-in" : "bottom-out"}`}
         onAnimationEnd={handleAnimationEnd}
      >
         {children}
      </div>,
      document.body,
   )
}

Dropdown.Item = Item
Dropdown.Button = Button
Dropdown.Content = Content

export default Dropdown
