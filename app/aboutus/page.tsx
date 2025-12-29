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
            <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/building.jpg" 
                        alt="Pista House Irving Building" 
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
                            Est. in Irving, TX
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Our <span className="text-primary">Story</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            Bringing the authentic taste of Hyderabad to Texas, one dish at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* philosophy */}
            <section className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-medium mb-2 block">Who We Are</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Philosophy</h2>
                            <div className="space-y-4 text-text-light text-lg leading-relaxed">
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
                                    We believe that the best form of hospitality is that found in the home, 
                                    and it is our aim to bring that welcoming, relaxed environment to our 
                                    guests at Pista House Irving.
                                </p>
                            </div>
                            
                            <Link 
                                href="/menu" 
                                className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
                            >
                                Explore Our Menu
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[500px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/slides/3.jpg"
                                    alt="Authentic Indian Food"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl">
                                <p className="text-white text-4xl font-bold">10+</p>
                                <p className="text-white/80 text-sm">Years of Excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* values */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>
                
                <div className="container-padding mx-auto relative">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">What Drives Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div 
                                key={index}
                                className="group bg-background-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-text-light leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">Inside Pista House</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Our Space</h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["/slides/6.jpg", "/slides/8.jpg", "/slides/10.jpg", "/slides/12.jpg"].map((src, i) => (
                            <motion.div
                                key={i}
                                className="relative aspect-square rounded-2xl overflow-hidden group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Image src={src} alt="Restaurant" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background-dark" />
                
                <div className="container-padding mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Visit Us Today
                            </h2>
                            <p className="text-text-light text-lg mb-8 max-w-xl mx-auto">
                                Experience the authentic taste of India at our restaurant in Irving, Texas. 
                                We look forward to serving you and your family.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    Find Us on Map
                                </a>
                                <Link 
                                    href="/contactus" 
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
