export interface WithClassName {
    className?: string
}
export type Language = "en" | "ua"

export type Translations = Record<string, string>

export type Locales = {
    en: Translations
    ua: Translations
}