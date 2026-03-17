"use client"

import { createPortal } from "react-dom";
import { useEffect, useState, type PropsWithChildren } from "react";

import styles from "./Modal.module.scss"

interface Props {
    className?: string
    isOpen: boolean
    id?: string
}

export function Modal({ className = styles.modal, isOpen, children, id = "root" }: PropsWithChildren<Props>) {
    const [isVisible, setIsVisible] = useState(isOpen)

    // console.log(`isOpen: ${isOpen}, isVisible: ${isVisible}`)

    useEffect(() => {
        if(isOpen) setIsVisible(true)
    }, [isOpen])

    if (!isVisible) return null

    const handleAnimationEnd = () => {
        if (!isOpen) setIsVisible(false)
    }

    return createPortal(
        <div className={`${className} bg-alpha br-alpha ${styles.modal} ${isOpen ? "fade-in" : "fade-out"}`} onAnimationEnd={handleAnimationEnd}>
            {children}
        </div>, document.getElementById(id)!)
}