import type { Language, Locales } from "@/types/types"
import { en } from "@/locales/en"
import { ua } from "@/locales/ua"

const locales: Locales = { en, ua }

export function useTranslation(lang: Language) {
  return (key: string, vars?: Record<string, string | number>) => {
    let text = locales[lang][key] || key

    if (vars) {
      Object.entries(vars).forEach(([varKey, value]) => {
        text = text.replace(new RegExp(`\\{${varKey}\\}`, "g"), String(value))
      })
    }

    return text
  }
}