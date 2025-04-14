import React, { useState, useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"

function AboutUs() {
    const [logged, setLogged] = useState(false)

    // Handle analytics
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production" && !logged) {
            logEvent(analytics, "page_view", {
                page_title: "About Us",
                page_location: "https://www.pistahouseirving.com/aboutus",
                page_path: "/aboutus",
            })
            setLogged(true)
        } else if (!logged) {
            console.log("development")
            setLogged(true)
        }
    }, [logged])

    return (
        <>
            <Head>
                <title>About Us | Pista House Irving</title>
                <meta name="description" content="Learn about Pista House Irving - A celebration of Indian culture, flavors and hospitality with modern Indian cuisine using the freshest ingredients." />
            </Head>
            
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/building.jpg" 
                        alt="Pista House Irving Building" 
                        fill 
                        className="object-cover brightness-[0.4]" 
                        priority
                    />
                </div>
                <div className="container-padding relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <motion.h1 
                        className="text-6xl font-black text-primary md:text-7xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Story
                    </motion.h1>
                    <motion.p 
                        className="mt-4 max-w-2xl text-xl text-text-light md:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Authentic Indian cuisine with a modern twist
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-background">
                <div className="container-padding">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                        <motion.div 
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 text-4xl font-bold text-primary">Our Philosophy</h2>
                            <div className="space-y-4 text-lg text-text-light">
                                <p>
                                    Pista House Irving is a celebration of Indian culture, flavors and hospitality. 
                                    Immerse yourself in a sensory spice experience and awaken your tastebuds with our 
                                    modern Indian menu, showcasing the very best of India's exotic flavors.
                                </p>
                                <p>
                                    Our food is inspired by traditional Indian dishes, served with a modern twist, 
                                    and we pride ourselves on using the freshest, most seasonal produce.
                                </p>
                                <p>
                                    We believe that the best form of hospitality is that found in the home, 
                                    and it is our aim to bring that welcoming, relaxed environment to our 
                                    guests at Pista House Irving.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl lg:h-auto"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/slides/3.jpg"
                                alt="Authentic Indian Food"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-background-dark">
                <div className="container-padding">
                    <motion.h2 
                        className="mb-16 text-center text-4xl font-bold text-primary"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Our Values
                    </motion.h2>
                    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Quality Ingredients",
                                description: "We source the freshest, highest quality ingredients to create authentic flavors in every dish.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                )
                            },
                            {
                                title: "Cultural Heritage",
                                description: "We honor traditional Indian cooking techniques while adding our own contemporary flair.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                )
                            },
                            {
                                title: "Warm Hospitality",
                                description: "We treat every customer like family, offering an inviting atmosphere and attentive service.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            }
                        ].map((value, index) => (
                            <motion.div 
                                key={index}
                                className="flex flex-col items-center rounded-xl bg-background-card p-8 text-center shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {value.icon}
                                <h3 className="mt-6 mb-3 text-2xl font-bold text-primary-light">{value.title}</h3>
                                <p className="text-text-light">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visit Us Section */}
            <section className="section-padding bg-gradient-to-br from-primary-dark/20 to-background-dark">
                <div className="container-padding">
                    <div className="mx-auto max-w-4xl rounded-2xl bg-background-card p-8 shadow-xl">
                        <h2 className="mb-6 text-center text-3xl font-bold text-primary">Visit Us Today</h2>
                        <p className="mb-8 text-center text-lg text-text-light">
                            Experience the authentic taste of India at our restaurant in Irving, Texas. 
                            We look forward to serving you and your family.
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                            <a href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving" className="primary-button flex items-center" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                Find Us on Map
                            </a>
                            <a href="/contactus" className="outline-button flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
