"use client"

import { createPortal } from "react-dom";
import { useEffect, useState, type PropsWithChildren } from "react";

import styles from "./Modal.module.scss"

interface Props {
    className?: string
    isOpen: boolean
    id?: string
}

export function Modal({ className, isOpen, children, id = "root" }: PropsWithChildren<Props>) {
    const [isVisible, setIsVisible] = useState(isOpen)

    useEffect(() => {
        if(isOpen) setIsVisible(true)
    }, [isOpen])

    const handleAnimationEnd = () => {
        if (!isOpen) setIsVisible(false)
    }

    if (!isVisible) return null

    return createPortal(
        <div className={`${className} bg-alpha br-alpha ${styles.modal} ${isOpen ? "fade-in" : "fade-out"}`} onAnimationEnd={handleAnimationEnd}>
            {children}
        </div>, document.getElementById(id)!)
}