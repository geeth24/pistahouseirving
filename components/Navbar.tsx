import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBookOpen, FaBuilding, FaHome, FaUtensilSpoon } from "react-icons/fa"
import { motion } from "framer-motion"

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrollNav, setScrollNav] = React.useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])
    return (
        <nav
            className={`fixed z-20 w-full  px-2 py-2.5 sm:px-4 ${
                scrollNav
                    ? `bg-pistaGray/70 backdrop-blur-lg`
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/pistahouselogo.png"
                        alt="Pista House Logo"
                        width={150}
                        height={50}
                        className="h-auto w-auto cursor-pointer"
                    />
                </Link>

                <div className="flex md:order-2">
                    <Link
                        href="/contactus"
                        className="mr-3 rounded-full bg-pistaGreen px-5 py-2.5 text-center text-sm font-medium text-white md:mr-0"
                    >
                        Contact Us
                    </Link>

                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center rounded-full bg-pistaGreen p-2 text-sm text-white focus:outline-none  md:hidden"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <motion.div
                    className={` w-full items-center justify-between md:order-1 md:flex md:w-auto ${
                        isOpen ? "block" : "hidden"
                    }`}
                    id="navbar-cta"
                >
                    <ul className="mt-4 flex flex-col rounded-lg bg-pistaGray/70 p-4 backdrop-blur-xl  md:mt-0  md:flex-row md:space-x-8 md:bg-transparent md:text-sm md:font-medium md:backdrop-blur-none lg:space-x-12">
                        <Link
                            href="/"
                            className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FaHome className="text-2xl text-pistaMidGreen " />
                            <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                Home
                            </div>
                        </Link>
                        <Link
                            href="/menu"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                        >
                            <FaUtensilSpoon className="text-2xl text-pistaMidGreen " />
                            <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                Menu
                            </div>
                        </Link>
                        <Link
                            href="/catering"
                            className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FaBookOpen className="text-2xl text-pistaMidGreen" />
                            <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                Catering
                            </div>
                        </Link>
                        <Link
                            href="/aboutus"
                            className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FaBuilding className="text-2xl text-pistaMidGreen" />
                            <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                About Us
                            </div>
                        </Link>
                    </ul>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar
