import React from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "../../components/Firebase"
import Head from "next/head"


function AboutUs() {
    const [logged, setLogged] = React.useState(false)

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "About Us",
                page_location: "https://www.pistahouseirving.com/aboutus",
                page_path: "/aboutus",
            })
            setLogged(true)
        }
    } else {
        if (!logged) {
            console.log("development")
            setLogged(true)
        }
    }
    return (
        <div>
            {" "}
            <Head>
                <title>About Us | Pista House Irving</title>
            </Head>
            <div className="bg-pisataGreen relative flex items-center justify-center">
                <div className="absolute inset-0 blur">
                    <img
                        className="h-full w-full object-cover"
                        src="/building.jpg"
                        alt=""
                    />
                    <div
                        className="absolute inset-0 bg-pistaLightGray/70 mix-blend-multiply "
                        aria-hidden="true"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-pistaGreen sm:text-5xl lg:text-6xl">
                        About Us
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-pistaLightGreen">
                        PistaHouse Irving is a celebration of Indian culture,
                        flavours and hospitality. Immerse yourself in a sensory
                        spice experience and awaken your tastebuds with our
                        modern Indian menu, showcasing the very best of Indias
                        exotic flavours.
                        <br />
                        <br />
                        PistaHouse Irving food is inspired by traditional Indian
                        dishes, served with a modern twist, and we pride
                        ourselves on using the freshest, most seasonal produce.
                        <br />
                        <br />
                        We believe that the best form of hospitality is that
                        found in the home, and it is our aim to bring that
                        welcoming, relaxed environment to our guests at
                        PistaHouse Irving Cuisine.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
