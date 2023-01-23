import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

function Home() {
    return (
        <>
            <section className=" h-screen bg-opacity-10 bg-[url('/slides/1.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-70">
                    <div className="mx-auto grid max-w-screen-2xl overflow-hidden px-8 py-24 md:px-16 lg:grid-cols-12 lg:gap-8 lg:py-32">
                        <div className="mr-auto place-self-center lg:col-span-6">
                            <span className="relative w-full max-w-4xl after:overflow-hidden text-4xl font-bold text-pistaLightGreen after:absolute after:bottom-1 after:left-0 after:z-0 after:h-5 after:w-full after:bg-[#beeca03e] after:content-[''] md:text-5xl xl:text-6xl">
                                Authentic Hyderabadi <br />
                            </span>
                            <h2 className="mb-6 w-full max-w-4xl text-4xl font-bold text-green-500 md:text-5xl xl:text-6xl">
                                {" "}
                                Food and Catering
                            </h2>
                            <p className="mb-6 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-8 lg:text-lg">
                                We are dedicated to providing you with the
                                finest Indian food and catering. Browse our{" "}
                                <Link href="/menu">
                                    <span className="cursor-pointer text-pistaLightGreen underline">
                                        menu
                                    </span>
                                </Link>{" "}
                                and call to order in advance. <br />
                                We are specialized in Live Kebabs, Chat, Dosa
                                and all of your favorite Indian dishes.
                            </p>

                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center rounded-full border border-transparent bg-pistaGreen px-16 py-2 text-base font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-pistaGreen active:scale-95 "
                            >
                                Menu
                            </Link>
                        </div>
                        <div className=" lg:col-span-6 lg:mt-0 lg:flex">
                            <div className="flex h-fit w-fit flex-col justify-center">
                                <motion.video
                                    // @ts-ignore
                                    alt="Catering"
                                    w={"100%"}
                                    h={"100%"}
                                    src="https://photos.smugmug.com/photos/i-7h6J4v9/0/640/i-7h6J4v9-640.mp4"
                                    autoPlay={true}
                                    loop={true}
                                    muted={true}
                                    playsInline={true}
                                    type={"video/mp4"}
                                    className="mt-5 h-full w-full rounded-lg object-cover shadow-2xl lg:mt-0"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
