import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface PageHeaderProps {
    title: string
    subtitle?: string
    backgroundImage?: string
}

function PageHeader({ title, subtitle, backgroundImage = '/Biryani.jpeg' }: PageHeaderProps) {
    return (
        <section className="relative flex h-72 items-center justify-center overflow-hidden md:h-80 lg:h-96">
            {/* background */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            
            {/* content */}
            <div className="container-padding relative z-10 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <span className="inline-block w-16 h-1 bg-primary rounded-full" />
                    </motion.div>
                    
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    
                    {subtitle && (
                        <motion.p 
                            className="mx-auto max-w-2xl text-lg text-text-light md:text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}

export default PageHeader
