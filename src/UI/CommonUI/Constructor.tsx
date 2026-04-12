import { PropsWithChildren } from "react"
import styles from "./Constructor.module.css"
import { WithClassName } from "@/types/types"
import clsx from "clsx"

interface ButtonProps extends PropsWithChildren<WithClassName> {
   withAccentColor?: boolean
   style?: React.CSSProperties
}

export function Button({ className, children, withAccentColor = false, style }: ButtonProps) {
   return (
      <div
         className={clsx(
            className,
            styles.button,
            withAccentColor ? "bg-accent bg-accent-hover" : "bg-alpha bg-alpha-hover",
         )}
         style={style}
      >
         {children}
      </div>
   )
}
