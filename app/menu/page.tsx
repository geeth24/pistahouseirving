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
            <div className="sticky top-[72px] z-30 w-full border-b border-ink/10 bg-background/90 shadow-[0_8px_30px_rgba(29,27,22,0.05)] backdrop-blur-md">
                <div className="container-padding mx-auto py-4">
                    {/* search bar */}
                    <div className="mb-4 flex flex-col gap-3 md:flex-row">
                        <div className="relative flex-1">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
                            <input
                                type="text"
                                placeholder="Search for dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-xl border border-ink/15 bg-background-card py-3 pl-12 pr-4 text-ink transition-all placeholder:text-ink-soft focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft transition-colors hover:text-ink"
                                    aria-label="Clear search"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </div>

                        {/* diet filters */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setDietFilter("all")}
                                className={`rounded-xl px-5 py-3 font-medium transition-all ${
                                    dietFilter === "all"
                                        ? "bg-primary text-text-inverse"
                                        : "border border-ink/10 bg-background-card text-ink-soft hover:text-ink"
                                }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setDietFilter("veg")}
                                className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-all ${
                                    dietFilter === "veg"
                                        ? "bg-green-700 text-white"
                                        : "border border-ink/10 bg-background-card text-ink-soft hover:text-ink"
                                }`}
                            >
                                <FaLeaf className="text-sm" />
                                Veg
                            </button>
                            <button
                                onClick={() => setDietFilter("nonveg")}
                                className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-all ${
                                    dietFilter === "nonveg"
                                        ? "bg-red-700 text-white"
                                        : "border border-ink/10 bg-background-card text-ink-soft hover:text-ink"
                                }`}
                            >
                                <FaDrumstickBite className="text-sm" />
                                Non-Veg
                            </button>
                        </div>
                    </div>

                    {/* category nav */}
                    <div className="-mb-2 overflow-x-auto pb-2">
                        <div className="flex space-x-2">
                            {filteredCategories.map((category) => (
                            <ScrollLink
                                key={category.id}
                                to={category.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                    offset={-250}
                                    className={`cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                                    activeCategory === category.id
                                            ? "border border-primary/30 bg-primary/12 text-primary-dark"
                                            : "text-ink-soft hover:bg-primary/5 hover:text-ink"
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
                    <div className="flex items-center justify-between rounded-xl border border-ink/10 bg-background-card px-4 py-3">
                        <p className="text-ink-soft">
                            Found <span className="font-semibold text-primary-dark">{totalResults}</span> items
                            {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
                            {dietFilter !== "all" && <span> in {dietFilter === "veg" ? "vegetarian" : "non-vegetarian"} category</span>}
                        </p>
                        <button
                            onClick={clearFilters}
                            className="flex items-center gap-2 text-sm font-medium text-primary-dark transition-colors hover:text-primary"
                        >
                            <FaTimes className="text-xs" />
                            Clear filters
                        </button>
                    </div>
                </div>
            )}

            <section className="container-padding mx-auto py-14">
                {filteredCategories.length === 0 ? (
                    <motion.div
                        className="py-20 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background-card">
                            <FaSearch className="text-3xl text-ink-soft" />
                        </div>
                        <h3 className="mb-2 font-display text-2xl text-ink">No dishes found</h3>
                        <p className="mb-6 text-ink-soft">Try adjusting your search or filters</p>
                        <button onClick={clearFilters} className="primary-button">Clear all filters</button>
                    </motion.div>
                ) : (
                    filteredCategories.map((category) => (
                        <div id={category.id} key={category.id} className="mb-16 scroll-mt-64">
                            <div className="mb-8 flex items-center gap-4">
                                <h2 className="font-display text-3xl text-ink md:text-4xl">
                                    {category.name}
                                </h2>
                                <div className="h-px flex-1 bg-ink/10" />
                                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                    category.isVeg
                                        ? "border border-green-700/30 bg-green-700/10 text-green-800"
                                        : "border border-red-700/30 bg-red-700/10 text-red-800"
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
