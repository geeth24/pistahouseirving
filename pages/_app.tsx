import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { theme } from "../components/theme"

const Layout = dynamic(() => import("../components/Layout"), {
    ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp
