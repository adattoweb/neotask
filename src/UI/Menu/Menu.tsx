import styles from "./Menu.module.css"
import dropdownStyles from "@/UI/Dropdown/Dropdown.module.css"
import Dropdown from "@/UI/Dropdown/Dropdown"
import { DuplicateIcon, EditIcon, EllipsisIcon, FlagIcon, RemoveIcon } from "@/UI/Icons/Icons"
import { Controller, useFormContext } from "react-hook-form"
import { PropsWithChildren } from "react"
import { WithClassName } from "@/types/types"
import { useTranslation } from "@/hooks/useTranslation"
import { PriorityType } from "@/types/task"
import List from "../List/List"
import { priorities } from "@/constants/priorities"
import clsx from "clsx"

type MenuProps = PropsWithChildren<WithClassName>

interface MenuItem {
   onClick: () => void
}

export function Remove({ onClick }: MenuItem) {
   const t = useTranslation("ua")
   return (
      <div className={dropdownStyles.item} onClick={onClick}>
         <RemoveIcon />
         <p>{t("remove")}</p>
      </div>
   )
}

export function Edit({ onClick }: MenuItem) {
   const t = useTranslation("ua")
   return (
      <div className={dropdownStyles.item} onClick={onClick}>
         <EditIcon />
         <p>{t("edit")}</p>
      </div>
   )
}

export function Duplicate({ onClick }: MenuItem) {
   const t = useTranslation("ua")
   return (
      <div className={dropdownStyles.item} onClick={onClick}>
         <DuplicateIcon />
         <p>{t("duplicate")}</p>
      </div>
   )
}

// interface PriorityListProps {
//    priority: PriorityType
// }

export function PriorityList() {
   const t = useTranslation("ua")
   const { control } = useFormContext()

   return (
      <Controller
         name="priority"
         control={control}
         render={({ field }) => (
            <div {...field}>
               <h4 className={dropdownStyles.header}>{t("priority")}</h4>
               <List onChange={field.onChange} className={styles["priority-list"]}>
                  {priorities.map((p, idx) => (
                     <List.Item
                        key={idx}
                        className={clsx(styles["priority-item"], field.value == p.priority && styles.active)}
                        value={String(p.priority)}
                     >
                        <FlagIcon stroke={p.color} />
                     </List.Item>
                  ))}
               </List>
            </div>
         )}
      />
   )
}

export function Menu({ className = "", children }: MenuProps) {
   return (
      <Dropdown className={`${styles.ellipsis} ${className}`}>
         <Dropdown.Button>
            <EllipsisIcon className={styles.ellipsis__svg} />
         </Dropdown.Button>
         <Dropdown.Content>{children}</Dropdown.Content>
      </Dropdown>
   )
}
