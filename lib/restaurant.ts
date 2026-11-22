import type { Metadata } from "next"
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
  { href: "/contactus", name: "Visit us" },
]
export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const socialTitle = title + " | " + restaurant.name
  const images = [
    {
      url: "/images/pista-house-irving.jpg",
      width: 1200,
      height: 630,
      alt: "Pista House Irving dining room",
    },
  ]
  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: path },
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
