import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Catering Services",
    description: "Professional Indian catering services in Irving & Dallas. Pista House offers authentic Hyderabadi cuisine for weddings, corporate events, parties. Custom menus for 20-500+ guests.",
    keywords: [
        "Indian catering Irving",
        "Hyderabadi catering Dallas",
        "Wedding catering Indian food",
        "Corporate catering Irving TX",
        "Biryani catering DFW",
        "Indian food catering near me",
        "Party catering Irving"
    ],
    openGraph: {
        title: "Catering Services | Pista House Irving",
        description: "Professional Indian catering for weddings, corporate events & parties. Custom menus featuring authentic Hyderabadi cuisine for 20-500+ guests.",
        url: "https://pistahouseirving.com/catering",
        images: ["/cater.jpeg"],
    },
    alternates: {
        canonical: "https://pistahouseirving.com/catering",
    },
}

export default function CateringLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
