import Link from "next/link"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { analytics } from "@/components/Firebase"
import { logEvent } from "firebase/analytics"
import Head from "next/head"
import Image from "next/image"
import { FaUtensils, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from "react-icons/fa"
import { Link as ScrollLink } from "react-scroll"

const menuCategories = [
    { id: "hero", name: "Home" },
    { id: "features", name: "Features" },
    { id: "popular-dishes", name: "Popular Dishes" },
    { id: "cta", name: "Catering" },
]

function Home() {
    const [logged, setLogged] = useState(false)
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

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

    // Update active category on scroll
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

    const features = [
        {
            icon: <FaUtensils className="text-primary" />,
            title: "Authentic Cuisine",
            description: "Experience the true flavors of Hyderabad with our authentic recipes and premium ingredients."
        },
        {
            icon: <FaCalendarAlt className="text-primary" />,
            title: "Catering Services",
            description: "Let us make your special occasions memorable with our professional catering services."
        },
        {
            icon: <FaUserFriends className="text-primary" />,
            title: "Family Friendly",
            description: "Enjoy a welcoming atmosphere perfect for family gatherings and celebrations."
        },
        {
            icon: <FaMapMarkerAlt className="text-primary" />,
            title: "Convenient Location",
            description: "Easily accessible in Irving with ample parking for your convenience."
        }
    ]

    return (
        <>
            <Head>
                <title>Home | Pista House Irving</title>
                <meta property="og:title" content="Pista House Irving" />
                <meta 
                    property="og:description" 
                    content="Authentic Hyderabadi cuisine in Irving, TX. From flavorful biryanis to delicious kebabs, we bring you the taste of India."
                />
                <meta name="description" content="Authentic Hyderabadi cuisine in Irving, TX. From flavorful biryanis to delicious kebabs, we bring you the taste of India." />
            </Head>

            {/* Menu Navigation */}
            <div className="sticky top-20 z-30 w-full bg-background-dark/95 shadow-md backdrop-blur-md">
                <div className="container-padding mx-auto py-4 overflow-x-auto">
                    <div className="flex space-x-6">
                        {menuCategories.map((category) => (
                            <ScrollLink
                                key={category.id}
                                to={category.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-200}
                                className={`whitespace-nowrap cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                                    activeCategory === category.id 
                                        ? "text-primary" 
                                        : "text-primary-light/70"
                                }`}
                            >
                                {category.name}
                                {activeCategory === category.id && (
                                    <motion.div 
                                        className="mt-2 h-0.5 bg-primary" 
                                        layoutId="activeCategory"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section id="hero" className="relative h-screen scroll-mt-48">
                <motion.video
                    // @ts-ignore
                    alt="Biryani"
                    w={"100%"}
                    h={"100%"}
                    src="https://photos.smugmug.com/photos/i-7h6J4v9/0/1080/i-7h6J4v9-1080.mp4"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    type={"video/mp4"}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-background-dark/70"></div>
                
                <div className="relative container-padding mx-auto flex h-full items-center">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6"
                        >
                            <div className="h-1 w-24 bg-primary mb-6"></div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                                Indulge in <span className="text-primary-light">Authentic Hyderabadi</span> Cuisine
                            </h1>
                            <p className="text-lg text-text-inverse/80 mb-8 max-w-lg">
                                Embark on a culinary journey with us and savor the best of Indian cuisine. Enjoy our exquisite menu filled with live kebabs, flavorful chats, irresistible dosas, and beloved Indian delicacies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/menu" className="primary-button text-center">
                                    View Our Menu
                                </Link>
                                <Link href="/contactus" className="outline-button text-center">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="section-padding bg-background-dark scroll-mt-48">
                <div className="container-padding mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Pista House</h2>
                        <div className="h-1 w-24 bg-primary mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                className="bg-background-card p-8 rounded-lg shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-text-light">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Dishes Section */}
            <section id="popular-dishes" className="section-padding relative bg-background overflow-hidden scroll-mt-48">
                <div className="absolute inset-0 opacity-5 bg-[url('/back.svg')] bg-cover bg-center"></div>
                <div className="container-padding mx-auto relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Our Popular Dishes</h2>
                        <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
                        <p className="max-w-xl mx-auto text-text-light">
                            Discover our most loved dishes, prepared with authentic recipes and the finest ingredients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Hyderabadi Dum Biryani",
                                image: "/Biryani.jpeg",
                                description: "Our signature biryani, slow-cooked to perfection"
                            },
                            {
                                name: "Haleem",
                                image: "/pistahouselogo.png", // Replace with actual image
                                description: "Traditional Hyderabadi delicacy, rich in flavor"
                            },
                            {
                                name: "Kebab Platter",
                                image: "/pistahouselogo.png", // Replace with actual image
                                description: "Selection of our finest grilled kebabs"
                            }
                        ].map((dish, index) => (
                            <motion.div
                                key={index}
                                className="bg-background-card rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-48 relative">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                                    <p className="text-text-light mb-4">{dish.description}</p>
                                    <Link href="/menu" className="text-primary font-medium hover:text-primary-dark transition-colors">
                                        View on Menu →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/menu" className="primary-button">
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-16 bg-primary scroll-mt-48">
                <div className="container-padding mx-auto">
                    <div className="rounded-lg p-8 md:p-12">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="md:flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Planning a Special Event?
                                </h2>
                                <p className="text-white/90 mb-6 md:mb-0 max-w-xl">
                                    Let us cater your next celebration with authentic Hyderabadi cuisine. From small gatherings to large events, we provide the perfect food experience.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Link href="/catering" className="outline-button bg-white text-primary border-white hover:bg-transparent hover:text-white">
                                    Learn About Catering
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
