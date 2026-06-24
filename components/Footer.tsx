import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaFacebook, FaYelp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa"

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Catering", href: "/catering" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contactus" },
]

const socials = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/pistahousedallas/", label: "Instagram" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/pistahouseirving/", label: "Facebook" },
    { icon: <FaYelp />, href: "https://www.yelp.com/biz/pista-house-irving", label: "Yelp" },
]

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-ink text-text-inverse">
            <div className="container-padding mx-auto pb-10 pt-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
                    {/* brand */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="mb-6 inline-flex rounded-2xl bg-background px-4 py-3">
                            <Image src="/pistahouselogo.png" alt="Pista House" width={150} height={50} className="h-10 w-auto" />
                        </Link>
                        <p className="max-w-xs leading-relaxed text-text-inverse/65">
                            Authentic Hyderabadi cuisine in Irving, TX. Dum biryani, haleem, kebabs and Irani chai, served late into the night.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socials.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-text-inverse/80 transition-colors hover:bg-primary hover:text-text-inverse"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* links */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h3 className="font-display text-xl text-text-inverse">Explore</h3>
                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group inline-flex items-center gap-2 text-text-inverse/65 transition-colors hover:text-primary-bright">
                                        <FaArrowRight className="text-[10px] text-primary-bright opacity-0 transition-all group-hover:opacity-100" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* visit */}
                    <div className="lg:col-span-4">
                        <h3 className="font-display text-xl text-text-inverse">Visit & Order</h3>
                        <div className="mt-5 space-y-4 text-text-inverse/70">
                            <Link
                                href="https://www.google.com/maps/search/?api=1&query=pista house irving texas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 transition-colors hover:text-primary-bright"
                            >
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-primary-bright" />
                                901 W Royal Ln, Irving, TX 75039
                            </Link>
                            <Link href="tel:+19726355657" className="flex items-center gap-3 transition-colors hover:text-primary-bright">
                                <FaPhone className="shrink-0 text-primary-bright" />
                                +1 (972) 635-5657
                            </Link>
                            <Link href="mailto:info@pistahouseirving.com" className="flex items-center gap-3 transition-colors hover:text-primary-bright">
                                <FaEnvelope className="shrink-0 text-primary-bright" />
                                info@pistahouseirving.com
                            </Link>
                            <div className="flex items-baseline gap-3 pt-1">
                                <span className="text-sm uppercase tracking-wide text-text-inverse/45">Open daily</span>
                                <span className="font-medium text-text-inverse">11:00 AM &ndash; 2:00 AM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-text-inverse/55">© {currentYear} Pista House Irving. All rights reserved.</p>
                    <p className="text-sm text-text-inverse/55">
                        Built by{" "}
                        <Link href="https://geeth.co" target="_blank" rel="noopener noreferrer" className="text-primary-bright transition-colors hover:text-primary-light">
                            Geeth
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
