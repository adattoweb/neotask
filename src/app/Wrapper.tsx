"use client"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { Sidebar } from "@/UI/Sidebar/Sidebar"
import clsx from "clsx"

export function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const withSidebar = !pathname.startsWith("/settings")
//   const closeModals = useModalsStore(store => store.closeModals)

  return (
      <div className="wrapper" id="root">
          {withSidebar && <Sidebar />}
          <div className={clsx("content",!withSidebar && "without")}>
              {children}
          </div>
      </div>
  )
}