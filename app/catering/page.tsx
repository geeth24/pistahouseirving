"use client"

import {
    VeggieAppetizers,
    MeatAppetizers,
    VeggieKebabs,
    MeatKebabs,
    VeggieEntrees,
    MeatEntrees,
    Rice,
    Drinks,
    Desserts,
    IndianSandwich,
    Chat,
} from "@/components/cmenu"
import CaterCard from "@/components/CaterCard"
import { useState, useEffect } from "react"
import { animateScroll, Link as ReactScrollLink } from "react-scroll"
import type { ReactNode } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaUsers, FaUtensils, FaCalendarAlt, FaArrowRight, FaCheck } from "react-icons/fa"
import Link from "next/link"

function ScrollLink({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return <span {...props}>{children}</span>
    }
    
    const LinkComponent = ReactScrollLink as any
    return <LinkComponent {...props}>{children}</LinkComponent>
}

const menuCategories = [
    { id: "VeggieAppetizers", name: "Veggie Appetizers", isVeg: true },
    { id: "MeatAppetizers", name: "Meat Appetizers", isVeg: false },
    { id: "IndianSandwiches", name: "Indian Sandwiches", isVeg: true },
    { id: "VeggieKebabs", name: "Veggie Kebabs", isVeg: true },
    { id: "MeatKebabs", name: "Meat Kebabs", isVeg: false },
    { id: "VeggieEntrees", name: "Veggie Entrees", isVeg: true },
    { id: "MeatEntrees", name: "Meat Entrees", isVeg: false },
    { id: "Chats", name: "Chats", isVeg: true },
    { id: "Rice", name: "Rice", isVeg: true },
    { id: "Drinks", name: "Drinks", isVeg: true },
    { id: "Desserts", name: "Desserts", isVeg: true },
]

const images = [
    { src: "/slides/1.jpg", alt: "Food Table Setup" },
    { src: "/slides/2.jpg", alt: "Fruit Table Setup" },
    { src: "/slides/3.jpg", alt: "Biryani Display" },
    { src: "/slides/5.jpg", alt: "Kebab Station" },
    { src: "/slides/6.jpg", alt: "Dessert Table" },
    { src: "/slides/8.jpg", alt: "Event Setup" },
]

const cateringFeatures = [
    {
        icon: <FaUsers />,
        title: "Any Event Size",
        description: "From intimate gatherings of 20 to grand celebrations of 500+"
    },
    {
        icon: <FaUtensils />,
        title: "Custom Menus",
        description: "Tailored menu options to match your preferences and budget"
    },
    {
        icon: <FaCalendarAlt />,
        title: "Flexible Scheduling",
        description: "Available for breakfast, lunch, dinner, and late-night events"
    }
]

