export function getCSSVariable(variable: string): string {
   const rootStyles = getComputedStyle(document.documentElement)
   return rootStyles.getPropertyValue(variable)
}
