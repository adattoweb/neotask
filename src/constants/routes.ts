import { CalendarIcon, ClipboardIcon, SettingsIcon, SunIcon } from "@/UI/Icons/Icons";

interface IRoute {
    ROUTE: string
    ICON: React.ElementType
    NAME: {
        UA: string, 
        EN: string
    }
}

export const ROUTES:Record<string, IRoute> = {
    HOME: {
        ROUTE: "/",
        ICON: CalendarIcon,
        NAME: {
            UA: "Календар",
            EN: "Calendar",
        }
    },
    TODAY: {
        ROUTE: "/today",
        ICON: SunIcon,
        NAME: {
            UA: "Сьогодні",
            EN: "Today",
        }
    },
    NOTES: {
        ROUTE: "/notes",
        ICON: ClipboardIcon,
        NAME: {
            UA: "Нотатки",
            EN: "Notes",
        }
    },
    SETTINGS: {
        ROUTE: "/settings",
        ICON: SettingsIcon,
        NAME: {
            UA: "Налаштування",
            EN: "Settings"
        }
    }
}