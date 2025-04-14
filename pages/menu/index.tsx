import MenuCard from "@/components/MenuCard"
import PageHeader from "@/components/PageHeader"
import { Link } from "react-scroll"
import { useEffect, useState } from "react"
import {
    VeggieAppetizers,
    MeatAppetizers,
    VeggieKebabs,
    MeatKebabs,
    VeggieEntrees,
    MeatEntrees,
    NaanBread,
    Rice,
    Drinks,
    Desserts,
    HyderabadiBiryani,
} from "@/components/menu"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Head from "next/head"
import { motion } from "framer-motion"

const menuCategories = [
    { id: "VeggieAppetizers", name: "Veggie Appetizers", items: VeggieAppetizers },
    { id: "MeatAppetizers", name: "Meat Appetizers", items: MeatAppetizers },
    { id: "VeggieKebabs", name: "Veggie Kebabs", items: VeggieKebabs },
    { id: "MeatKebabs", name: "Meat Kebabs", items: MeatKebabs },
    { id: "VeggieEntrees", name: "Veggie Entrees", items: VeggieEntrees },
    { id: "MeatEntrees", name: "Meat Entrees", items: MeatEntrees },
    { id: "NaanBread", name: "Naan Bread", items: NaanBread },
    { id: "HyderabadiBiryani", name: "Hyderabadi Biryani", items: HyderabadiBiryani },
    { id: "Rice", name: "Rice", items: Rice },
    { id: "Drinks", name: "Drinks", items: Drinks },
    { id: "Desserts", name: "Desserts", items: Desserts },
]

function Menu() {
    const [logged, setLogged] = useState(false)
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
            if (!logged) {
                logEvent(analytics, "page_view", {
                    page_title: "Menu",
                    page_location: "https://www.pistahouseirving.com/menu",
                    page_path: "/menu",
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

    return (
        <>
            <Head>
                <title>Menu | Pista House Irving</title>
                <meta property="og:title" content="Menu" />
                <meta property="og:description" content="Explore our extensive menu of authentic Hyderabadi cuisine." />
                <meta name="description" content="Explore our extensive menu of authentic Hyderabadi cuisine." />
            </Head>
            
            <PageHeader 
                title="Our Menu" 
                subtitle="Explore our authentic Hyderabadi cuisine" 
                backgroundImage="/bg/menu.png"
            />
            
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
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Menu Content */}
            <section className="container-padding mx-auto py-16">
                {menuCategories.map((category) => (
                    <div id={category.id} key={category.id} className="mb-16 scroll-mt-48">
                        <h2 className="mb-8 text-3xl font-bold text-text-dark">
                            <span className="inline-block border-b-2 border-primary pb-2">{category.name}</span>
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {category.items.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Menu
