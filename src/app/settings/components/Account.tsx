import styles from "../page.module.css"
import { Block, Header, Input, PhotoEditor, Paragraph, Button, HiddenInput } from "./Constructor/Constructor"
import { useTranslation } from "@/hooks/useTranslation"

export function Account() {
   const t = useTranslation("ua")

   return (
      <div className={`${styles.account} ${styles.content}`}>
         <PhotoEditor />
         <Block>
            <Header>{t("nickname")}</Header>
            <Input name="nickname" maxLength={128} />
         </Block>
         <Block>
            <Header>{t("email")}</Header>
            <HiddenInput name="email" maxLength={128}>
               {t("changeEmail")}
            </HiddenInput>
         </Block>
         <Block>
            <Header>{t("password")}</Header>
            <HiddenInput name="password" maxLength={128}>
               {t("changePassword")}
            </HiddenInput>
         </Block>
         <Block>
            <Header>{t("deleteYourAccount")}</Header>
            <Paragraph>{t("deleteAccountWarning")}</Paragraph>
            <Button className={styles["remove-btn"]}>{t("removeAccount")}</Button>
         </Block>
      </div>
   )
}
