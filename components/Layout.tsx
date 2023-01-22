import { useRouter } from "next/router"
import React from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

type LayoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    const router = useRouter()
    //get the current route
    const { route } = router
    var currentRoute = route.split("/")[1]
    return (
        <>
            {currentRoute === "cms" ? (
                <>{children}</>
            ) : (
                <>
                    <Navbar />
                    {children}
                    <Footer />
                </>
            )}
        </>
    )
}
export default Layout
