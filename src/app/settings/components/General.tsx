import { useTranslation } from "@/hooks/useTranslation"
import styles from "../page.module.scss"
import { Block, Header } from "./Constructor/Constructor"
import { DateFormatDropdown } from "./Dropdowns/DateFormatDropdown"
import { LanguageDropdown } from "./Dropdowns/LanguageDropdown"
import { ScreenDropdown } from "./Dropdowns/ScreenDropdown"
import { StartWeekDropdown } from "./Dropdowns/StartWeekDropdown"
import { TimeFormatDropdown } from "./Dropdowns/TimeFormatDropdown"

export function General() {
    const t = useTranslation("ua")
    return (
        <div className={`${styles.general} ${styles.content}`}>
            <Block>
                <Header>{t("language")}</Header>
                <LanguageDropdown />
            </Block>
            <Block>
                <Header>{t("mainScreen")}</Header>
                <ScreenDropdown />
            </Block>
            <Block>
                <Header>{t("timeFormat")}</Header>
                <TimeFormatDropdown />
            </Block>
            <Block>
                <Header>{t("dateFormat")}</Header>
                <DateFormatDropdown />
            </Block>
            <Block>
                <Header>{t("startWeekFrom")}</Header>
                <StartWeekDropdown />
            </Block>
        </div>
    )
}