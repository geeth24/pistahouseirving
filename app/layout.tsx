import type { Metadata } from "next"
import { SiteHeader, AppearanceProvider } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OrderProvider } from "@/contexts/order-context"
import { restaurant } from "@/lib/restaurant"
import Script from "next/script"
import "@/styles/globals.css"
export const metadata: Metadata = {
  metadataBase: new URL(restaurant.origin),
  title: { default: restaurant.name, template: "%s | Pista House Irving" },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico?v=2", apple: "/apple-touch-icon.png" },
}
const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": restaurant.origin + "/#restaurant",
  name: restaurant.name,
  url: restaurant.origin,
  telephone: restaurant.phone,
  email: restaurant.email,
  image: restaurant.origin + "/images/dining-room.webp",
  geo: { "@type": "GeoCoordinates", ...restaurant.coordinates },
  hasMap: restaurant.directions,
  servesCuisine: ["Hyderabadi", "Indian"],
  hasMenu: { "@id": restaurant.origin + "/menu#dining-menu" },
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.street,
    addressLocality: "Irving",
    addressRegion: "TX",
    postalCode: "75039",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "02:00",
  },
  sameAs: [restaurant.instagram, restaurant.facebook],
}
const measurementId = "G-9RX6PZQD91"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <AppearanceProvider>
          <OrderProvider>
            <a className="skip" href="#main">
              Skip to content
            </a>
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </OrderProvider>
        </AppearanceProvider>
        {process.env.NEXT_PUBLIC_ENVIRONMENT === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            <Script id="restaurant-analytics">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurementId}');`}</Script>
          </>
        )}
      </body>
    </html>
  )
}
