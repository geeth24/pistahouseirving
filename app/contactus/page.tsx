"use client"

import { useState, useEffect } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
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
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            info: "+1 (972) 635-5657",
            action: "Message Us",
            href: "https://api.whatsapp.com/send?phone=19726355657",
            external: true
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
            <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/slides/1.jpg"
                        alt="Contact Pista House Irving"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
                </div>
                
                <div className="container-padding relative z-10 py-20">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-medium">
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            We&apos;d love to hear from you. Reach out for reservations, catering inquiries, or just to say hello.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* contact cards */}
            <section className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={method.external ? "_blank" : undefined}
                                rel={method.external ? "noopener noreferrer" : undefined}
                                className="group bg-background-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                                <p className="text-text-light mb-3">{method.info}</p>
                                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                                    {method.action}
                                    <FaArrowRight className="text-xs" />
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                Visit Our Restaurant
                            </h2>

                            {/* hours */}
                            <div className="bg-background-card rounded-2xl p-6 border border-white/5 mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <FaClock className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Opening Hours</h3>
                                        <p className="text-text-light">Open 7 days a week</p>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <div className="flex justify-between py-2 border-b border-white/5">
                                        <span className="text-text-light">Every Day</span>
                                        <span className="text-white font-medium">11:00 AM - 2:00 AM</span>
                                    </div>
                                </div>
                            </div>

                            {/* social */}
                            <div className="bg-background-card rounded-2xl p-6 border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <Link
                                        href="https://www.instagram.com/pistahousedallas/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-text-light hover:text-white transition-all duration-300"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/pistahouseirving/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-text-light hover:text-white transition-all duration-300"
                                    >
                                        <FaFacebook className="text-xl" />
                                    </Link>
                                    <Link
                                        href="https://www.yelp.com/biz/pista-house-irving"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 hover:bg-[#ff1a1a] rounded-xl flex items-center justify-center text-text-light hover:text-white transition-all duration-300"
                                    >
                                        <FaYelp className="text-xl" />
                                    </Link>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=19726355657"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 hover:bg-green-600 rounded-xl flex items-center justify-center text-text-light hover:text-white transition-all duration-300"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* map */}
                        <motion.div
                            className="h-[500px] overflow-hidden rounded-2xl border border-white/10"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
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
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
                
                <div className="container-padding mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Quick Contact
                            </h2>
                            <p className="text-white/90 text-lg mb-8">
                                For fastest response, contact us via WhatsApp or give us a call
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://api.whatsapp.com/send?phone=19726355657"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    WhatsApp
                                </a>
                                <a
                                    href="tel:9726355657"
                                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <FaPhone />
                                    Call Now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
