"use client"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPhone, FaEnvelope, FaTimes, FaListUl } from "react-icons/fa"
import { useOrder } from "@/contexts/order-context"

const PHONE = "9726355657"
const EMAIL = "info@pistahouseirving.com"

function buildEmail(items: string[]) {
    const lines = items.map((t, i) => `${i + 1}. ${t}`).join("\r\n")
    const body = `Hello Pista House,\r\n\r\nI'd like a catering quote for the following:\r\n\r\n${lines}\r\n\r\nEvent date:\r\nGuest count:\r\nName:\r\n`
    return `mailto:${EMAIL}?subject=${encodeURIComponent("Catering quote request")}&body=${encodeURIComponent(body)}`
}

function CateringSelection() {
    const { items, removeItem, clearOrder } = useOrder()
    const [open, setOpen] = useState(false)
    const count = items.length

    return (
        <>
            {/* sticky selection bar */}
            <AnimatePresence>
                {count > 0 && (
                    <motion.div
                        className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4"
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    >
                        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-background-card px-5 py-3 shadow-[0_18px_50px_-12px_rgba(29,27,22,0.35)]">
                            <p className="text-sm text-ink">
                                <span className="font-semibold text-primary-dark">{count}</span> {count === 1 ? "item" : "items"} selected
                            </p>
                            <button
                                onClick={() => setOpen(true)}
                                className="primary-button px-5 py-2 text-sm"
                            >
                                <FaListUl className="text-xs" />
                                Review selection
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* review panel */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                        leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 sm:items-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg rounded-2xl border border-ink/10 bg-background-card p-6 text-left shadow-2xl">
                                    <div className="mb-5 flex items-start justify-between">
                                        <div>
                                            <Dialog.Title as="h3" className="font-display text-2xl text-ink">Your catering selection</Dialog.Title>
                                            <p className="mt-1 text-sm text-ink-soft">Send us the list and we&rsquo;ll reply with a quote.</p>
                                        </div>
                                        <button onClick={() => setOpen(false)} className="text-ink-soft transition-colors hover:text-ink" aria-label="Close">
                                            <FaTimes className="text-lg" />
                                        </button>
                                    </div>

                                    {count === 0 ? (
                                        <p className="py-8 text-center text-ink-soft">No items selected yet.</p>
                                    ) : (
                                        <ul className="max-h-64 space-y-1 overflow-y-auto pr-1">
                                            {items.map((title) => (
                                                <li key={title} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 hover:bg-primary/5">
                                                    <span className="text-ink">{title}</span>
                                                    <button onClick={() => removeItem(title)} className="text-ink-soft transition-colors hover:text-error" aria-label={`Remove ${title}`}>
                                                        <FaTimes className="text-sm" />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                        <a href={`tel:${PHONE}`} className="primary-button flex-1">
                                            <FaPhone className="text-sm" /> Call to order
                                        </a>
                                        <a href={buildEmail(items)} className="outline-button flex-1">
                                            <FaEnvelope className="text-sm" /> Email your list
                                        </a>
                                    </div>

                                    {count > 0 && (
                                        <button onClick={clearOrder} className="mx-auto mt-4 block text-sm text-ink-soft transition-colors hover:text-ink">
                                            Clear selection
                                        </button>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default CateringSelection
