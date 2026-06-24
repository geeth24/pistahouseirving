import React from "react"
import { useOrder } from "@/contexts/order-context"
import { motion } from "framer-motion"
import { FaCheck, FaPlus } from "react-icons/fa"

interface CaterCardProps {
    title: string
    description: string
    isVeg?: boolean
}

function CaterCard({ title, description, isVeg = false }: CaterCardProps) {
    const { hasItem, toggleItem } = useOrder()
    const isAdded = hasItem(title)

    return (
        <motion.button
            type="button"
            onClick={() => toggleItem(title)}
            className={`group relative w-full rounded-2xl border p-5 text-left transition-colors duration-300 ${
                isAdded
                    ? "border-primary/40 bg-primary/8"
                    : "border-ink/10 bg-background-card hover:border-primary/25"
            }`}
            whileTap={{ scale: 0.98 }}
            aria-pressed={isAdded}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-start gap-2.5">
                    <span className={`mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border ${isVeg ? "border-green-700" : "border-red-700"}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${isVeg ? "bg-green-700" : "bg-red-700"}`} />
                    </span>
                    <div className="min-w-0">
                        <h3 className={`font-display text-lg font-semibold leading-snug transition-colors ${isAdded ? "text-primary-dark" : "text-ink"}`}>
                            {title}
                        </h3>
                        {description && (
                            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p>
                        )}
                    </div>
                </div>

                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isAdded ? "bg-primary text-text-inverse" : "bg-primary/10 text-primary-dark group-hover:bg-primary/20"
                }`}>
                    {isAdded ? <FaCheck className="text-sm" /> : <FaPlus className="text-sm" />}
                </span>
            </div>
        </motion.button>
    )
}

export default CaterCard
