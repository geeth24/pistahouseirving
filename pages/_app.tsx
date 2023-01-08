import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../components/theme"
import { Provider } from "react-redux"
import store from "../redux/store"
import Layout from "../components/Layout"

// const Layout = dynamic(() => import("../components/Layout"), {
//     ssr: false,
// })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </ChakraProvider>
    )
}

export default MyApp
