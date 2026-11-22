import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import { SiteHeader, AppearanceProvider } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OrderProvider } from "@/contexts/order-context"
import { restaurant } from "@/lib/restaurant"
import Link from "next/link"
import { ArrowRight, MoonStar } from "lucide-react"
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
  telephone: restaurant.tel.slice("tel:".length),
  email: restaurant.email,
  image: [
    restaurant.origin + "/images/dum-biryani.webp",
    restaurant.origin + "/images/haleem-table.webp",
    restaurant.origin + "/images/mixed-grill.webp",
  ],
  logo: restaurant.origin + "/apple-touch-icon.png",
  geo: { "@type": "GeoCoordinates", ...restaurant.coordinates },
  hasMap: restaurant.directions,
  servesCuisine: ["Hyderabadi", "Indian"],
  menu: restaurant.origin + "/menu",
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
        <StructuredData data={schema} />
        <AppearanceProvider>
          <OrderProvider>
            <a className="skip" href="#main">
              Skip to content
            </a>
            <aside className="announcement" aria-label="Restaurant announcement">
              <Link href="/contactus">
                <MoonStar size={15} aria-hidden="true" />
                <span>Late supper in Irving · Open until 2 AM</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </aside>
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
