import { useEffect, useState } from "react"

type UseGetWidthReturn = [number | null, React.Dispatch<React.SetStateAction<number | null>>]

export function useGetWidth(): UseGetWidthReturn {
   const [width, setWidth] = useState<number | null>(null)
   useEffect(() => {
      const updateWidth = () => {
         setWidth(document.documentElement.clientWidth)
      }

      updateWidth()
   }, [])
   return [width, setWidth]
}