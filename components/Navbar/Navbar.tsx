import { Button, HStack, useColorMode } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import {
    FaBars,
    FaBookOpen,
    FaBuilding,
    FaHome,
    FaUtensilSpoon,
} from "react-icons/fa"
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
                                    <NavLinks>
                                        <HStack>
                                            <FaHome />
                                            <span>Home</span>
                                        </HStack>
                                    </NavLinks>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/menu">
                                    <NavLinks>
                                        <HStack>
                                            <FaBookOpen />
                                            <span>Menu</span>
                                        </HStack>
                                    </NavLinks>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/catering">
                                    <NavLinks>
                                        <HStack>
                                            <FaUtensilSpoon />
                                            <span>Catering</span>
                                        </HStack>
                                    </NavLinks>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/aboutus">
                                    <NavLinks>
                                        <HStack>
                                            <FaBuilding />
                                            <span>About Us</span>
                                        </HStack>
                                    </NavLinks>
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
