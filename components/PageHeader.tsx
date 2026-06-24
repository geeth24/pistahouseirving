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
            <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/80" />

            {/* content */}
            <div className="container-padding relative z-10 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                    <h1 className="mb-4 text-5xl text-background md:text-6xl lg:text-7xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="mx-auto max-w-2xl text-lg text-background/85 md:text-xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* bottom fade into the page */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}

export default PageHeader
