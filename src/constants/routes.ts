import { CalendarIcon, ClipboardIcon, SettingsIcon, SunIcon } from "@/UI/Icons/Icons"

interface IRoute {
   ROUTE: string
   ICON: React.ElementType | null
   NAME: {
      UA: string
      EN: string
   }
}

export const ROUTES = {
   HOME: {
      ROUTE: "/",
      ICON: CalendarIcon,
      NAME: {
         UA: "Календар",
         EN: "Calendar",
      },
   },
   TODAY: {
      ROUTE: "/today",
      ICON: SunIcon,
      NAME: {
         UA: "Сьогодні",
         EN: "Today",
      },
   },
   NOTES: {
      ROUTE: "/notes",
      ICON: ClipboardIcon,
      NAME: {
         UA: "Нотатки",
         EN: "Notes",
      },
   },
   SETTINGS: {
      ROUTE: "/settings",
      ICON: SettingsIcon,
      NAME: {
         UA: "Налаштування",
         EN: "Settings",
      },
   },
   LOGIN: {
      ROUTE: "/login",
      ICON: null,
      NAME: {
         UA: "Логін",
         EN: "Login",
      },
   },
} as const satisfies Record<string, IRoute>

export const ROUTESINSIDEBAR = ["HOME", "TODAY", "NOTES", "SETTINGS"] as const satisfies (keyof typeof ROUTES)[]
export const ROUTESASSCREEN = ["HOME", "TODAY", "NOTES"] as const satisfies (keyof typeof ROUTES)[]
export const ROUTESCANBEDISABLED = ["TODAY", "NOTES", "SETTINGS"] as const satisfies (keyof typeof ROUTES)[]
