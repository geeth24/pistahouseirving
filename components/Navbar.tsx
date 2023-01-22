import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBookOpen, FaBuilding, FaHome, FaUtensilSpoon } from "react-icons/fa"
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
                    ? `bg-green-800/70 backdrop-blur-lg`
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center"
                >
                    <Image
                        src="/pistahouselogo.png"
                        alt="Pista House Logo"
                        width={150}
                        height={50}
                    />
                </Link>

                <div className="flex md:order-2">
                    <Link
                        href="/contact"
                        className="mr-3 rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:mr-0"
                    >
                        Contact Us
                    </Link>

                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center rounded-full bg-green-700 p-2 text-sm text-white focus:outline-none  md:hidden"
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
                <div
                    className={` w-full items-center justify-between md:order-1 md:flex md:w-auto ${
                        isOpen ? "block" : "hidden"
                    }`}
                    id="navbar-cta"
                >
                    <ul className="mt-4 flex flex-col rounded-lg bg-green-800/70 p-4 backdrop-blur-xl  md:mt-0  md:flex-row md:space-x-8 md:bg-transparent md:text-sm md:font-medium md:backdrop-blur-none lg:space-x-12">
                        <li className="flex flex-row items-center space-x-2 ">
                            <FaHome className="text-2xl text-green-300 " />
                            <Link
                                href="/"
                                className="block rounded py-2 pl-3 pr-4 text-xl text-green-300  md:bg-transparent  md:p-0 md:hover:text-green-700"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="flex flex-row items-center space-x-2">
                            <FaUtensilSpoon className="text-2xl text-green-300 " />
                            <Link
                                href="/menu"
                                className="block rounded py-2 pl-3 pr-4 text-xl  text-green-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                            >
                                Menu
                            </Link>
                        </li>
                        <li className="flex flex-row items-center space-x-2">
                            <FaBookOpen className="text-2xl text-green-300" />
                            <Link
                                href="/catering"
                                className="block rounded py-2 pl-3 pr-4 text-xl text-green-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                            >
                                Catering
                            </Link>
                        </li>
                        <li className="flex flex-row items-center space-x-2">
                            <FaBuilding className="text-2xl text-green-300" />
                            <Link
                                href="/about"
                                className="block rounded py-2 pl-3 pr-4 text-xl  text-green-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
