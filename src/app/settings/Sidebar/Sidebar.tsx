"use client"

import { PropsWithChildren } from "react"
import styles from "./Sidebar.module.scss"
import { useTabStore, type TabType } from "../stores/useTabStore"
import { tabs } from "../tabs"
import { LeftArrowIcon } from "@/UI/Icons/Icons"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/hooks/useTranslation"


interface NavProps extends PropsWithChildren {
    tabKey: TabType
    Icon: React.ElementType
}

function NavItem({ tabKey, Icon, children }: NavProps) {
    const setTab = useTabStore(set => set.setTab)
    return (
        <li className={styles.item} onClick={() => setTab(tabKey)}>
            <Icon />
            <p className={styles.name}>{children}</p>
        </li>
    )
}

export function Sidebar() {
    const router = useRouter()
    const t = useTranslation("ua")

    return (
        <aside className={styles.sidebar}>
            <h3 className={styles.header}>{t("settings")}</h3>
            <div className={styles.return} onClick={() => router.back()}>
                <LeftArrowIcon className={styles.return__icon} />
                <p className={styles.return__text}>{t("returnBack")}</p>
            </div>
            <ul className={styles.list}>
                {(Object.keys(tabs) as TabType[]).map((key, index) => (
                    <NavItem tabKey={key} key={index} Icon={tabs[key].icon}>
                        {tabs[key].name[t("lang")]}
                    </NavItem>
                ))}
            </ul>
        </aside>
    )
}