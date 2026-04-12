"use client"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { Sidebar } from "@/UI/Sidebar/Sidebar"
import clsx from "clsx"
import { ROUTES } from "@/constants/routes"

export function ClientWrapper({ children }: { children: ReactNode }) {
   const pathname = usePathname()
   console.log(pathname)
   const withSidebar = pathname !== ROUTES.SETTINGS.ROUTE && pathname !== ROUTES.LOGIN.ROUTE

   return (
      <div className="wrapper" id="root">
         {withSidebar && <Sidebar />}
         <div className={clsx("content", !withSidebar && "without")}>{children}</div>
      </div>
   )
}
