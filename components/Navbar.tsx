import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBookOpen, FaBuilding, FaHome, FaUtensilSpoon } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

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
                scrollNav || isOpen
                    ? `bg-pistaGray/70 backdrop-blur-lg ${
                          isOpen ? "h-screen" : ""
                      }`
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

                <div className="flex md:order-1 lg:order-2">
                    <Link
                        href="/contactus"
                        className="mr-3 rounded-full bg-pistaGreen px-5 py-2.5 text-center text-sm font-medium text-white lg:mr-0"
                    >
                        Contact Us
                    </Link>

                    <div
                        className={`flex items-center rounded-full bg-pistaGreen p-2 text-sm text-white focus:outline-none md:hidden  justify-center${
                            isOpen && ""
                        }`}
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        <div
                            className={`text-darkred group  z-50 flex cursor-pointer flex-col items-center justify-center  gap-[3px] rounded-full  bg-transparent px-1.5 py-0.5 transition-all duration-300 active:bg-transparent lg:hidden lg:hover:bg-transparent ${
                                isOpen && " bg-white"
                            }`}
                        >
                            <div
                                className={`h-[2px] w-[13.81px] rounded-full bg-white transition-all duration-300 lg:group-hover:bg-transparent ${
                                    isOpen &&
                                    "translate-y-[4.5px] -rotate-45 bg-white"
                                }`}
                            />
                            <div
                                className={`h-[2px] w-[13.81px] rounded-full bg-white transition-all duration-300 lg:group-hover:bg-transparent ${
                                    isOpen && "rotate-45 bg-white"
                                }`}
                            />
                            <div
                                className={`h-[2px] w-[13.81px] rounded-full bg-white transition-all duration-300 lg:group-hover:bg-transparent ${
                                    isOpen &&
                                    "-translate-y-[6px] rotate-45 bg-white"
                                }`}
                            />
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={` w-full items-center justify-between md:order-1 md:flex md:w-auto ${
                                isOpen ? "block" : "hidden"
                            }`}
                            id="navbar-cta"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <ul className="mt-4 flex flex-col rounded-lg  p-4   md:mt-0  md:flex-row md:space-x-8 md:bg-transparent md:text-sm md:font-medium md:backdrop-blur-none lg:space-x-12">
                                <Link
                                    href="/"
                                    className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                    onClick={() => {
                                        if (window.innerWidth >= 600) {
                                            setIsOpen(false)
                                        } else {
                                            setIsOpen(!isOpen)
                                        }
                                    }}
                                >
                                    <FaHome className="text-2xl text-pistaMidGreen " />
                                    <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                        Home
                                    </div>
                                </Link>
                                <Link
                                    href="/menu"
                                    className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                    onClick={() => {
                                        if (window.innerWidth >= 600) {
                                            setIsOpen(false)
                                        } else {
                                            setIsOpen(!isOpen)
                                        }
                                    }}
                                >
                                    <FaUtensilSpoon className="text-2xl text-pistaMidGreen " />
                                    <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                        Menu
                                    </div>
                                </Link>
                                <Link
                                    href="/catering"
                                    className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                    onClick={() => {
                                        if (window.innerWidth >= 600) {
                                            setIsOpen(false)
                                        } else {
                                            setIsOpen(!isOpen)
                                        }
                                    }}
                                >
                                    <FaBookOpen className="text-2xl text-pistaMidGreen" />
                                    <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                        Catering
                                    </div>
                                </Link>
                                <Link
                                    href="/aboutus"
                                    className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                    onClick={() => {
                                        if (window.innerWidth >= 600) {
                                            setIsOpen(false)
                                        } else {
                                            setIsOpen(!isOpen)
                                        }
                                    }}
                                >
                                    <FaBuilding className="text-2xl text-pistaMidGreen" />
                                    <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                        About Us
                                    </div>
                                </Link>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                    <motion.div
                        className={` w-full items-center justify-between md:order-1 md:flex md:w-auto ${
                            isOpen ? "block" : "hidden"
                        }`}
                        id="navbar-cta"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <ul className="mt-4 flex flex-col rounded-lg bg-pistaGray/70 p-4 backdrop-blur-xl  md:mt-0  md:flex-row md:space-x-8 md:bg-transparent md:text-sm md:font-medium md:backdrop-blur-none lg:space-x-12">
                            <Link
                                href="/"
                                className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                onClick={() => {
                                    if (window.innerWidth >= 600) {
                                        setIsOpen(false)
                                    } else {
                                        setIsOpen(!isOpen)
                                    }
                                }}
                            >
                                <FaHome className="text-2xl text-pistaMidGreen " />
                                <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                    Home
                                </div>
                            </Link>
                            <Link
                                href="/menu"
                                className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                onClick={() => {
                                    if (window.innerWidth >= 600) {
                                        setIsOpen(false)
                                    } else {
                                        setIsOpen(!isOpen)
                                    }
                                }}
                            >
                                <FaUtensilSpoon className="text-2xl text-pistaMidGreen " />
                                <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                    Menu
                                </div>
                            </Link>
                            <Link
                                href="/catering"
                                className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                onClick={() => {
                                    if (window.innerWidth >= 600) {
                                        setIsOpen(false)
                                    } else {
                                        setIsOpen(!isOpen)
                                    }
                                }}
                            >
                                <FaBookOpen className="text-2xl text-pistaMidGreen" />
                                <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                    Catering
                                </div>
                            </Link>
                            <Link
                                href="/aboutus"
                                className="relative mb-3 mt-1 flex flex-row items-center space-x-2 after:absolute after:left-0 after:bottom-0  after:-mb-3 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-pistaGreen after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left  hover:after:scale-x-100 md:mt-0 md:mb-0"
                                onClick={() => {
                                    if (window.innerWidth >= 600) {
                                        setIsOpen(false)
                                    } else {
                                        setIsOpen(!isOpen)
                                    }
                                }}
                            >
                                <FaBuilding className="text-2xl text-pistaMidGreen" />
                                <div className="block rounded py-2 pl-3 pr-4 text-xl text-pistaMidGreen hover:text-green-500  dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-pistaGreen md:dark:hover:bg-transparent md:dark:hover:text-white">
                                    About Us
                                </div>
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
