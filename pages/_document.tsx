import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "../components/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/PistaLogo.jpeg" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap"
                        rel="stylesheet"
                    />

                    <link rel="apple-touch-icon" href="/PistaLogo.jpeg" />

                  
                    <meta
                        name="image"
                        property="og:image"
                        content="/PistaLogo.jpeg"
                    />
                    <meta name="author" content="Geeth Gunnampalli" />
                    <meta
                        property="og:description"
                        content="PistaHouse Texas is a celebration of Indian culture, flavours and hospitality. Immerse yourself in a sensory spice experience and awaken your tastebuds with our modern Indian menu, showcasing the very best of Indias exotic flavours."
                    />
                    <meta
                        property="og:url"
                        content="https://pistahouseirving.com"
                    />
                    {/* <script
                        type="text/javascript"
                        src="/static/script.js"
                    ></script> */}
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
