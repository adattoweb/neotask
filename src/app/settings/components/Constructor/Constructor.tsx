import { PropsWithChildren, useState } from "react"
import styles from "./Constructor.module.scss"
import Image from "next/image"
import { WithClassName } from "@/types/types"
import { FieldError, useFormContext } from "react-hook-form"
import clsx from "clsx"
import { ImageModal } from "@/UI/Modals/ImageModal/ImageModal"
import { PlusIcon } from "@/UI/Icons/Icons"
import { useModalsStore } from "@/stores/useModalsStore"
import { useTranslation } from "@/hooks/useTranslation"

interface CustomText extends PropsWithChildren<WithClassName> {
    fontSize?: number
}

interface ButtonProps extends PropsWithChildren<WithClassName> {
    onClick?: () => void
}

export function Button({ onClick, className, children }:ButtonProps){
    return (
        <div className={`${styles.button} bg-alpha ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}

export function PhotoEditor(){
    const t = useTranslation("ua")
    const { register } = useFormContext()
    const modals = useModalsStore(store => store.modals)
    const toggleModal = useModalsStore(store => store.toggleModal)

    return (
        <div className={styles.photo}>
            <ImageModal isOpen={modals.isLogoEditorOpen} modalKey="isLogoEditorOpen" {...register("logo")} />
            <Header>
                {t("photo")}
            </Header>
            <div className={styles.photo__flex}>
                <Image width={64} height={64} className={styles.photo__image} src="/images/test-logo.png" alt="logo" />
                <div className={styles.photo__content}>
                    <div className={styles.photo__buttons}>
                        <Button onClick={() => toggleModal("isLogoEditorOpen")}>{t("change")}</Button>
                        <Button>{t("remove")}</Button>
                    </div>
                    <div className={styles.photo__text}>
                        <p>{t("uploadPhotoLimit")}</p>
                        <p>{t("photoVisible")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Header({ className, fontSize = 16, children }:CustomText){
    return (
        <h4 className={`${styles.header} ${className}`} style={{fontSize: fontSize}}>
            {children}
        </h4>
    )
}

export function Block({ className, children }:PropsWithChildren<WithClassName>){
    return (
        <div className={`${styles.block} ${className}`}>
            {children}
        </div>
    )
}

interface InputProps extends WithClassName{
   placeholder?: string
   name: string
   required?: false | string
   maxLength?: number
}

export function Input({ className = "", placeholder, name, required = false, maxLength = Infinity }:InputProps) {
    const { formState: { errors }, register } = useFormContext()
    return (
        <>
            <input className={`${styles.input} ${className}`} placeholder={placeholder} type="text" {...register(name, { required: required, maxLength: maxLength })} />
            {required && errors[name] && (
                <p className="error">{(errors[name] as FieldError).message}</p>
            )}
        </>
    )
}

export function Paragraph({ className, fontSize = 14, children }: CustomText){
    return <p className={`${styles.paragraph} ${className}`} style={{fontSize: fontSize}}>{children}</p>
}
interface HiddenInputProps extends PropsWithChildren<InputProps> {
    btnClassName?: string
}

export function HiddenInput({ btnClassName, className = "", placeholder, name, required = false, maxLength = Infinity, children }:HiddenInputProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {isOpen ? <Input className={className} placeholder={placeholder} name={name} required={required} maxLength={maxLength}/> : <Button className={btnClassName} onClick={() => setIsOpen(true)}>{children}</Button>}
        </>
    )
}

export function Grid({ className, children }:PropsWithChildren<WithClassName>){
    return (
        <div className={clsx(styles.grid, className)}>
            {children}
        </div>
    )
}

interface PictureProps extends WithClassName {
    src: string
    onClick?: () => void
}

export function Picture({ className, src, onClick }: PictureProps) {
    return (
        <div className={clsx(styles.image, className)} style={{ backgroundImage: `url(${src})` }} onClick={onClick} />
    )
}

export function ThemesAdd() {
    const { register } = useFormContext()
    const toggleModal = useModalsStore(state => state.toggleModal)
    const modals = useModalsStore(store => store.modals)
    return (
        <>
            <ImageModal isOpen={modals.isThemesAddOpen} modalKey="isThemesAddOpen" {...register("themeFile")} />
            <div className={clsx(styles.add, "br-alpha", "bg-alpha")} onClick={() => toggleModal("isThemesAddOpen")}>
                <PlusIcon className={styles.add__image} />
            </div>
        </>
    )
}