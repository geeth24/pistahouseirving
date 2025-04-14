import React from "react"
import Link from "next/link"
import Image from "next/image"
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si"
import { FaInstagram, FaFacebook, FaTwitter, FaYelp } from "react-icons/fa"

function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="relative bg-background-dark text-primary-light">
            <div className="container-padding mx-auto pt-16 pb-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo and About */}
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/pistahouselogo.png"
                                alt="Pista House Logo"
                                width={150}
                                height={50}
                                className="mb-4"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-text-inverse">
                            Authentic Hyderabadi cuisine in Irving, TX. From flavorful biryanis 
                            to delicious kebabs, we bring you the taste of India.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="https://instagram.com" className="text-primary hover:text-primary-light transition-colors">
                                <FaInstagram className="h-5 w-5" />
                            </Link>
                            <Link href="https://facebook.com" className="text-primary hover:text-primary-light transition-colors">
                                <FaFacebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://twitter.com" className="text-primary hover:text-primary-light transition-colors">
                                <FaTwitter className="h-5 w-5" />
                            </Link>
                            <Link href="https://yelp.com" className="text-primary hover:text-primary-light transition-colors">
                                <FaYelp className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <div className="h-1 w-12 bg-primary"></div>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu" className="text-sm hover:text-white transition-colors">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/catering" className="text-sm hover:text-white transition-colors">
                                    Catering
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutus" className="text-sm hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactus" className="text-sm hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-white">Opening Hours</h3>
                        <div className="h-1 w-12 bg-primary"></div>
                        <ul className="flex flex-col space-y-2">
                            <li className="flex justify-between text-sm">
                                <span>Everyday</span>
                                <span>11:00 AM - 2:00 AM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-white">Contact Us</h3>
                        <div className="h-1 w-12 bg-primary"></div>
                        <ul className="flex flex-col space-y-2">
                            <li className="text-sm">
                                <Link 
                                    href="https://www.google.com/maps/search/?api=1&query=pista house irving texas" 
                                    className="hover:text-white transition-colors"
                                >
                                    901 W Royal Ln, Irving, TX 75039
                                </Link>
                            </li>
                            <li className="text-sm">
                                <Link 
                                    href="tel:+1 (972) 635-5657" 
                                    className="hover:text-white transition-colors"
                                >
                                    +1 (972) 635-5657
                                </Link>
                            </li>
                            <li className="text-sm">
                                <Link 
                                    href="mailto:info@pistahouseirving.com" 
                                    className="hover:text-white transition-colors"
                                >
                                    info@pistahouseirving.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
                        <p className="text-xs text-gray-400">
                            © {currentYear} Pista House Irving. All rights reserved.
                        </p>
                        <p className="flex items-center text-xs text-gray-400">
                            Built by
                            <Link href="https://geeth.co" className="ml-1 hover:text-white transition-colors">
                            
                                Geeth
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
