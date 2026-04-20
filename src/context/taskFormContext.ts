import { createContext } from "react"

export const FormContext = createContext<IFormContext | null>(null)

export interface IFormContext {
   setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}
