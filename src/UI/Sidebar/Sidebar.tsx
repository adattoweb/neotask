"use client"

import { useEffect, useState } from "react"
import { WindowIcon } from "../Icons/Icons"
import { Navigation } from "./components/Navigation"
import { ProfileSection } from "./components/ProfileSection"
import styles from "./Sidebar.module.css"
import clsx from "clsx"

export function Sidebar() {
   const [isOpen, setIsOpen] = useState(false)
   const [isVisible, setIsVisible] = useState(false)

   const [was, setWas] = useState(false)

   useEffect(() => {
      if (isOpen) {
         setIsVisible(true)
         document.getElementById("root")?.classList.remove("close")
      } else document.getElementById("root")?.classList.add("close")
   }, [isOpen])

   const handleAnimationEnd = () => {
      if (!isOpen) setIsVisible(false)
   }

   const handleClick = () => {
      setWas(true)
      setIsOpen((prev) => !prev)
   }

   return (
      <aside
         id="sidebar"
         className={clsx(
            styles.sidebar,
            "bg-alpha br-alpha blur",
            !isOpen && was ? `${styles.close} ${styles["sidebar-fade-out"]}` : styles["sidebar-fade-in"],
            !was && styles.first,
         )}
         onAnimationEnd={handleAnimationEnd}
      >
         <WindowIcon className={styles.window} onClick={handleClick} />
         {isVisible && (
            <div className={`${styles.content} ${isOpen ? "fade-in" : "fade-out"}`}>
               <ProfileSection />
               <Navigation />
            </div>
         )}
      </aside>
   )
}
