import { FormProvider, useForm } from "react-hook-form";
import styles from "./TaskList.module.scss"
import { PropsWithChildren, useEffect } from "react";

interface FormData {
    priority: string
    project: string
}

export function Footer({ children }:PropsWithChildren) {
    const methods = useForm<FormData>();
    const priority = methods.watch("priority")

    useEffect(() => {
        console.log("priority changed:", priority)
    }, [priority])
    return (
        <FormProvider {...methods}>
            <footer className={styles.footer}>
                {children}
            </footer>
        </FormProvider>
    )
}