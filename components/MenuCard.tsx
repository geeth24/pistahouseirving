import React from "react"
import { motion } from "framer-motion"
import { FaLeaf } from "react-icons/fa"

interface MenuCardProps {
    title: string
    description: string
    price: string
    isVeg?: boolean
    searchQuery?: string
}

function highlightText(text: string, query: string) {
    if (!query.trim()) return text
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() 
            ? <mark key={i} className="bg-primary/30 text-white rounded px-0.5">{part}</mark>
            : part
    )
}

function MenuCard({ title, description, price, isVeg = false, searchQuery = "" }: MenuCardProps) {
    return (
        <motion.div 
            className="group relative rounded-xl bg-background-card p-5 border border-white/5 hover:border-primary/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            
            <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                        {isVeg && (
                            <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border border-green-500 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                            </span>
                        )}
                        {!isVeg && (
                            <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border border-red-500 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                            </span>
                        )}
                        <h3 className="text-lg font-semibold text-white leading-tight">
                            {highlightText(title, searchQuery)}
                        </h3>
                    </div>
                    <span className="flex-shrink-0 text-lg font-bold text-primary">{price}</span>
                </div>
                
                {description && (
                    <p className="text-text-light text-sm leading-relaxed pl-6">
                        {highlightText(description, searchQuery)}
                    </p>
                )}
            </div>
        </motion.div>
    )
}

export default MenuCard
