import React from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "../../components/Firebase"
import Head from "next/head"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

function ContactUs() {
    const [logged, setLogged] = React.useState(false)

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "Contact Us",
                page_location: "https://www.pistahouseirving.com/contactus",
                page_path: "/contactus",
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
        <>
            <Head>
                <title>Contact Us | Pista House Irving</title>
            </Head>
            <div className="">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                            aria-hidden="true"
                        >
                            <circle
                                cx={512}
                                cy={512}
                                r={512}
                                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"
                            />
                            <defs>
                                <radialGradient
                                    id="759c1415-0410-454c-8f7c-9a820de03641"
                                    cx={0}
                                    cy={0}
                                    r={1}
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                                >
                                    <stop stopColor="#beeca0" />
                                    <stop
                                        offset={1}
                                        stopColor="#10c60f"
                                        stopOpacity={0}
                                    />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
                            <h2 className="text-3xl font-bold tracking-tight text-pistaLightGreen sm:text-4xl">
                                Contact us
                                <br />
                                via WhatsApp
                                <br />
                                <span className="text-xl text-pistaGreen">
                                    Or walk into our restaurant
                                </span>
                            </h2>

                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    href="https://api.whatsapp.com/send?phone=16823800209"
                                    className="mr-3 rounded-full bg-pistaLightGray px-5 py-2.5 text-center text-sm font-medium text-pistaLightGreen shadow md:mr-0"
                                >
                                    <div className="flex items-center gap-x-2">
                                        <FaWhatsapp /> WhatsApp
                                    </div>
                                </Link>
                                <Link
                                    href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving"
                                    className="text-base font-semibold leading-7 text-pistaLightGreen"
                                >
                                    901 W Royal Ln, Irving, TX 75039.{" "}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="/slides/1.jpg"
                                alt="App screenshot"
                                width={1824}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
