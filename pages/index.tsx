import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import { analytics } from "@/components/Firebase"
import { logEvent } from "firebase/analytics"
import Head from "next/head"
import Image from "next/image"

function Home() {
    //spring
    const [logged, setLogged] = React.useState(false)

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "Home",
                page_location: "https://www.pistahouseirving.com/",
                page_path: "/",
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
                <title>Home | Pista House Irving</title>
                <meta property="og:title" content="Pista House Irving" />
            </Head>
            <section className="h-fit bg-opacity-10  bg-[url('/Biryani.jpeg')] bg-cover bg-center bg-no-repeat md:h-screen">
                <div className="h-fit w-full  bg-[url('/back.svg')] bg-cover bg-center bg-no-repeat md:h-screen">
                    <motion.video
                        // @ts-ignore
                        alt="Catering"
                        w={"100%"}
                        h={"100%"}
                        src="https://photos.smugmug.com/photos/i-7h6J4v9/0/1080/i-7h6J4v9-1080.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        type={"video/mp4"}
                        className="absolute h-fit w-full  rounded-lg object-cover shadow-2xl md:h-screen lg:mt-0"
                        // initial={{ opacity: 0, x: 100 }}
                        // animate={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 1 }}
                    />
                    <div className="relative mx-auto flex h-screen flex-col items-center justify-center bg-black bg-opacity-80">
                        <div className="flex max-w-screen-2xl flex-col space-x-6 overflow-hidden px-8 py-24 md:flex-row">
                            <div className="">
                                <div className="mb-6 flex flex-row items-start justify-start">
                                    <div className="flex h-fit w-fit flex-col justify-center"></div>
                                </div>
                                <div className="flex flex-row items-start justify-start">
                                    <div className="mb-4 h-0.5 w-[75%] rounded bg-gradient-to-tr from-pistaLightGreen to-transparent" />
                                </div>
                                <h1 className="mb-4 text-left text-5xl font-thin tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
                                    Indulge in{" "}
                                    <span className="bg-gradient-to-r from-pistaLightGreen to-pistaGreen bg-clip-text font-bold text-transparent">
                                        Authentic Hyderabadi <br />
                                    </span>{" "}
                                    Cuisine at Pista House Irving
                                </h1>
                                <div className="flex flex-row items-end justify-end">
                                    <div className="mb-4 h-0.5 w-[65%] rounded bg-gradient-to-tr from-transparent to-pistaLightGreen" />
                                </div>{" "}
                                <div className="flex flex-row items-end justify-end">
                                    <p className="mb-6 w-[65%] font-light text-white/70 md:text-lg lg:mb-8 lg:text-lg">
                                        Embark on an Epicurean Adventure with
                                        Us: Experience the Finest Indian Cuisine
                                        and Unforgettable Catering Services.
                                        Explore our Exquisite Menu, Overflowing
                                        with Live Kebabs, Flavorful Chats,
                                        Irresistible Dosas, and All Your Beloved
                                        Indian Delicacies. Indulge your Senses
                                        and Call in Advance to Savor the
                                        Authentic Flavors of India, Crafted with
                                        Passion and Expertise.
                                    </p>
                                </div>{" "}
                                <div className="flex flex-row items-end justify-end">
                                    <Link
                                        href="/menu"
                                        className="inline-flex w-[65%] items-center justify-center rounded-full border border-transparent bg-pistaLightGreen px-16 py-2 text-base font-medium text-black shadow-sm transition-all duration-300 ease-in-out hover:border-[1px] hover:border-pistaLightGreen hover:bg-transparent hover:text-pistaLightGreen active:scale-95 "
                                    >
                                        Menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
