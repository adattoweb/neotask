import styles from "../page.module.css"
import { Checkbox } from "@/UI/Checkbox/Checkbox"
import { useFormContext } from "react-hook-form"
import { MagnifyingGlassIcon } from "@/UI/Icons/Icons"
import { Block } from "./Constructor/Constructor"
import { useTranslation } from "@/hooks/useTranslation"
import { ROUTES, ROUTESCANBEDISABLED } from "@/constants/routes"

export function Sidebar() {
   const { register } = useFormContext()
   const t = useTranslation("ua")
   return (
      <div className={`${styles.sidebar} ${styles.content}`}>
         <Block className={styles["mt-6"]}>
            <Checkbox {...register("isCounterVisible")}>
               <p>{t("showTaskCount")}</p>
            </Checkbox>
            <Checkbox {...register("isSearchVisible")}>
               <MagnifyingGlassIcon /> <p>{t("search")}</p>
            </Checkbox>
            {ROUTESCANBEDISABLED.map(key => {
               const Icon = ROUTES[key].ICON
               return (
                  <Checkbox key={key}>
                     {Icon !== null && <Icon />}
                     <p>{ROUTES[key].NAME.UA}</p>
                  </Checkbox>
               )
            })}
            <Checkbox {...register("isProjectsVisible")}>{t("projects")}</Checkbox>
         </Block>
      </div>
   )
}
