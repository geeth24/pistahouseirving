import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Pista House Irving - bringing authentic Hyderabadi flavors to Texas for over 10 years. Our story, values, and commitment to quality Indian cuisine.",
    keywords: [
        "About Pista House",
        "Indian restaurant Irving history",
        "Hyderabadi restaurant story",
        "Pista House Irving TX",
        "Authentic Indian cuisine Texas"
    ],
    openGraph: {
        title: "About Us | Pista House Irving",
        description: "Learn about Pista House Irving - bringing authentic Hyderabadi flavors to Texas for over 10 years.",
        url: "https://pistahouseirving.com/aboutus",
        images: ["/building.jpg"],
    },
    alternates: {
        canonical: "https://pistahouseirving.com/aboutus",
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
