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
            className={`group relative cursor-pointer rounded-2xl border p-5 transition-colors duration-300 ${
                isAdded
                    ? "border-primary/40 bg-primary/8"
                    : "border-ink/10 bg-background-card hover:border-primary/25"
            }`}
            onClick={handleClick}
            whileTap={{ scale: 0.98 }}
        >
            <div className="mb-2 flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-start gap-2.5">
                    <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${isVeg ? "border-green-600" : "border-red-600"}`}>
                        <span className={`h-2 w-2 rounded-full ${isVeg ? "bg-green-600" : "bg-red-600"}`} />
                    </span>
                    <h3 className={`font-display text-xl leading-tight transition-colors ${isAdded ? "text-primary-dark" : "text-ink"}`}>
                        {title}
                    </h3>
                </div>

                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isAdded
                        ? "bg-primary text-text-inverse"
                        : "bg-primary/10 text-primary-dark group-hover:bg-primary/20"
                }`}>
                    {isAdded ? <FaCheck className="text-sm" /> : <FaPlus className="text-sm" />}
                </div>
            </div>

            {description && (
                <p className="mb-3 pl-[26px] text-sm leading-relaxed text-ink-soft">
                    {description}
                </p>
            )}

            {price && (
                <div className="pl-[26px]">
                    <span className="font-semibold text-primary-dark">{price}</span>
                    <span className="ml-2 text-sm text-ink-soft">per tray</span>
                </div>
            )}
        </motion.div>
    )
}

export default CaterCard
