"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { analytics } from "@/components/Firebase"
import { logEvent } from "firebase/analytics"
import Image from "next/image"
import { FaUtensils, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt, FaStar, FaQuoteLeft, FaArrowRight, FaPhone, FaYelp } from "react-icons/fa"

export default function Home() {
    const [logged, setLogged] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    const heroSlides = [
        { image: "/slides/1.jpg", alt: "Delicious Biryani" },
        { image: "/slides/3.jpg", alt: "Fresh Kebabs" },
        { image: "/slides/5.jpg", alt: "Indian Cuisine" },
    ]

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
            if (!logged) {
                logEvent(analytics, "page_view", {
                    page_title: "Home",
                    page_location: "https://www.pistahouseirving.com/",
                    page_path: "/",
                })
                setLogged(true)
            }
        } else {
            if (!logged) {
                console.log("development")
                setLogged(true)
            }
        }
    }, [logged])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [heroSlides.length])

    const features = [
        {
            icon: <FaUtensils className="text-3xl" />,
            title: "Authentic Recipes",
            description: "Traditional Hyderabadi flavors passed down through generations"
        },
        {
            icon: <FaCalendarAlt className="text-3xl" />,
            title: "Event Catering",
            description: "From intimate gatherings to grand celebrations"
        },
        {
            icon: <FaUserFriends className="text-3xl" />,
            title: "Family Dining",
            description: "Warm ambiance perfect for memorable meals"
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: "Prime Location",
            description: "Easy access in Irving with ample parking"
        }
    ]

    const testimonials = [
        {
            name: "Sandeep G.",
            image: "/reviewer1.png",
            rating: 5,
            text: "The Chicken Dum Biryani here is hands down the best in the DFW area. Reminds me exactly of Hyderabad!"
        },
        {
            name: "Anjali K.",
            image: "/reviewer2.png",
            rating: 5,
            text: "Love their late-night service. We came in at 1 AM and the Haleem was fresh and delicious. Highly recommend!"
        },
        {
            name: "Rahul M.",
            image: "/reviewer3.png",
            rating: 5,
            text: "Authentic Irani Chai and Osmania cookies. It's my go-to spot for an evening snack and some great kebabs."
        }
    ]

    const popularDishes = [
        {
            name: "Hyderabadi Dum Biryani",
            image: "/Biryani.jpeg",
            description: "Slow-cooked aromatic rice layered with tender meat and exotic spices",
            tag: "Signature"
        },
        {
            name: "Seekh Kebabs",
            image: "/Kebabs.jpeg",
            description: "Succulent minced meat skewers grilled to perfection",
            tag: "Popular"
        },
        {
            name: "Haleem",
            image: "/haleem.png",
            description: "Rich, slow-cooked delicacy with wheat, lentils and meat",
            tag: "Specialty"
        }
    ]

    return (
        <>
            {/* hero */}
            <section className="relative h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <Image
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="relative container-padding mx-auto flex h-full items-center">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                                Authentic Hyderabadi Cuisine
                            </span>
                            
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Where Every Bite Tells a <span className="text-primary">Story</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                                Experience the royal flavors of Hyderabad. From our legendary Dum Biryani to sizzling kebabs, every dish is crafted with passion and tradition.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    href="/menu" 
                                    className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    Explore Menu
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link 
                                    href="/catering" 
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300"
                                >
                                    Book Catering
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* slide indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index ? "w-8 bg-primary" : "w-2 bg-white/50"
                            }`}
                        />
                    ))}
                </div>

                {/* quick contact */}
                <motion.div 
                    className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    <FaPhone className="text-primary" />
                    <a href="tel:9726355657" className="text-white font-medium hover:text-primary transition-colors">
                        (972) 635-5657
                    </a>
                </motion.div>
            </section>

            {/* features */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                
                <div className="container-padding mx-auto relative">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Pista House Experience</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                className="group relative bg-gradient-to-br from-background-card to-background-card/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                                <div className="relative">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-text-light leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* popular dishes */}
            <section className="py-20 bg-background relative">
                <div className="absolute inset-0 opacity-[0.02] bg-[url('/back.svg')] bg-repeat" />
                
                <div className="container-padding mx-auto relative">
                    <motion.div 
                        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <span className="text-primary font-medium mb-2 block">Our Specialties</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Signature Dishes</h2>
                        </div>
                        <Link 
                            href="/menu" 
                            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group"
                        >
                            View Full Menu 
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularDishes.map((dish, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-background-card rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                                        {dish.tag}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{dish.name}</h3>
                                    <p className="text-text-light mb-4">{dish.description}</p>
                                    <Link 
                                        href="/menu" 
                                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                                    >
                                        Order Now <FaArrowRight className="text-sm" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ambiance */}
            <section className="py-20 bg-background-dark">
                <div className="container-padding mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-medium mb-2 block">Our Space</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience the Atmosphere</h2>
                            <p className="text-text-light text-lg mb-6 leading-relaxed">
                                Step into a world where traditional Indian hospitality meets modern comfort. Our restaurant offers the perfect setting for family dinners, celebrations, and casual gatherings.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Spacious dining area", "Private event space", "Warm, inviting ambiance", "Family-friendly environment"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-light">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link 
                                href="/aboutus" 
                                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                            >
                                Learn More About Us <FaArrowRight />
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image src="/slides/6.jpg" alt="Restaurant Interior" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden">
                                    <Image src="/slides/8.jpg" alt="Food Preparation" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 rounded-2xl overflow-hidden">
                                    <Image src="/building.jpg" alt="Restaurant Building" fill className="object-cover" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image src="/slides/10.jpg" alt="Dining Experience" fill className="object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* testimonials */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                
                <div className="container-padding mx-auto relative">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Guests Say</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
                        <Link 
                            href="https://www.yelp.com/biz/pista-house-irving"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#ff1a1a]/10 hover:bg-[#ff1a1a]/20 text-[#ff1a1a] px-4 py-2 rounded-full border border-[#ff1a1a]/20 transition-all text-sm font-medium"
                        >
                            <FaYelp />
                            Read more on Yelp
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-background-card p-8 rounded-2xl border border-white/5"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <FaQuoteLeft className="text-primary/20 text-4xl absolute top-6 right-6" />
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-primary text-sm" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-text-light leading-relaxed">{testimonial.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* catering cta */}
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
                            <span className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                                Catering Services
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Make Your Event Unforgettable
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                From weddings to corporate events, our catering team brings the authentic taste of Hyderabad to your special occasions. Let us handle the food while you create memories.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    href="/catering" 
                                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                                >
                                    Explore Catering Options
                                    <FaArrowRight />
                                </Link>
                                <a 
                                    href="tel:9726355657" 
                                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <FaPhone />
                                    Call to Book
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
