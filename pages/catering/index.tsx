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
import React, { useState, useEffect } from "react"
import { animateScroll, Link } from "react-scroll"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import { motion } from "framer-motion"

const menuCategories = [
    { id: "VeggieAppetizers", name: "Veggie Appetizers" },
    { id: "MeatAppetizers", name: "Meat Appetizers" },
    { id: "IndianSandwiches", name: "Indian Sandwiches" },
    { id: "VeggieKebabs", name: "Veggie Kebabs" },
    { id: "MeatKebabs", name: "Meat Kebabs" },
    { id: "VeggieEntrees", name: "Veggie Entrees" },
    { id: "MeatEntrees", name: "Meat Entrees" },
    { id: "Chats", name: "Chats" },
    { id: "Rice", name: "Rice" },
    { id: "Drinks", name: "Drinks" },
    { id: "Desserts", name: "Desserts" },
]

const images = [
    {
        src: "/slides/1.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/2.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/3.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/4.jpg",
        width: 125,
        height: 175,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/5.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/6.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/7.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/8.jpg",
        width: 175,
        height: 125,
        alt: "Dessert Table Setup",
    },
    {
        src: "/slides/9.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/10.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/11.jpg",
        width: 125,
        height: 175,
        alt: "Veggie Table Setup",
    },
    {
        src: "/slides/12.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/13.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/14.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/15.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
]

function Catering() {
    const [logged, setLogged] = useState(false)
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
    const router = useRouter()
    const { order } = router.query
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    useEffect(() => {
        if (order === "true") {
            if (window.innerWidth <= 600) {
                animateScroll.scrollTo(900)
            } else {
                animateScroll.scrollTo(1200)
            }
        }
    }, [order])

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

    // Handle analytics
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

    const handleItemSelect = (title: string) => {
        setSelectedItems(prev => 
            prev.includes(title) 
                ? prev.filter(item => item !== title)
                : [...prev, title]
        )
    }

    const scrollToMenuSection = () => {
        animateScroll.scrollTo(document.getElementById('menu')?.offsetTop || 0)
    }

    return (
        <>
            <Head>
                <title>Catering | Pista House Irving</title>
                <meta name="description" content="Delicious catering services for all your events by Pista House Irving. Offering authentic Indian cuisine with a wide variety of vegetarian and non-vegetarian options." />
            </Head>

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/slides/1.jpg" 
                        alt="Catering Service" 
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
                        Catering Services
                    </motion.h1>
                    <motion.p 
                        className="mt-4 max-w-2xl text-xl text-text-light md:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Elevate your events with authentic Indian cuisine
                    </motion.p>
                    <motion.button 
                        className="mt-8 primary-button text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onClick={scrollToMenuSection}
                    >
                        View Our Menu
                    </motion.button>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section-padding bg-background-dark">
                <div className="container-padding">
                    <h2 className="mb-12 text-center text-4xl font-black text-primary">Our Catering Gallery</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {images.slice(0, 10).map((image, i) => (
                            <motion.div 
                                key={i} 
                                className="group relative aspect-square overflow-hidden rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-center text-lg font-bold text-white">
                                        {image.alt}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Navigation */}
            <div className="sticky top-20 z-30 w-full bg-background-dark/95 shadow-md backdrop-blur-md">
                <div className="container-padding mx-auto py-4 overflow-x-auto">
                    <div className="flex space-x-6">
                        {menuCategories.map((category) => (
                            <Link
                                key={category.id}
                                to={category.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-100}
                                className={`whitespace-nowrap cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                                    activeCategory === category.id 
                                        ? "text-primary" 
                                        : "text-text-light/70"
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
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <section id="menu" className="section-padding bg-background">
                <div className="container-padding">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-black text-primary md:text-5xl">Catering Menu</h2>
                        <p className="mx-auto max-w-2xl text-text-light">
                            Select your favorite dishes for your next event. Click on items to add them to your selection.
                        </p>
                    </div>

                    {menuCategories.map((category, categoryIndex) => {
                        const id = category.id;
                        let items: any[] = [];
                        
                        switch(id) {
                            case "VeggieAppetizers": items = VeggieAppetizers; break;
                            case "MeatAppetizers": items = MeatAppetizers; break;
                            case "IndianSandwiches": items = IndianSandwich; break;
                            case "VeggieKebabs": items = VeggieKebabs; break;
                            case "MeatKebabs": items = MeatKebabs; break;
                            case "VeggieEntrees": items = VeggieEntrees; break;
                            case "MeatEntrees": items = MeatEntrees; break;
                            case "Chats": items = Chat; break;
                            case "Rice": items = Rice; break;
                            case "Drinks": items = Drinks; break;
                            case "Desserts": items = Desserts; break;
                            default: items = [];
                        }
                        
                        return (
                            <motion.div 
                                key={id} 
                                id={id}
                                className="mb-16"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h3 className="mb-8 text-3xl font-bold text-primary-light">{category.name}</h3>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {items.map((item, index) => (
                                        <CaterCard
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            price={item.price}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}

                    {selectedItems.length > 0 && (
                        <div className="mt-16">
                            <h3 className="mb-6 text-2xl font-bold text-primary">Your Selected Items</h3>
                            <div className="rounded-lg bg-background-card p-6 shadow-lg">
                                <ul className="space-y-2">
                                    {selectedItems.map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="mr-2 rounded-full bg-primary px-2 py-1 text-xs text-white">{index + 1}</span>
                                            <span className="text-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-dark/20 to-background-dark">
                <div className="container-padding">
                    <div className="mx-auto max-w-4xl rounded-2xl bg-background-card p-8 shadow-xl">
                        <h2 className="mb-6 text-center text-3xl font-bold text-primary">Ready to Book Your Catering?</h2>
                        <p className="mb-8 text-center text-text-light">
                            Contact us to discuss your event requirements and get a personalized quote.
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                            <a href="tel:9726355657" className="primary-button flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                Call Us at +1 (972) 635-5657
                            </a>
                            <a href="mailto:info@pistahouseirving.com" className="outline-button flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catering
