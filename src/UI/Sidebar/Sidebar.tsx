"use client"

import { useEffect, useState } from "react"
import { WindowIcon } from "../Icons/Icons"
import { Navigation } from "./components/Navigation"
import { ProfileSection } from "./components/ProfileSection"
import styles from "./Sidebar.module.scss"
import clsx from "clsx"

export function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.getElementById("root")?.classList.remove("close")
        } else document.getElementById("root")?.classList.add("close")
    }, [isOpen])

    const handleAnimationEnd = () => {
        if (!isOpen) setIsVisible(false)
    }


    return (
        <aside id="sidebar" className={clsx(styles.sidebar, "bg-alpha br-alpha blur", !isOpen ? `${styles.close} ${styles["sidebar-fade-out"]}` : styles["sidebar-fade-in"])} onAnimationEnd={handleAnimationEnd}>
            <WindowIcon className={styles.window} onClick={() => setIsOpen(prev => !prev)}/>
            {isVisible && <div className={`${styles.content} ${isOpen ? "fade-in" : "fade-out"}`}>
                <ProfileSection/>
                <Navigation/>
            </div>}
        </aside>
    )
}