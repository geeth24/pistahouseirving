import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
// 3. extend the theme
export const theme = extendTheme({ config })
