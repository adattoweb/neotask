import { ChartBarIcon, ChevronIcon, ExitIcon, SettingsIcon } from "@/UI/Icons/Icons"
import styles from "./Profile.module.scss"
import Image from "next/image"
import { useModalsStore } from "@/stores/useModalsStore"
import { Link } from "@/UI/Modals/Modal/Constructor"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { useTranslation } from "@/hooks/useTranslation"

export function ProfileSection() {
    const toggleModal = useModalsStore(state => state.toggleModal)
    const t = useTranslation("ua")

    return (
        <Dropdown className={styles.profile}>
            <Dropdown.Button className={styles.profile__button} needToRotating={true}>
                <Image className={styles.logo} src="/images/test-logo.png" alt="logo" width={26} height={26} draggable={false}/>
                <p className={styles.name}>adattoweb</p>
                <ChevronIcon className={styles.chevron} stroke="#D4D4D4" />
            </Dropdown.Button>
            <Dropdown.Content className={styles.profile__content}>
                <h3 className={styles.nickname}>adattoweb</h3>
                <p className={styles.counter}>0/6 {t("tasks")}</p>
                <Link className={styles.link} Icon={SettingsIcon}>{t("settings")}</Link>
                <Link className={styles.link} Icon={ChartBarIcon} onClick={() => toggleModal("isAnalyticsOpen")}>{t("productivity")}</Link>
                <Link className={styles.link} Icon={ExitIcon}>{t("logOut")}</Link>
            </Dropdown.Content>
        </Dropdown>
    )
}