import { FormProvider, useForm } from "react-hook-form";
import styles from "./TaskList.module.scss"
import { PropsWithChildren, useEffect } from "react";

interface FormData {
    priority: string
    project: string
}

interface FooterProps extends PropsWithChildren {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function Footer({ onClick, children }:FooterProps) {
    const methods = useForm<FormData>();
    const priority = methods.watch("priority")

    useEffect(() => {
        console.log("priority changed:", priority)
    }, [priority])
    return (
        <FormProvider {...methods}>
            <footer className={styles.footer} onClick={onClick}>
                {children}
            </footer>
        </FormProvider>
    )
}