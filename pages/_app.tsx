import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { theme } from "../components/theme"
import { Provider } from "react-redux"
import store from "../redux/store"
import { GetServerSideProps } from "next"

const Layout = dynamic(() => import("../components/Layout"), {
    ssr: false,
})

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     //get process.env.ENVIRONMENT value
//     process.env.ENVIRONMENT = process.env.ENVIRONMENT || "development"
//     return {
//         props: {
//             ENVIRONMENT: process.env.ENVIRONMENT,
//         },
//     }
// }

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
