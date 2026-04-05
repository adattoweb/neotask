import { useTranslation } from "@/hooks/useTranslation"

export default function NotFound() {
   const t = useTranslation("ua")
   return (
      <div className="notfound">
         <h2 className="notfound__header">404</h2>
         <p className="notfound__text">{t("pageNotFound")}</p>
      </div>
   )
}
