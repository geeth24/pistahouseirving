//@ts-nocheck
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

    //if scroll is at the top of the page, the navbar will be transparent
    //if scroll is not at the top of the page, the navbar will be solid
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
        <>
            <IconContext.Provider value={{ color: "#10c60f" }}>
                <Nav theme={colorMode} scrollNav={scrollNav}>
                    <Link href="/">
                        <NavLogo>
                            <NavLogoImage
                                src="/pistahouselogo.png"
                                alt="logo"
                                width={150}
                                height={60}
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
                            bg="#06bd9c"
                            _hover={{ color: "#06bd9c", bg: "#beeca0" }}
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
