import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

function PageHeader({ title, subtitle, backgroundImage = '/Biryani.jpeg' }: PageHeaderProps) {
    return (
        <section className="relative flex h-64 items-center justify-center overflow-hidden md:h-80 lg:h-96">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-background-dark/70" />
            
            {/* Content */}
            <div className="container-padding relative z-10 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    
                    {subtitle && (
                        <p className="mx-auto max-w-2xl text-lg text-primary-light md:text-xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default PageHeader; 