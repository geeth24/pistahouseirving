import Layout from "@/components/Layout"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { OrderProvider } from "@/contexts/order-context"

export const metadata: Metadata = {
    metadataBase: new URL("https://pistahouseirving.com"),
    title: "Pista House Irving - Authentic Indian Cuisine",
    description: "PistaHouse Irving is a celebration of Indian culture, flavours and hospitality. Immerse yourself in a sensory spice experience and awaken your tastebuds with our modern Indian menu, showcasing the very best of Indias exotic flavours.",
    icons: {
        icon: "/PistaLogo.jpeg",
        apple: "/PistaLogo.jpeg",
    },
    openGraph: {
        title: "Pista House Irving",
        description: "PistaHouse Irving is a celebration of Indian culture, flavours and hospitality. Immerse yourself in a sensory spice experience and awaken your tastebuds with our modern Indian menu, showcasing the very best of Indias exotic flavours.",
        url: "https://pistahouseirving.com",
        images: ["/PistaLogo.jpeg"],
    },
    authors: [{ name: "Geeth Gunnampalli" }],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <head>
                <meta charSet="utf-8" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="overflow-x-hidden">
                <OrderProvider>
                    <Layout>{children}</Layout>
                </OrderProvider>
            </body>
        </html>
    )
}
