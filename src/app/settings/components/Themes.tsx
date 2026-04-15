import styles from "../page.module.css"
import Range from "@/UI/Range/Range"
import { Block, Grid, Header, Picture, ThemesAdd } from "@/UI/FormUI/Constructor"
import { ThemeDropdown } from "./Dropdowns/ThemeDropdown"
import { useTranslation } from "@/hooks/useTranslation"
import { useFormContext } from "react-hook-form"
import { ColorPicker } from "@/UI/ColorPicker/ColorPicker"
import { themes } from "@/constants/themes"
import { getCSSVariable } from "@/helpers/getCSSVariable"
import { Button } from "@/UI/CommonUI/Constructor"

export function Themes() {
   const t = useTranslation("ua")
   const { watch } = useFormContext()
   const theme = watch("themes")

   const accentColor = getCSSVariable("--accent-color")
   const accentColorActive = getCSSVariable("--accent-color-active")

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
            <Header>{t("accentColor")}</Header>
            <ColorPicker name="accentColor" defaultValue={accentColor} />
         </Block>
         <Block>
            <Header>{t("accentColorActive")}</Header>
            <ColorPicker name="accentColorActive" defaultValue={accentColorActive} />
         </Block>
         <Block>
            <Button withAccentColor={true} style={{ width: "300px", height: "45px" }}>
               {t("exampleButton")}
            </Button>
         </Block>
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
               {themes.map((el, index) => (
                  <Picture key={index} src={el} alt="background theme image" width={150} height={100} />
               ))}
            </Grid>
         </Block>
         <Block>
            <Header>{t("customBackgroundImages")}</Header>
            <Grid>
               {themes.map((el, index) => (
                  <Picture key={index} src={el} alt="background theme image" width={150} height={100} />
               ))}
               <ThemesAdd />
            </Grid>
         </Block>
      </div>
   )
}
