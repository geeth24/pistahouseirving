import React from "react"
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideMenu,
    SidebarLink,
} from "./SidebarElements"
import { useColorMode } from "@chakra-ui/react"
import Link from "next/link"

type SidebarProps = {
    isOpen: boolean
    toggle: () => void
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
    const { colorMode } = useColorMode()

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} theme={colorMode}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SideMenu>
                    <Link href="/">
                        <SidebarLink onClick={toggle}>Home</SidebarLink>
                    </Link>
                    <Link href="/menu">
                        <SidebarLink onClick={toggle}>Menu</SidebarLink>
                    </Link>
                    <Link href="/catering">
                        <SidebarLink onClick={toggle}>Catering</SidebarLink>
                    </Link>
                    <Link href="/aboutus">
                        <SidebarLink onClick={toggle}>About Us</SidebarLink>
                    </Link>
                    <Link href="/contactus">
                        <SidebarLink onClick={toggle}>Contact Us</SidebarLink>
                    </Link>
                </SideMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