export default function Catering() {
    const [logged, setLogged] = useState(false)
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

    useEffect(() => {
        const handleScroll = () => {
            let currentCategory = menuCategories[0].id
            
            menuCategories.forEach(({ id }) => {
                const element = document.getElementById(id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 300) {
                        currentCategory = id
                    }
                }
            })
            
            setActiveCategory(currentCategory)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production" && !logged) {
            logEvent(analytics, "page_view", {
                page_title: "Catering",
                page_location: "https://www.pistahouseirving.com/catering",
                page_path: "/catering",
            })
            setLogged(true)
        } else if (!logged) {
            console.log("development")
            setLogged(true)
        }
    }, [logged])

    const scrollToMenuSection = () => {
        animateScroll.scrollTo(document.getElementById('menu')?.offsetTop || 0)
    }

    return (
        <>
            {/* hero */}
            <section className="relative flex min-h-[82vh] w-full items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/slides/1.jpg" alt="Catering service" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="container-padding relative z-10 py-20">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
                                Professional catering
                            </span>
                            <h1 className="mb-6 mt-6 font-display text-5xl leading-[1.02] text-background md:text-6xl lg:text-7xl">
                                Unforgettable events start here
                            </h1>
                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-background/80">
                                From weddings to corporate gatherings, our authentic Hyderabadi cuisine turns any occasion into a celebration.
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button onClick={scrollToMenuSection} className="primary-button group">
                                    View catering menu
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </button>
                                <a href="tel:9726355657" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 font-medium text-background backdrop-blur-sm transition-colors hover:bg-white/10">
                                    <FaPhone className="text-sm" />
                                    Get a quote
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hidden grid-cols-2 gap-4 lg:grid"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="space-y-4">
                                <div className="relative h-48 overflow-hidden rounded-2xl"><Image src="/slides/3.jpg" alt="Biryani" fill className="object-cover" sizes="25vw" /></div>
                                <div className="relative h-64 overflow-hidden rounded-2xl"><Image src="/slides/5.jpg" alt="Kebabs" fill className="object-cover" sizes="25vw" /></div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 overflow-hidden rounded-2xl"><Image src="/slides/8.jpg" alt="Event setup" fill className="object-cover" sizes="25vw" /></div>
                                <div className="relative h-48 overflow-hidden rounded-2xl"><Image src="/slides/6.jpg" alt="Desserts" fill className="object-cover" sizes="25vw" /></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* features */}
            <section className="bg-background py-16">
                <div className="container-padding mx-auto">
                    <div className="grid gap-5 md:grid-cols-3">
                        {cateringFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="rounded-2xl border border-ink/10 bg-background-card p-7 transition-colors duration-300 hover:border-primary/25"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary-dark">
                                    {feature.icon}
                                </div>
                                <h3 className="mt-5 font-display text-2xl text-ink">{feature.title}</h3>
                                <p className="mt-2 text-ink-soft">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className="bg-background-dark py-20">
                <div className="container-padding mx-auto">
                    <motion.h2
                        className="mb-12 font-display text-4xl text-ink md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Recent celebrations
                    </motion.h2>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {images.map((image, i) => (
                            <motion.div
                                key={i}
                                className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10"
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="font-medium text-background">{image.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* menu nav */}
            <div className="sticky top-[72px] z-30 w-full border-b border-ink/10 bg-background/90 shadow-[0_8px_30px_rgba(29,27,22,0.05)] backdrop-blur-md">
                <div className="container-padding mx-auto overflow-x-auto py-4">
                    <div className="flex space-x-2">
                        {menuCategories.map((category) => (
                            <ScrollLink
                                key={category.id}
                                to={category.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-180}
                                className={`cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                                    activeCategory === category.id
                                        ? "border border-primary/30 bg-primary/12 text-primary-dark"
                                        : "text-ink-soft hover:bg-primary/5 hover:text-ink"
                                }`}
                            >
                                {category.name}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* menu */}
            <section id="menu" className="bg-background py-20">
                <div className="container-padding mx-auto">
                    <motion.div
                        className="mb-16 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-4 font-display text-4xl text-ink md:text-5xl">Build your catering menu</h2>
                        <p className="text-ink-soft">
                            Tap any dish to add it to your selection, then request a quote over WhatsApp. Authentic Hyderabadi trays for any occasion.
                        </p>
                    </motion.div>

                    {menuCategories.map((category) => {
                        const id = category.id
                        let items: any[] = []
                        
                        switch(id) {
                            case "VeggieAppetizers": items = VeggieAppetizers; break
                            case "MeatAppetizers": items = MeatAppetizers; break
                            case "IndianSandwiches": items = IndianSandwich; break
                            case "VeggieKebabs": items = VeggieKebabs; break
                            case "MeatKebabs": items = MeatKebabs; break
                            case "VeggieEntrees": items = VeggieEntrees; break
                            case "MeatEntrees": items = MeatEntrees; break
                            case "Chats": items = Chat; break
                            case "Rice": items = Rice; break
                            case "Drinks": items = Drinks; break
                            case "Desserts": items = Desserts; break
                            default: items = []
                        }
                        
                        return (
                            <motion.div 
                                key={id} 
                                id={id}
                                className="mb-16 scroll-mt-48"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="mb-8 flex items-center gap-4">
                                    <h3 className="font-display text-3xl text-ink md:text-4xl">{category.name}</h3>
                                    <div className="h-px flex-1 bg-ink/10" />
                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                        category.isVeg
                                            ? "border border-green-700/30 bg-green-700/10 text-green-800"
                                            : "border border-red-700/30 bg-red-700/10 text-red-800"
                                    }`}>
                                        {category.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {items.map((item, index) => (
                                        <CaterCard
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            price={item.price}
                                            isVeg={category.isVeg}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* cta */}
            <section className="container-padding mx-auto pb-24 pt-4">
                <motion.div
                    className="relative overflow-hidden rounded-[2rem] bg-primary-dark px-6 py-16 md:px-12 md:py-20"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/cater.jpeg" alt="" fill className="object-cover" sizes="100vw" />
                        <div className="absolute inset-0 bg-primary-dark/70" />
                    </div>
                    <div className="relative mx-auto max-w-3xl text-center">
                        <h2 className="font-display text-4xl text-text-inverse md:text-5xl">Ready to plan your event?</h2>
                        <p className="mx-auto mt-5 max-w-xl text-lg text-text-inverse/85">
                            Tell us about your occasion and we&rsquo;ll build a menu that fits it perfectly.
                        </p>

                        <div className="mx-auto mt-9 grid max-w-xl gap-4 text-left sm:grid-cols-2">
                            {[
                                "Customized menu planning",
                                "Professional setup & service",
                                "Flexible pricing options",
                                "Delivery & pickup available",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-text-inverse/90">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                                        <FaCheck className="text-xs" />
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a href="tel:9726355657" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3 font-medium text-primary-dark transition-transform duration-200 hover:bg-background-card active:scale-[0.97]">
                                <FaPhone className="text-sm" /> (972) 635-5657
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
