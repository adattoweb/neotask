import styles from "./Task.module.css"
import { PropsWithChildren } from "react"

interface FooterProps extends PropsWithChildren {
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function Footer({ onClick, children }: FooterProps) {
   return (
      <footer className={styles.footer} onClick={onClick}>
         {children}
      </footer>
   )
}
