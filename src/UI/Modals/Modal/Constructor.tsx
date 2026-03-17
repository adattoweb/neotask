import { CloseIcon } from "@/UI/Icons/Icons"
import styles from "./Modal.module.scss"
import { PropsWithChildren } from "react"

interface WithClassName {
    className?: string
}

interface LinkProps extends WithClassName {
    Icon?: React.ElementType
    href?: string
    target?: string
    onClick?: () => void
}

type ItemProps = Omit<LinkProps, "href" | "target">

interface CloseMarkProps extends WithClassName {
    onClick: () => void
}

export function Item({ className = "", Icon, children, onClick }:PropsWithChildren<ItemProps>){
    return (
        <div className={`${styles.item} ${className}`} onClick={onClick}>
            {Icon && <Icon/>}
            <p>{children}</p>
        </div>
    )
}

export function Link({ className = "", Icon, href, target, children, onClick }:PropsWithChildren<LinkProps>){
    return (
        <a className={`${styles.item} ${className}`} target={target} href={href} onClick={onClick}>
            {Icon && <Icon className={styles.icon}/>}
            <p>{children}</p>
        </a>
    )
}

export function CloseMark({ className, onClick }:CloseMarkProps) {
    return (
        <CloseIcon className={`${styles.closemark} ${className}`} onClick={onClick}/>
    )
}