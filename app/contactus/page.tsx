"use client"

import { useState, useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebook,
    FaArrowRight,
    FaYelp,
} from "react-icons/fa"

export default function ContactUs() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production" && !logged) {
            logEvent(analytics, "page_view", {
                page_title: "Contact Us",
                page_location: "https://www.pistahouseirving.com/contactus",
                page_path: "/contactus",
            })
            setLogged(true)
        } else if (!logged) {
            console.log("development")
            setLogged(true)
        }
    }, [logged])

    const contactMethods = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            info: "901 W Royal Ln, Irving, TX 75039",
            action: "Get Directions",
            href: "https://www.google.com/maps/search/?api=1&query=Pista+House+Irving+Texas",
            external: true
        },
        {
            icon: <FaPhone />,
            title: "Call Us",
            info: "+1 (972) 635-5657",
            action: "Call Now",
            href: "tel:9726355657",
            external: false
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            info: "info@pistahouseirving.com",
            action: "Send Email",
            href: "mailto:info@pistahouseirving.com",
            external: false
        }
    ]

    return (
        <>
            {/* hero */}
            <section className="relative flex min-h-[58vh] w-full items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/slides/1.jpg" alt="Contact Pista House Irving" fill className="object-cover" priority />
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
                            Get in touch
                        </span>
                        <h1 className="mb-6 mt-6 font-display text-5xl leading-[1.02] text-background md:text-6xl lg:text-7xl">
                            Contact us
                        </h1>
                        <p className="text-lg leading-relaxed text-background/85 md:text-xl">
                            We&apos;d love to hear from you. Reach out for reservations, catering inquiries, or just to say hello.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* contact cards */}
            <section className="bg-background py-20">
                <div className="container-padding mx-auto">
                    <div className="mb-16 grid gap-5 sm:grid-cols-3">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={method.external ? "_blank" : undefined}
                                rel={method.external ? "noopener noreferrer" : undefined}
                                className="group rounded-2xl border border-ink/10 bg-background-card p-6 transition-colors duration-300 hover:border-primary/30"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary-dark transition-transform duration-300 group-hover:scale-105">
                                    {method.icon}
                                </div>
                                <h3 className="mt-4 font-display text-xl text-ink">{method.title}</h3>
                                <p className="mt-1 text-ink-soft">{method.info}</p>
                                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary-dark transition-all group-hover:gap-3">
                                    {method.action}
                                    <FaArrowRight className="text-xs" />
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="grid items-start gap-12 lg:grid-cols-2">
                        {/* info */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8 font-display text-4xl text-ink">Visit our restaurant</h2>

                            {/* hours */}
                            <div className="mb-6 rounded-2xl border border-ink/10 bg-background-card p-6">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <FaClock className="text-xl text-primary-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-ink">Opening hours</h3>
                                        <p className="text-ink-soft">Open 7 days a week</p>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <div className="flex justify-between border-b border-ink/10 py-2">
                                        <span className="text-ink-soft">Every day</span>
                                        <span className="font-medium text-ink">11:00 AM &ndash; 2:00 AM</span>
                                    </div>
                                </div>
                            </div>

                            {/* social */}
                            <div className="rounded-2xl border border-ink/10 bg-background-card p-6">
                                <h3 className="mb-4 font-display text-xl text-ink">Follow us</h3>
                                <div className="flex gap-4">
                                    <Link
                                        href="https://www.instagram.com/pistahousedallas/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-ink-soft transition-colors duration-300 hover:bg-primary hover:text-text-inverse"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/pistahouseirving/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-ink-soft transition-colors duration-300 hover:bg-primary hover:text-text-inverse"
                                    >
                                        <FaFacebook className="text-xl" />
                                    </Link>
                                    <Link
                                        href="https://www.yelp.com/biz/pista-house-irving"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Yelp"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-ink-soft transition-colors duration-300 hover:bg-[#d32323] hover:text-white"
                                    >
                                        <FaYelp className="text-xl" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* map */}
                        <motion.div
                            className="h-[500px] overflow-hidden rounded-2xl border border-ink/10"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                        >
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Pista%20House%20Irving)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pista House Irving Location"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="container-padding mx-auto pb-24 pt-4">
                <motion.div
                    className="rounded-[2rem] bg-primary-dark px-6 py-16 text-center md:px-12 md:py-20"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="mx-auto max-w-2xl">
                        <h2 className="font-display text-4xl text-text-inverse md:text-5xl">Quick contact</h2>
                        <p className="mx-auto mt-5 max-w-xl text-lg text-text-inverse/85">
                            For the fastest response, give us a call or send an email.
                        </p>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a href="tel:9726355657" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3 font-medium text-primary-dark transition-transform duration-200 hover:bg-background-card active:scale-[0.97]">
                                <FaPhone className="text-sm" /> Call now
                            </a>
                            <a href="mailto:info@pistahouseirving.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-text-inverse/40 px-7 py-3 font-medium text-text-inverse transition-colors hover:bg-white/10">
                                <FaEnvelope className="text-sm" /> Email us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
