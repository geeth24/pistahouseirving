import React from "react"
import Link from "next/link"
import Image from "next/image"
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si"
function Footer() {
    return (
        <footer className="p-4  py-[13px] px-[16px] md:px-[4vw] lg:pt-[35px]">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/" className=" flex items-center ">
                    <Image
                        src="/pistahouselogo.png"
                        alt="Pista House Logo"
                        width={150}
                        height={50}
                    />
                </Link>

                <ul className="flex  flex-wrap items-center text-sm text-pistaMidGreen ">
                    <li>
                        <Link
                            href="/"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/menu"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/catering"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            Catering
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <hr className="my-3 border-pistaGreen sm:mx-auto lg:my-4" />
            <p className="mt-2  text-sm text-pistaMidGreen sm:text-center">
                <Link href="tel:+1 (972) 635-5657" className="underline">
                    +1 (972) 635-5657{" "}
                </Link>{" "}
                |{" "}
                <Link
                    href="https://www.google.com/maps/search/?api=1&query=pista house irving texas"
                    className="underline"
                >
                    901 W Royal Ln, Irving, TX 75039.
                </Link>
            </p>
            <span className="block  text-sm text-pistaMidGreen sm:text-center">
                © {new Date().getFullYear()} Pista House Irving. All rights
                reserved.
            </span>
            <span className="block  text-sm text-pistaMidGreen sm:text-center">
                Built with{" "}
                <Link href="https://nextjs.org/" className="hover:underline">
                    <SiNextdotjs className="inline-block h-4 w-4" />
                </Link>{" "}
                <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                >
                    <SiTailwindcss className="inline-block h-4 w-4" />
                </Link>{" "}
                <Link
                    href="https://www.framer.com/motion/"
                    className="hover:underline"
                >
                    <SiFramer className="inline-block h-4 w-4" />
                </Link>{" "}
                by{" "}
                <Link href="https://geethg.com" className="underline">
                    Geeth Gunnampalli
                </Link>
            </span>
        </footer>
    )
}

export default Footer
