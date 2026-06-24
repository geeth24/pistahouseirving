"use client"

import React from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen overflow-x-hidden bg-background pt-[72px]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
