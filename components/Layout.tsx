import React, { useState, Suspense } from "react"
import ScrollToTop from "./ScrollToTop"
import dynamic from "next/dynamic"
import { Flex } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import { useColorModeValue } from "@chakra-ui/react"

type LayoutProps = {
    children: React.ReactNode
}

const Navbar = dynamic(() => import("./Navbar/Navbar"), {
    suspense: true,
})
const Footer = dynamic(() => import("./Footer/Footer"), {
    suspense: true,
})
const Sidebar = dynamic(() => import("./Sidebar/Sidebar"), {
    suspense: true,
})

const Layout = ({ children }: LayoutProps) => {
    const colorMode = useColorModeValue("white", "rgb(26 32 44)")
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const renderLoader = () => (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" thickness="4px" speed="0.65s" color="#047f69" />
        </Flex>
    )

    return (
        <>
            <Suspense fallback={renderLoader()}>
                <div
                    style={{
                        backgroundColor: colorMode,
                    }}
                >
                    <ScrollToTop />
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Navbar toggle={toggle} />
                    {children}
                    <Footer />
                </div>
            </Suspense>
        </>
    )
}

export default Layout
