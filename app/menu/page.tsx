"use client"

import MenuCard from "@/components/MenuCard"
import PageHeader from "@/components/PageHeader"
import { Link as ReactScrollLink } from "react-scroll"
import type { ReactNode } from "react"
import { useEffect, useState, useMemo } from "react"
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
import { motion } from "framer-motion"
import { FaSearch, FaLeaf, FaDrumstickBite, FaTimes } from "react-icons/fa"

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

type MenuItem = {
    title: string
    description: string
    price: string
}

type MenuCategory = {
    id: string
    name: string
    items: MenuItem[]
    isVeg: boolean
}

const menuCategories: MenuCategory[] = [
    { id: "VeggieAppetizers", name: "Veggie Appetizers", items: VeggieAppetizers, isVeg: true },
    { id: "MeatAppetizers", name: "Meat Appetizers", items: MeatAppetizers, isVeg: false },
    { id: "VeggieKebabs", name: "Veggie Kebabs", items: VeggieKebabs, isVeg: true },
    { id: "MeatKebabs", name: "Meat Kebabs", items: MeatKebabs, isVeg: false },
    { id: "VeggieEntrees", name: "Veggie Entrees", items: VeggieEntrees, isVeg: true },
    { id: "MeatEntrees", name: "Meat Entrees", items: MeatEntrees, isVeg: false },
    { id: "NaanBread", name: "Naan Bread", items: NaanBread, isVeg: true },
    { id: "HyderabadiBiryani", name: "Hyderabadi Biryani", items: HyderabadiBiryani, isVeg: false },
    { id: "Rice", name: "Rice", items: Rice, isVeg: true },
    { id: "Drinks", name: "Drinks", items: Drinks, isVeg: true },
    { id: "Desserts", name: "Desserts", items: Desserts, isVeg: true },
]

export default function Menu() {
    const [logged, setLogged] = useState(false)
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
    const [searchQuery, setSearchQuery] = useState("")
    const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all")

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

    const filteredCategories = useMemo(() => {
        return menuCategories
            .filter(category => {
                if (dietFilter === "veg") return category.isVeg
                if (dietFilter === "nonveg") return !category.isVeg
                return true
            })
            .map(category => {
                if (!searchQuery.trim()) return category
                
                const filteredItems = category.items.filter(item =>
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                
                return { ...category, items: filteredItems }
            })
            .filter(category => category.items.length > 0)
    }, [searchQuery, dietFilter])

    const totalResults = useMemo(() => {
        return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)
    }, [filteredCategories])

    const clearFilters = () => {
        setSearchQuery("")
        setDietFilter("all")
    }

    const hasActiveFilters = searchQuery.trim() !== "" || dietFilter !== "all"

    return (
        <>
            <PageHeader 
                title="Our Menu" 
                subtitle="Explore our authentic Hyderabadi cuisine" 
                backgroundImage="/slides/3.jpg"
            />
            
            {/* search and filters */}
            <div className="sticky top-20 z-30 w-full bg-background-dark/95 shadow-lg backdrop-blur-md border-b border-white/5">
                <div className="container-padding mx-auto py-4">
                    {/* search bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative flex-1">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" />
                            <input
                                type="text"
                                placeholder="Search for dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-background-card border border-white/10 rounded-xl text-white placeholder:text-text-light focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light hover:text-white transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </div>
                        
                        {/* diet filters */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setDietFilter("all")}
                                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                                    dietFilter === "all"
                                        ? "bg-primary text-white"
                                        : "bg-background-card text-text-light hover:text-white border border-white/10"
                                }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setDietFilter("veg")}
                                className={`px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                                    dietFilter === "veg"
                                        ? "bg-green-600 text-white"
                                        : "bg-background-card text-text-light hover:text-white border border-white/10"
                                }`}
                            >
                                <FaLeaf className="text-sm" />
                                Veg
                            </button>
                            <button
                                onClick={() => setDietFilter("nonveg")}
                                className={`px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                                    dietFilter === "nonveg"
                                        ? "bg-red-600 text-white"
                                        : "bg-background-card text-text-light hover:text-white border border-white/10"
                                }`}
                            >
                                <FaDrumstickBite className="text-sm" />
                                Non-Veg
                            </button>
                        </div>
                    </div>

                    {/* category nav */}
                    <div className="overflow-x-auto pb-2 -mb-2">
                        <div className="flex space-x-4">
                            {filteredCategories.map((category) => (
                                <ScrollLink
                                    key={category.id}
                                    to={category.id}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-250}
                                    className={`whitespace-nowrap cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        activeCategory === category.id 
                                            ? "bg-primary/20 text-primary border border-primary/30" 
                                            : "text-text-light hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {category.name}
                                    <span className="ml-2 text-xs opacity-60">({category.items.length})</span>
                                </ScrollLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* results info */}
            {hasActiveFilters && (
                <div className="container-padding mx-auto pt-6">
                    <div className="flex items-center justify-between bg-background-card/50 px-4 py-3 rounded-xl border border-white/5">
                        <p className="text-text-light">
                            Found <span className="text-primary font-semibold">{totalResults}</span> items
                            {searchQuery && <span> matching "{searchQuery}"</span>}
                            {dietFilter !== "all" && <span> in {dietFilter === "veg" ? "vegetarian" : "non-vegetarian"} category</span>}
                        </p>
                        <button
                            onClick={clearFilters}
                            className="text-primary hover:text-primary-light font-medium text-sm flex items-center gap-2 transition-colors"
                        >
                            <FaTimes className="text-xs" />
                            Clear filters
                        </button>
                    </div>
                </div>
            )}
            
            <section className="container-padding mx-auto py-12">
                {filteredCategories.length === 0 ? (
                    <motion.div 
                        className="text-center py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-20 h-20 bg-background-card rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaSearch className="text-3xl text-text-light" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">No dishes found</h3>
                        <p className="text-text-light mb-6">Try adjusting your search or filters</p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-colors"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                ) : (
                    filteredCategories.map((category) => (
                        <div id={category.id} key={category.id} className="mb-16 scroll-mt-64">
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-3xl font-bold text-white">
                                    {category.name}
                                </h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    category.isVeg 
                                        ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                                        : "bg-red-600/20 text-red-400 border border-red-600/30"
                                }`}>
                                    {category.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {category.items.map((item, index) => (
                                    <MenuCard
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        isVeg={category.isVeg}
                                        searchQuery={searchQuery}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}
