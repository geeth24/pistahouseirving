import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Menu",
    description: "Explore our authentic Hyderabadi menu at Pista House Irving. Featuring Dum Biryani, Haleem, Kebabs, Naan, Tandoori dishes, vegetarian options & more. View prices and order online.",
    keywords: [
        "Pista House menu",
        "Indian food menu Irving",
        "Hyderabadi biryani menu",
        "Haleem menu",
        "Indian restaurant menu prices",
        "Vegetarian Indian food",
        "Kebab menu Irving TX"
    ],
    openGraph: {
        title: "Menu | Pista House Irving",
        description: "Explore our authentic Hyderabadi menu featuring Dum Biryani, Haleem, Kebabs & more. View prices and order online.",
        url: "https://pistahouseirving.com/menu",
        images: ["/slides/3.jpg"],
    },
    alternates: {
        canonical: "https://pistahouseirving.com/menu",
    },
}

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
