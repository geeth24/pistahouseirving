import { Button, useColorMode } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLogoImage,
} from "./NavbarElements"

type NavbarProps = {
    toggle: () => void
}

const Navbar = ({ toggle }: NavbarProps) => {
    const { colorMode } = useColorMode()

    return (
        <>
            <IconContext.Provider value={{ color: "#6ba644" }}>
                <Nav theme={colorMode}>
                    <Link href="/">
                        <NavLogo>
                            <NavLogoImage
                                src="/pistahouselogo.png"
                                alt="logo"
                                width="100px"
                                height="40px"
                            />
                        </NavLogo>
                    </Link>
                    <NavbarContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <Link href="/">
                                    <NavLinks>Home</NavLinks>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/menu">
                                    <NavLinks>Menu</NavLinks>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/catering">
                                    <NavLinks>Catering</NavLinks>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/aboutus">
                                    <NavLinks>About Us</NavLinks>
                                </Link>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                    <Link href="/contactus">
                        <Button
                            as="a"
                            variant="ghost"
                            color="white"
                            bg="#047f69"
                            _hover={{ color: "#047f69", bg: "#beeca0" }}
                            cursor="pointer"
                            sx={{
                                "@media screen and (max-width: 900px)": {
                                    display: "none",
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Link>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
