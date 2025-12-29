import React from "react"
import { useOrder } from "@/contexts/order-context"
import { motion } from "framer-motion"
import { FaCheck, FaPlus } from "react-icons/fa"

interface CaterCardProps {
    title: string
    description: string
    price: string
    isVeg?: boolean
}

function CaterCard({ title, description, price, isVeg = false }: CaterCardProps) {
    const { order, addToOrder, removeFromOrder } = useOrder()
    const isAdded = order.includes(title)
    
    const handleClick = () => {
        if (order.includes(title) && title !== "") {
            removeFromOrder(title + ", ")
        } else if (title !== "") {
            addToOrder(title + ", ")
        }
    }
    
    return (
        <motion.div
            className={`group relative rounded-xl p-5 cursor-pointer transition-all duration-300 border ${
                isAdded 
                    ? "bg-primary/10 border-primary/40" 
                    : "bg-background-card border-white/5 hover:border-primary/20"
            }`}
            onClick={handleClick}
            whileTap={{ scale: 0.98 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            
            <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                        {isVeg ? (
                            <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border border-green-500 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                            </span>
                        ) : (
                            <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border border-red-500 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                            </span>
                        )}
                        <h3 className={`text-lg font-semibold leading-tight transition-colors ${
                            isAdded ? "text-primary" : "text-white"
                        }`}>
                            {title}
                        </h3>
                    </div>
                    
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isAdded 
                            ? "bg-primary text-white" 
                            : "bg-white/5 text-text-light group-hover:bg-primary/20 group-hover:text-primary"
                    }`}>
                        {isAdded ? <FaCheck className="text-sm" /> : <FaPlus className="text-sm" />}
                    </div>
                </div>
                
                {description && (
                    <p className="text-text-light text-sm leading-relaxed pl-6 mb-3">
                        {description}
                    </p>
                )}
                
                {price && (
                    <div className="pl-6">
                        <span className="text-primary font-bold">{price}</span>
                        <span className="text-text-light text-sm ml-2">per tray</span>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default CaterCard
