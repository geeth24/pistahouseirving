import React, { useState, useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa"

function ContactUs() {
    const [logged, setLogged] = useState(false)

    // Handle analytics
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

    return (
        <>
            <Head>
                <title>Contact Us | Pista House Irving</title>
                <meta
                    name="description"
                    content="Contact Pista House Irving for authentic Indian cuisine. Visit our restaurant or reach out via phone, WhatsApp, or email."
                />
            </Head>

            {/* Hero Section */}
            <section className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/slides/1.jpg"
                        alt="Contact Pista House Irving"
                        fill
                        className="object-cover brightness-[0.3]"
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
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-text-light md:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We&apos;d love to hear from you
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="section-padding bg-background">
                <div className="container-padding">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                        {/* Contact Information */}
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8 text-4xl font-bold text-primary">
                                Get In Touch
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full text-primary">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-xl font-semibold text-primary-light">
                                            Visit Us
                                        </h3>
                                        <p className="text-text-light">
                                            901 W Royal Ln, Irving, TX 75039
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving+Texas"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-block text-sm text-primary hover:underline"
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full text-primary">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-xl font-semibold text-primary-light">
                                            Call Us
                                        </h3>
                                        <p className="text-text-light">
                                            +1 (972) 635-5657
                                        </p>
                                        <a
                                            href="tel:9726355657"
                                            className="mt-1 inline-block text-sm text-primary hover:underline"
                                        >
                                            Call Now →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full text-primary">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-xl font-semibold text-primary-light">
                                            WhatsApp
                                        </h3>
                                        <p className="text-text-light">
                                            +1 (972) 635-5657
                                        </p>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=19726355657"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-block text-sm text-primary hover:underline"
                                        >
                                            Message Us →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full text-primary">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-xl font-semibold text-primary-light">
                                            Email
                                        </h3>
                                        <p className="text-text-light">
                                            info@pistahouseirving.com
                                        </p>
                                        <a
                                            href="mailto:info@pistahouseirving.com"
                                            className="mt-1 inline-block text-sm text-primary hover:underline"
                                        >
                                            Send Email →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full text-primary">
                                        <FaClock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-xl font-semibold text-primary-light">
                                            Hours
                                        </h3>
                                        <p className="text-text-light">
                                            Monday - Sunday: 11:00 AM - 10:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold text-primary-light">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    <Link
                                        href="https://www.instagram.com/pistahousedallas/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <FaInstagram size={20} />
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/pistahouseirving/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <FaFacebook size={20} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            className="h-[500px] overflow-hidden rounded-2xl shadow-xl"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
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

            {/* Quick Contact Section */}
            <section className="section-padding from-primary-dark/20 bg-gradient-to-br to-background-dark">
                <div className="container-padding">
                    <div className="mx-auto max-w-4xl rounded-2xl bg-background-card p-8 shadow-xl">
                        <h2 className="mb-6 text-center text-3xl font-bold text-primary">
                            Quick Contact
                        </h2>
                        <p className="mb-8 text-center text-lg text-text-light">
                            For fastest response, contact us via WhatsApp or
                            give us a call
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                            <a
                                href="https://api.whatsapp.com/send?phone=19726355657"
                                className="primary-button flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className="mr-2 h-5 w-5" />
                                WhatsApp
                            </a>
                            <a
                                href="tel:9726355657"
                                className="outline-button flex items-center"
                            >
                                <FaPhone className="mr-2 h-5 w-5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
