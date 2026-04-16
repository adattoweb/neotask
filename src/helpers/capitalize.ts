export const capitalize = (str: string | undefined) =>
   str === undefined ? "" : str.charAt(0).toUpperCase() + str.slice(1)
