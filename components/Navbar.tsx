"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { FaPhone } from "react-icons/fa"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Catering", href: "/catering" },
    { name: "About Us", href: "/aboutus" },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 24)
    })

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
                scrolled || isOpen
                    ? "border-b border-ink/10 bg-background/90 shadow-[0_8px_30px_rgba(29,27,22,0.06)] backdrop-blur-md"
                    : "border-b border-transparent bg-background/40 backdrop-blur-sm"
            }`}
        >
            <div className="container-padding mx-auto flex h-[72px] items-center justify-between">
                <Link href="/" className="flex items-center" aria-label="Pista House home">
                    <Image
                        src="/pistahouselogo.png"
                        alt="Pista House"
                        width={132}
                        height={44}
                        priority
                        className="h-9 w-auto transition-transform duration-300 hover:scale-[1.03]"
                    />
                </Link>

                {/* desktop */}
                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative px-4 py-2 text-[15px] font-medium text-ink/75 transition-colors hover:text-ink"
                        >
                            {link.name}
                            <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    ))}
                    <Link href="/contactus" className="primary-button ml-3 px-5 py-2 text-[15px]">
                        <FaPhone className="text-xs" />
                        Contact
                    </Link>
                </div>

                {/* mobile toggle */}
                <button
                    className="relative flex h-10 w-10 flex-col items-center justify-center lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className={`block h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`mt-1.5 block h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${isOpen ? "scale-0 opacity-0" : ""}`} />
                    <span className={`mt-1.5 block h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                </button>
            </div>

            {/* mobile sheet */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="overflow-hidden lg:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="container-padding flex flex-col gap-1 border-t border-ink/10 py-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="rounded-xl px-3 py-3 text-lg font-medium text-ink/80 transition-colors hover:bg-primary/5 hover:text-ink"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contactus"
                                className="primary-button mt-3 w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                <FaPhone className="text-sm" />
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
