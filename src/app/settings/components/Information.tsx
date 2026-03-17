import styles from "../page.module.scss"
import { Block, Header, Paragraph } from "./Constructor/Constructor"

import { useTranslation } from "@/hooks/useTranslation"

export function Information() {
   const t = useTranslation("en")

   return (
      <div className={`${styles.information} ${styles.content}`}>
         <Block className={styles["mt-6"]}>
            <Paragraph fontSize={16}>
               {t("informationDescription")}
            </Paragraph>
         </Block>
         <Block className={styles["mt-6"]}>
            <Header fontSize={18}>{t("customization")}</Header>
            <Paragraph fontSize={16}>
               {t("customizationDescription")}
            </Paragraph>
         </Block>
         <Block className={styles["mt-6"]}>
            <Header fontSize={18}>{t("ourGoal")}</Header>
            <Paragraph fontSize={16}>
               {t("ourGoalDescription")}
            </Paragraph>
         </Block>
      </div>
   )
}