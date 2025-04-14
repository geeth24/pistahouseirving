import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaUtensilSpoon, FaBuilding, FaHome, FaBookOpen, FaPhone } from "react-icons/fa"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
        return () => {
            window.removeEventListener("scroll", changeNav)
        }
    }, [])

    const navLinks = [
        { name: "Home", href: "/", icon: <FaHome /> },
        { name: "Menu", href: "/menu", icon: <FaUtensilSpoon /> },
        { name: "Catering", href: "/catering", icon: <FaBookOpen /> },
        { name: "About Us", href: "/aboutus", icon: <FaBuilding /> },
        { name: "Contact", href: "/contactus", icon: <FaPhone /> },
    ]

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                scrollNav || isOpen
                    ? "bg-background-dark/90 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container-padding mx-auto flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/pistahouselogo.png"
                        alt="Pista House Logo"
                        width={150}
                        height={50}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative flex items-center space-x-1 text-primary-light transition-colors hover:text-white"
                        >
                            <span className="text-sm">{link.icon}</span>
                            <span className="text-base font-medium">{link.name}</span>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        href="/contactus"
                        className="primary-button ml-4"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="group flex flex-col items-center justify-center space-y-1.5 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 rounded-full bg-primary-light transition-all duration-300 ${
                            isOpen ? "translate-y-2 rotate-45" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 rounded-full bg-primary-light transition-all duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 rounded-full bg-primary-light transition-all duration-300 ${
                            isOpen ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="container-padding md:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col space-y-6 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center space-x-3 text-primary-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    <span className="text-lg font-medium">{link.name}</span>
                                </Link>
                            ))}
                            <Link
                                href="/contactus"
                                className="primary-button mt-4 w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
