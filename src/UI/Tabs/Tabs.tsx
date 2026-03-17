import { createContext, PropsWithChildren } from "react";
import styles from "./Tabs.module.scss"
import { WithClassName } from "@/types/types";
import { useCheckContext } from "@/hooks/useCheckContext";

interface ItemProps extends PropsWithChildren<WithClassName> {
    value: string
    onClick?: () => void
}

interface TabsProps extends PropsWithChildren<WithClassName> {
    selectedValue: string
    onChange: (value:string) => void
}

interface IContext {
  select: (val: string) => void
  selectedValue: string
}

const TabsContext = createContext<IContext | null>(null)

function Item({ className = "", children, value, onClick }:ItemProps){
    const { selectedValue, select } = useCheckContext("Tabs Context", TabsContext)
    function myClick(){
        select(value)
        onClick?.()
    }
    return (
        <div className={`${styles.tab} ${selectedValue === value ? styles.active : ""} ${className}`} onClick={myClick}>
            {children}
        </div>
    )
}

function Tabs({ className = "", children, selectedValue, onChange }:TabsProps){
    const select = (val: string) => {
        onChange(val)
    }

    const ctxValue = {
        select,
        selectedValue,
    }
    return (
        <TabsContext.Provider value={ctxValue}>
            <div className={`${styles.tabs} ${className} bg-alpha`}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

Tabs.Item = Item
export default Tabs