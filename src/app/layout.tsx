import type { Metadata } from "next"
import { Geist, Geist_Mono, Montserrat, Montserrat_Alternates } from "next/font/google"
import "@/app/globals.css"
import { PropsWithChildren } from "react"
import { ClientWrapper } from "./Wrapper"
import { AnalyticsModal } from "@/UI/Modals/AnalyticsModal/AnalyticsModal"

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin", "cyrillic"],
   weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin", "cyrillic"],
   weight: ["400", "500", "600", "700", "800"],
})

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin", "cyrillic"],
   weight: ["400", "500", "600", "700", "800"],
})

const montserratAlternates = Montserrat_Alternates({
   variable: "--font-montserrat-alternates",
   subsets: ["latin", "cyrillic"],
   weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
   title: "Neotask",
   description: "A todolist with widely customization",
}

export default function RootLayout({ children }: PropsWithChildren) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${montserratAlternates.variable}`}
         >
            <div className="bg-image">
               <ClientWrapper>{children}</ClientWrapper>
            </div>
            <AnalyticsModal />
         </body>
      </html>
   )
}
