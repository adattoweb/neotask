import styles from "../page.module.css"
import Range from "@/UI/Range/Range"
import { Block, Grid, Header, Picture, ThemesAdd } from "@/UI/FormUI/Constructor"
import { ThemeDropdown } from "./Dropdowns/ThemeDropdown"
import { useTranslation } from "@/hooks/useTranslation"
import { useFormContext } from "react-hook-form"
import { ColorPicker } from "@/UI/ColorPicker/ColorPicker"

export function Themes() {
   const t = useTranslation("ua")
   const { watch } = useFormContext()
   const theme = watch("themes")

   const isCustom = theme === "custom"
   return (
      <div className={`${styles.themes} ${styles.content}`}>
         <Block>
            <Header>{t("theme")}</Header>
            <ThemeDropdown />
         </Block>
         {isCustom && (
            <Block>
               <Header>{t("backgroundColor")}</Header>
               <ColorPicker name="backgroundColor" defaultValue="#fff" />
            </Block>
         )}
         <Block>
            <Header>{t("transparent")}</Header>
            <Range name="transparent" />
         </Block>
         <Block>
            <Header>{t("blur")}</Header>
            <Range name="blur" max={60} />
         </Block>
         <Block>
            <Header>{t("backgroundBlur")}</Header>
            <Range name="backgroundBlur" max={30} />
         </Block>
         <Block>
            <Header>{t("borderRadius")}</Header>
            <Range name="borderRadius" max={60} />
         </Block>
         <Block>
            <Header>{t("backgroundImages")}</Header>
            <Grid>
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
            </Grid>
         </Block>
         <Block>
            <Header>{t("customBackgroundImages")}</Header>
            <Grid>
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <Picture src="images/themes/theme11.jpg" />
               <ThemesAdd />
            </Grid>
         </Block>
      </div>
   )
}
