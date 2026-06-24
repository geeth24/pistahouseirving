import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact Pista House Irving at (972) 635-5657. Located at 901 W Royal Ln, Irving TX 75039. Open daily 11AM-2AM. Reservations, catering inquiries & directions.",
    keywords: [
        "Pista House Irving contact",
        "Indian restaurant Irving phone",
        "Pista House address",
        "Irving TX Indian food location",
        "Pista House hours",
        "Pista House reservations"
    ],
    openGraph: {
        title: "Contact Us | Pista House Irving",
        description: "Contact Pista House Irving at (972) 635-5657. Located at 901 W Royal Ln, Irving TX 75039. Open daily 11AM-2AM.",
        url: "https://pistahouseirving.com/contactus",
        images: ["/PistaLogo.jpeg"],
    },
    alternates: {
        canonical: "https://pistahouseirving.com/contactus",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
