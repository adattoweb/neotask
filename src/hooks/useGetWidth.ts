import { useEffect, useLayoutEffect, useState } from "react"

type UseGetWidthReturn = [number, React.Dispatch<React.SetStateAction<number>>]

export function useGetWidth(): UseGetWidthReturn {
   const [width, setWidth] = useState<number>(0)

   const useIsomorphicLayoutEffect = typeof window !== undefined ? useLayoutEffect : useEffect

   useIsomorphicLayoutEffect(() => {
      const updateWidth = () => {
         setWidth(document.documentElement.clientWidth)
      }

      updateWidth()
   }, [])
   return [width, setWidth]
}
