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
import { useState, useEffect, Suspense } from "react"
import { animateScroll, Link as ReactScrollLink } from "react-scroll"
import type { ReactNode } from "react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import { useSearchParams } from "next/navigation"
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

function OrderHandler() {
    const searchParams = useSearchParams()
    const order = searchParams.get('order')

    useEffect(() => {
        if (order === "true") {
            if (window.innerWidth <= 600) {
                animateScroll.scrollTo(900)
            } else {
                animateScroll.scrollTo(1200)
            }
        }
    }, [order])

    return null
}

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
            <Suspense fallback={null}>
                <OrderHandler />
            </Suspense>
            {/* hero */}
            <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/slides/1.jpg" 
                        alt="Catering Service" 
                        fill 
                        className="object-cover" 
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
                </div>
                
                <div className="container-padding relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-medium">
                                Professional Catering
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Unforgettable <span className="text-primary">Events</span> Start Here
                            </h1>
                            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                                From weddings to corporate gatherings, our authentic Hyderabadi cuisine transforms any event into a culinary celebration. Let us bring the flavors of India to your special occasion.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={scrollToMenuSection}
                                    className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    View Catering Menu
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a 
                                    href="tel:9726355657"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300"
                                >
                                    <FaPhone />
                                    Get a Quote
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hidden lg:grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image src="/slides/3.jpg" alt="Biryani" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden">
                                    <Image src="/slides/5.jpg" alt="Kebabs" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 rounded-2xl overflow-hidden">
                                    <Image src="/slides/8.jpg" alt="Event Setup" fill className="object-cover" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image src="/slides/6.jpg" alt="Desserts" fill className="object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* features */}
            <section className="py-16 bg-background-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                <div className="container-padding mx-auto relative">
                    <div className="grid md:grid-cols-3 gap-6">
                        {cateringFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-background-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-text-light">{feature.description}</p>
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
                        <span className="text-primary font-medium mb-2 block">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering Gallery</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, i) => (
                            <motion.div 
                                key={i} 
                                className="group relative aspect-square overflow-hidden rounded-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-semibold">{image.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* menu nav */}
            <div className="sticky top-20 z-30 w-full bg-background-dark/95 shadow-lg backdrop-blur-md border-b border-white/5">
                <div className="container-padding mx-auto py-4 overflow-x-auto">
                    <div className="flex space-x-4">
                        {menuCategories.map((category) => (
                            <ScrollLink
                                key={category.id}
                                to={category.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-180}
                                className={`whitespace-nowrap cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    activeCategory === category.id 
                                        ? "bg-primary/20 text-primary border border-primary/30" 
                                        : "text-text-light hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {category.name}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* menu */}
            <section id="menu" className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering Menu</h2>
                        <p className="mx-auto max-w-2xl text-text-light">
                            Browse our extensive catering menu featuring authentic Hyderabadi dishes perfect for any occasion
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
                                <div className="flex items-center gap-4 mb-8">
                                    <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        category.isVeg 
                                            ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                                            : "bg-red-600/20 text-red-400 border border-red-600/30"
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
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/cater.jpeg" alt="Catering" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
                </div>
                
                <div className="container-padding mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Plan Your Event?
                            </h2>
                            <p className="text-white/90 text-lg mb-8">
                                Contact us today to discuss your catering needs. Our team will work with you to create a customized menu that fits your event perfectly.
                            </p>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {[
                                        "Customized menu planning",
                                        "Professional setup & service",
                                        "Flexible pricing options",
                                        "Delivery & pickup available"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                <FaCheck className="text-xs" />
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a 
                                        href="tel:9726355657" 
                                        className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                                    >
                                        <FaPhone />
                                        (972) 635-5657
                                    </a>
                                    <a 
                                        href="mailto:info@pistahouseirving.com" 
                                        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <FaEnvelope />
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
