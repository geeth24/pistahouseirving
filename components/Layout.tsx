import React, { useState, Suspense } from "react"
import ScrollToTop from "./ScrollToTop"
import dynamic from "next/dynamic"
import { Flex } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { removeFromOrder, addToOrder } from "../redux/order"
import Link from "next/link"

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
    const { order } = useSelector((state: any) => state.order)
    const dispatch = useDispatch()

    const [isAdded, setIsAdded] = React.useState(false)
    const toast = useToast()

    var item = null

    //
    item = order.split(", ").map((title: any) => {
        if (order.includes(title) && title !== "") {
            return (
                <MenuItem
                    key={title}
                    onClick={() => {
                        if (
                            order.includes(title) &&
                            title !== "Your Selections:"
                        ) {
                            dispatch(removeFromOrder(title))
                            setIsAdded(false)
                            toast({
                                title: "Removed from Order",
                                description: `${title} has been removed from your order`,
                                status: "error",
                                duration: 3000,
                                isClosable: true,
                            })
                        } else if (title !== "Your Selections:") {
                            dispatch(addToOrder(title))
                            setIsAdded(true)
                            toast({
                                title: "Added to Order",
                                description: `${title} has been added to your order`,
                                status: "success",
                                duration: 3000,
                                isClosable: true,
                            })
                        }
                    }}
                >
                    {title}
                </MenuItem>
            )
        } else {
            return null
        }
    })
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
                <Box position="fixed" bottom="5" right="5">
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            colorScheme="whatsapp"
                            variant="solid"
                            size="lg"
                            zIndex="1000"
                            rounded="full"
                            icon={<FaWhatsapp />}
                        >
                            Order
                        </MenuButton>
                        <MenuList>
                            {item}
                            <MenuItem
                                as={Button}
                                variant="solid"
                                size="sm"
                                color={useColorModeValue("#047f69", "#beeca0")}
                                bg={useColorModeValue("#beeca0", "#047f69")}
                                _hover={{
                                    bg: useColorModeValue("#047f69", "#beeca0"),
                                    color: useColorModeValue(
                                        "#beeca0",
                                        "#047f69"
                                    ),
                                }}
                                _active={{
                                    bg: useColorModeValue("#047f69", "#beeca0"),
                                    color: useColorModeValue(
                                        "#beeca0",
                                        "#047f69"
                                    ),
                                }}
                                onClick={() => {
                                    //loop through order and add index 1. to each item
                                    var orderArray = order.split(", ")
                                    var orderArray2 = []
                                    for (
                                        var i = 1;
                                        i < orderArray.length;
                                        i++
                                    ) {
                                        orderArray2.push(
                                            i + ". " + orderArray[i]
                                        )
                                    }
                                    var orderString = orderArray2.join("%0A")
                                    var orderString2 = orderString
                                        .toLowerCase()
                                        .replace(
                                            /\b[a-z]/g,
                                            (letter) => letter.toUpperCase()
                                        )


                                    return (window.location.href =
                                        "https://api.whatsapp.com/send?phone=12143042304&text=" +
                                        "Hello, I would like to order the following: %0A" +
                                        orderString2
                                            .replace("Your Selections:,", "")
                                            .replace(/,/g, "%0A"))
                                }}
                            >
                                Order
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Suspense>
        </>
    )
}

export default Layout
