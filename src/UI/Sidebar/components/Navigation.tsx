import Link from "next/link"
import styles from "../Sidebar.module.scss"

import { ROUTES } from "@/constants/routes"

export interface NavItemProps {
    Icon?: React.ElementType
    title: string
    href: string
    counter?: number
}

const tempProjects = [
    {
        title: "Навчання",
        counter: 2,
        href: "#",
    },{
        title: "Навчання",
        counter: 2,
        href: "#",
    },{
        title: "Навчання",
        counter: 2,
        href: "#",
    },{
        title: "Навчання",
        counter: 2,
        href: "#",
    },{
        title: "Навчання",
        counter: 2,
        href: "#",
    },
]

function NavItem({ Icon, title, href, counter }:NavItemProps){
    return (
        <Link className={styles.link} href={href} draggable={false}>
            {Icon ? <Icon className={styles.icon}/> : <p className={styles.tag}>#</p>}
            <p className={styles.title}>{title}</p>
            {counter && <p className={styles.counter}>{counter}</p>}
        </Link>
    )
}

export function Navigation(){
    const lang: ("UA" | "EN") = "UA"
    return (
        <nav className={styles.nav}>
            <section className={styles.section}>
                {Object.keys(ROUTES).map(key => <NavItem key={ROUTES[key].ROUTE} Icon={ROUTES[key].ICON} title={ROUTES[key].NAME[lang]} href={ROUTES[key].ROUTE} counter={1}/>)}
            </section>
            <section className={styles.section}>
                <h2 className={styles.header}>Проєкти</h2>
                {tempProjects.map((el, index) => <NavItem key={index} title={el.title} href={el.href} counter={el.counter}/>)}
            </section>
        </nav>
    )
}