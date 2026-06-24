import Layout from "@/components/Layout"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Cormorant_Garamond, Geist } from "next/font/google"
import { OrderProvider } from "@/contexts/order-context"

const display = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
    display: "swap",
})

const body = Geist({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://pistahouseirving.com"),
    title: {
        default: "Pista House Irving | Authentic Hyderabadi Indian Restaurant in Irving, TX",
        template: "%s | Pista House Irving"
    },
    description: "Experience authentic Hyderabadi cuisine at Pista House Irving, Texas. Famous for Dum Biryani, Haleem, Kebabs & Indian catering. Open late till 2AM. Order online or dine-in at 901 W Royal Ln, Irving TX.",
    keywords: [
        "Pista House Irving",
        "Indian restaurant Irving TX",
        "Hyderabadi biryani Irving",
        "Haleem Irving Texas",
        "Indian catering Dallas",
        "Best biryani DFW",
        "Authentic Indian food Irving",
        "Late night Indian restaurant",
        "Indian restaurant near me",
        "Hyderabadi restaurant Texas",
        "Dum biryani Dallas",
        "Indian kebabs Irving",
        "Irani chai Irving"
    ],
    icons: {
        icon: "/PistaLogo.jpeg",
        apple: "/PistaLogo.jpeg",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Pista House Irving",
        title: "Pista House Irving | Authentic Hyderabadi Indian Restaurant",
        description: "Experience authentic Hyderabadi cuisine at Pista House Irving. Famous for Dum Biryani, Haleem, Kebabs & catering. Open late till 2AM.",
        url: "https://pistahouseirving.com",
        images: [
            {
                url: "/PistaLogo.jpeg",
                width: 1200,
                height: 630,
                alt: "Pista House Irving - Authentic Hyderabadi Cuisine"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pista House Irving | Authentic Hyderabadi Indian Restaurant",
        description: "Experience authentic Hyderabadi cuisine at Pista House Irving. Famous for Dum Biryani, Haleem, Kebabs & catering.",
        images: ["/PistaLogo.jpeg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://pistahouseirving.com",
    },
    authors: [{ name: "Pista House Irving" }],
    creator: "Pista House Irving",
    publisher: "Pista House Irving",
    category: "Restaurant",
    verification: {
        google: "your-google-verification-code",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Pista House Irving",
    image: "https://pistahouseirving.com/PistaLogo.jpeg",
    "@id": "https://pistahouseirving.com",
    url: "https://pistahouseirving.com",
    telephone: "+1-972-635-5657",
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: "901 W Royal Ln",
        addressLocality: "Irving",
        addressRegion: "TX",
        postalCode: "75039",
        addressCountry: "US"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 32.9290,
        longitude: -96.9489
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "02:00"
    },
    servesCuisine: ["Indian", "Hyderabadi", "South Asian"],
    menu: "https://pistahouseirving.com/menu",
    acceptsReservations: "True",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "500"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`overflow-x-hidden ${display.variable} ${body.variable}`}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#f6f2e9" />
                <meta name="geo.region" content="US-TX" />
                <meta name="geo.placename" content="Irving" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
