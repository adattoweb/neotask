import { useLayoutEffect, useState } from "react"

type UseGetWidthReturn = [number, React.Dispatch<React.SetStateAction<number>>]

export function useGetWidth(): UseGetWidthReturn {
   const [width, setWidth] = useState<number>(0)
   useLayoutEffect(() => {
      const updateWidth = () => {
         setWidth(document.documentElement.clientWidth)
      }

      updateWidth()
   }, [])
   return [width, setWidth]
}
