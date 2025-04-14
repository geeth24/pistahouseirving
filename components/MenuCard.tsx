import React from "react"
import { motion } from "framer-motion"

interface MenuCardProps {
    title: string
    description: string
    price: string
}

function MenuCard({ title, description, price }: MenuCardProps) {
    return (
        <motion.div 
            className="rounded-lg bg-background-card p-6 shadow-lg transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-between">
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <span className="ml-4 text-lg font-semibold text-primary">{price}</span>
            </div>
            <p className="text-text-light">{description}</p>
        </motion.div>
    )
}

export default MenuCard
