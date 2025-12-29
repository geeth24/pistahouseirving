"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useOrder } from "@/contexts/order-context"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const pathname = usePathname()
    const { order } = useOrder()
    const [open, setOpen] = useState(false)
    
    return (
        <>
            <Navbar />
            
            <main className="min-h-screen pt-20 overflow-x-hidden">
                {children}
            </main>
            
            <Footer />

            {/* Order Dialog for Catering Page */}
            {pathname?.includes('/catering') && (
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-background-dark/75 backdrop-blur-sm transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-background-card p-6 text-left shadow-xl transition-all">
                                        <div className="absolute top-0 right-0 block pt-4 pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md bg-background-card text-text-light hover:text-text focus:outline-none"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-text-dark">
                                                Your Catering Selections
                                            </Dialog.Title>
                                            <div className="mt-4">
                                                <p className="text-sm text-text-light">
                                                    {order ? (
                                                        <div className="mt-4 text-left">
                                                            {order.split(", ").map((title: string, index: number) => {
                                                                if (title && title !== "Your Selections:") {
                                                                    return (
                                                                        <div key={index} className="mb-2 flex items-center justify-between border-b border-gray-200 pb-2">
                                                                            <span>{title}</span>
                                                                        </div>
                                                                    )
                                                                }
                                                                return null
                                                            })}
                                                        </div>
                                                    ) : (
                                                        <p>No items selected yet</p>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:mt-8">
                                            <button
                                                type="button"
                                                className="primary-button w-full"
                                                onClick={() => {
                                                    // Redirect to WhatsApp with the order
                                                    const orderItems = order.split(", ")
                                                        .filter((item: string) => item && item !== "Your Selections:")
                                                        .map((item: string, i: number) => `${i + 1}. ${item}`)
                                                        .join("%0A");
                                                    
                                                    if (orderItems) {
                                                        window.open(
                                                            `https://api.whatsapp.com/send?phone=16823800209&text=Hello, I would like to get a quote for these items:%0A%0AItems:%0A${orderItems}%0A`,
                                                            "_blank"
                                                        );
                                                    }
                                                    
                                                    setOpen(false);
                                                }}
                                            >
                                                Request Quote via WhatsApp
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            )}
        </>
    )
}

export default Layout
