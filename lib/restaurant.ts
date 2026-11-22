import type { Metadata } from "next"
import { cateringVideo } from "@/lib/catering-video"
export const restaurant = {
  name: "Pista House Irving",
  origin: "https://pistahouseirving.com",
  street: "901 W Royal Ln, Suite 160",
  city: "Irving, TX 75039",
  coordinates: { latitude: 32.8963117, longitude: -96.9612018 },
  phone: "(972) 635-5657",
  tel: "tel:+19726355657",
  email: "info@pistahouseirving.com",
  hours: "11 AM – 2 AM daily",
  map: "https://www.google.com/maps/search/?api=1&query=Pista+House+901+W+Royal+Ln+Irving+TX",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Pista+House+901+W+Royal+Ln+Irving+TX+75039",
  instagram: "https://www.instagram.com/pistahousedallas/",
  facebook: "https://www.facebook.com/pistahouseirving/",
  order:
    "https://order.online/store/PistaHouse-212227?hideModal=true&pickup=true",
}
export const navigation = [
  { href: "/menu", name: "Menu" },
  { href: "/catering", name: "Catering" },
  { href: "/aboutus", name: "Our story" },
  { href: "/contactus", name: "Contact us" },
] as const

export type PublicPath =
  | "/"
  | (typeof navigation)[number]["href"]
  | typeof cateringVideo.path

export const pageImages = {
  "/": {
    url: "/images/dum-biryani.webp",
    width: 2400,
    height: 1600,
    alt: "Hyderabadi dum biryani at Pista House Irving",
  },
  "/menu": {
    url: "/images/charminar-print.webp",
    width: 1536,
    height: 1024,
    alt: "Charminar illustration from the Irving menu",
  },
  "/catering": {
    url: "/images/station-finish.webp",
    width: 2400,
    height: 1602,
    alt: "Skewers at a Pista House live grilling station",
  },
  [cateringVideo.path]: cateringVideo.poster,
  "/aboutus": {
    url: "/images/charminar-print.webp",
    width: 1536,
    height: 1024,
    alt: "Illustration of Hyderabad’s Charminar",
  },
  "/contactus": {
    url: "/images/irving-entrance.webp",
    width: 1536,
    height: 1024,
    alt: "Illustrated entrance to Pista House on West Royal Lane",
  },
} satisfies Record<
  PublicPath,
  { url: string; width: number; height: number; alt: string }
>

export function pageMetadata(
  path: PublicPath,
  title: string,
  description: string,
): Metadata {
  const socialTitle = title + " | " + restaurant.name
  const images = [
    {
      ...pageImages[path],
      type: path === cateringVideo.path ? "image/jpeg" : "image/webp",
    },
  ]
  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: path },
    robots: { "max-image-preview": "large" },
    openGraph: {
      type: "website",
      siteName: restaurant.name,
      locale: "en_US",
      title: socialTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images,
    },
  }
}
