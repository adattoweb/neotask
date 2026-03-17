import { useContext, Context } from "react"

export function useCheckContext<T>(name: string, context: Context<T | null>): T {
  const ctx = useContext(context)
  if (!ctx) throw new Error(`useCheckContext must be used inside ${name}`)
  return ctx
}