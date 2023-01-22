import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

function Home() {
    return (
        <>
            <section className=" h-screen bg-opacity-10 bg-[url('/slides/1.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-70">
                    <div className="mx-auto grid max-w-screen-xl overflow-hidden px-8 py-24 md:px-16 lg:grid-cols-12 lg:gap-8 lg:py-32">
                        <div className="mr-auto place-self-center lg:col-span-6">
                            <h1 className="mb-4 w-full max-w-4xl text-4xl font-bold  text-green-300 md:text-5xl xl:text-6xl">
                                Authentic Hyderabadi <br />
                                <span className="text-green-500">
                                    {" "}
                                    Food and Catering
                                </span>
                            </h1>
                            <p className="mb-6 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-8 lg:text-lg">
                                We are dedicated to providing you with the
                                finest Indian food and catering. Browse our{" "}
                                <Link href="/menu">
                                    <span className="cursor-pointer text-green-500">
                                        menu
                                    </span>
                                </Link>{" "}
                                and call to order in advance. <br />
                                We are specialized in Live Kebabs, Chat, Dosa
                                and all of your favorite Indian dishes.
                            </p>

                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center rounded-full border border-transparent bg-green-700 px-16 py-2 text-base font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-green-800 active:scale-95 "
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
