import { Account } from "./components/Account"
import { AccountIcon, BrushIcon, ChartBarIcon, InfoIcon, SettingsIcon, WindowIcon } from "@/UI/Icons/Icons"
import { TabType } from "./stores/useTabStore"
import { General } from "./components/General"
import { Sidebar } from "./components/Sidebar"
import { Information } from "./components/Information"
import { Themes } from "./components/Themes"

interface IItem {
   name: Record<string, string>
   icon: React.ElementType
   content: React.ElementType
}

export const tabs: Record<TabType, IItem> = {
   account: {
      name: {
         en: "Account",
         ua: "Аккаунт",
      },
      icon: AccountIcon,
      content: Account,
   },
   general: {
      name: {
         en: "General",
         ua: "Загальні",
      },
      icon: SettingsIcon,
      content: General,
   },
   themes: {
      name: {
         en: "Themes",
         ua: "Теми",
      },
      icon: BrushIcon,
      content: Themes,
   },
   sidebar: {
      name: {
         en: "Sidebar",
         ua: "Бічна панель",
      },
      icon: WindowIcon,
      content: Sidebar,
   },
   productivity: {
      name: {
         en: "Productivity",
         ua: "Продуктивність",
      },
      icon: ChartBarIcon,
      content: AccountIcon,
   },
   information: {
      name: {
         en: "Information",
         ua: "Інформація",
      },
      icon: InfoIcon,
      content: Information,
   },
}
