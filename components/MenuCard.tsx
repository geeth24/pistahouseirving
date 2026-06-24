import React from "react"
import { motion } from "framer-motion"

interface MenuCardProps {
    title: string
    description: string
    isVeg?: boolean
    searchQuery?: string
}

function highlightText(text: string, query: string) {
    if (!query.trim()) return text

    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
            ? <mark key={i} className="rounded bg-primary/20 px-0.5 text-primary-dark">{part}</mark>
            : part
    )
}

function MenuCard({ title, description, isVeg = false, searchQuery = "" }: MenuCardProps) {
    return (
        <motion.div
            className="group rounded-2xl border border-ink/10 bg-background-card p-5 transition-colors duration-300 hover:border-primary/30"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="flex items-start gap-2.5">
                <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${isVeg ? "border-green-600" : "border-red-600"}`}>
                    <span className={`h-2 w-2 rounded-full ${isVeg ? "bg-green-600" : "bg-red-600"}`} />
                </span>
                <h3 className="font-display text-xl leading-tight text-ink">
                    {highlightText(title, searchQuery)}
                </h3>
            </div>

            {description && (
                <p className="mt-2 pl-[26px] text-sm leading-relaxed text-ink-soft">
                    {highlightText(description, searchQuery)}
                </p>
            )}
        </motion.div>
    )
}

export default MenuCard
