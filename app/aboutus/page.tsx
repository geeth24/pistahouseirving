"use client"

import { useState, useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaUtensils, FaHeart, FaAward, FaArrowRight } from "react-icons/fa"

export default function AboutUs() {
    const [logged, setLogged] = useState(false)

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

    const values = [
        {
            title: "Quality Ingredients",
            description: "We source the freshest, highest quality ingredients to create authentic flavors in every dish.",
            icon: <FaUtensils />
        },
        {
            title: "Cultural Heritage",
            description: "We honor traditional Indian cooking techniques while adding our own contemporary flair.",
            icon: <FaAward />
        },
        {
            title: "Warm Hospitality",
            description: "We treat every customer like family, offering an inviting atmosphere and attentive service.",
            icon: <FaHeart />
        }
    ]

    return (
        <>
            {/* hero */}
            <section className="relative flex min-h-[68vh] w-full items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/building.jpg" alt="Pista House Irving building" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/45" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="container-padding relative z-10 py-20">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
                            Est. in Irving, TX
                        </span>
                        <h1 className="mb-6 mt-6 font-display text-5xl leading-[1.02] text-background md:text-6xl lg:text-7xl">
                            Our story
                        </h1>
                        <p className="text-lg leading-relaxed text-background/85 md:text-xl">
                            Bringing the authentic taste of Hyderabad to Texas, one dish at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* philosophy */}
            <section className="bg-background py-20 md:py-28">
                <div className="container-padding mx-auto">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 font-display text-4xl text-ink md:text-5xl">Our philosophy</h2>
                            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
                                <p>
                                    Pista House Irving is a celebration of Indian culture, flavors and hospitality.
                                    Immerse yourself in a sensory spice experience and awaken your tastebuds with our
                                    modern Indian menu, showcasing the very best of India&apos;s exotic flavors.
                                </p>
                                <p>
                                    Our food is inspired by traditional Indian dishes, served with a modern twist,
                                    and we pride ourselves on using the freshest, most seasonal produce.
                                </p>
                                <p>
                                    We believe the best hospitality is the kind you find in a home, and it is our aim
                                    to bring that welcoming, relaxed environment to our guests.
                                </p>
                            </div>

                            <Link href="/menu" className="group mt-8 inline-flex items-center gap-2 font-medium text-primary-dark transition-colors hover:text-primary">
                                Explore our menu
                                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[500px] overflow-hidden rounded-2xl border border-ink/10">
                                <Image src="/slides/3.jpg" alt="Authentic Indian food" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary-dark p-6 shadow-xl">
                                <p className="font-display text-4xl text-text-inverse">10+</p>
                                <p className="text-sm text-text-inverse/80">Years of excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* values */}
            <section className="bg-background-dark py-20 md:py-28">
                <div className="container-padding mx-auto">
                    <motion.h2
                        className="mb-12 max-w-xl font-display text-4xl text-ink md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What drives us
                    </motion.h2>

                    <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-background-card p-8"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary-dark">
                                    {value.icon}
                                </div>
                                <h3 className="mt-6 font-display text-2xl text-ink">{value.title}</h3>
                                <p className="mt-2 leading-relaxed text-ink-soft">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className="bg-background py-20">
                <div className="container-padding mx-auto">
                    <motion.h2
                        className="mb-10 font-display text-4xl text-ink md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Inside the room
                    </motion.h2>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {["/slides/6.jpg", "/slides/8.jpg", "/slides/10.jpg", "/slides/12.jpg"].map((src, i) => (
                            <motion.div
                                key={i}
                                className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10"
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <Image src={src} alt="Pista House interior" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="container-padding mx-auto pb-24 pt-4">
                <motion.div
                    className="rounded-[2rem] border border-ink/10 bg-background-card px-6 py-16 text-center md:px-12 md:py-20"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="mx-auto max-w-2xl">
                        <h2 className="font-display text-4xl text-ink md:text-5xl">Visit us today</h2>
                        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
                            Experience the authentic taste of India at our restaurant in Irving, Texas. We look forward to serving you and your family.
                        </p>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving" target="_blank" rel="noopener noreferrer" className="primary-button">
                                Find us on the map
                            </a>
                            <Link href="/contactus" className="outline-button">Contact us</Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
