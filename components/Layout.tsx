import React, { useState, Suspense } from "react"
import ScrollToTop from "./ScrollToTop"
import dynamic from "next/dynamic"
import { Flex } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import {
    Box,
    Button,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
    useDisclosure,
    useToast,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { removeFromOrder } from "../redux/order"
import { useRouter } from "next/router"
import { logEvent } from "firebase/analytics"
import { analytics } from "./Firebase"

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
            <Spinner size="xl" thickness="4px" speed="0.65s" color="#06bd9c" />
        </Flex>
    )
    const { order } = useSelector((state: any) => state.order)
    const dispatch = useDispatch()

    const [isAdded, setIsAdded] = React.useState(false)
    const toast = useToast()
    const router = useRouter()

    const [name, setName] = useState("")
    const [partySize, setPartySize] = useState(0)
    const [date, setDate] = useState("")

    const {
        isOpen: isModelOpen,
        onOpen: onModelOpen,
        onClose: onModelClose,
    } = useDisclosure()
    var item = null

    //
    item = order.split(", ").map((title: any) => {
        if (
            order.includes(title) &&
            title !== "" &&
            title !== "Your Selections:"
        ) {
            return (
                <MenuItem
                    key={title}
                    onClick={() => {
                        if (
                            order.includes(title) &&
                            title !== "Your Selections:"
                        ) {
                            console.log("title", title)
                            dispatch(removeFromOrder(title + ", "))
                            setIsAdded(false)
                            toast({
                                title: "Removed from Order",
                                description: `${title} has been removed from your order`,
                                status: "error",
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
                <Modal
                    onClose={onModelClose}
                    isOpen={isModelOpen}
                    isCentered
                    motionPreset="slideInBottom"
                    scrollBehavior="inside"
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Get a Quote</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack spacing={4} align="flex-start">
                                <Text fontSize="md">
                                    Please fill out the form to get in touch
                                    with Pista House
                                </Text>
                                <Text fontSize="sm">Name</Text>
                                <Input
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Text fontSize="sm">Party Size</Text>
                                <Input
                                    placeholder="Party Size"
                                    inputMode="numeric"
                                    onChange={(e) =>
                                        setPartySize(parseInt(e.target.value))
                                    }
                                />
                                <Text fontSize="sm">Date</Text>
                                <Input
                                    placeholder="Date"
                                    type="date"
                                    onChange={(e) => setDate(e.target.value)}
                                    sx={{
                                        ":after": {
                                            color: "whatsapp",
                                            content: " attr(placeholder)",
                                            alignItems: "center",
                                        },
                                    }}
                                />
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                            <HStack spacing={4}>
                                <Button
                                    onClick={onModelClose}
                                    colorScheme="red"
                                >
                                    Close
                                </Button>

                                <Button
                                    isDisabled={
                                        name === "" ||
                                        partySize === 0 ||
                                        date === ""
                                    }
                                    colorScheme="whatsapp"
                                    mr={3}
                                    onClick={() => {
                                        //change format to MM/DD/YYYY
                                        var dateArray = date.split("-")
                                        var newDate =
                                            dateArray[1] +
                                            "/" +
                                            dateArray[2] +
                                            "/" +
                                            dateArray[0]
                                        setDate(newDate)

                                        //loop through order and add index 1. to each item
                                        var orderArray = order.split(", ")
                                        var orderArray2 = []
                                        for (
                                            var i = 1;
                                            i < orderArray.length;
                                            i++
                                        ) {
                                            if (
                                                orderArray[i] !== " " &&
                                                orderArray[i] !== "" &&
                                                orderArray[i] !== "\n"
                                            ) {
                                                console.log(orderArray[i])
                                                orderArray2.push(
                                                    `${i}. ${orderArray[i]}`
                                                )
                                            }
                                        }
                                        var orderString =
                                            orderArray2.join("%0A")
                                        var orderString2 = orderString
                                            .toLowerCase()
                                            .replace(/\b[a-z]/g, (letter) =>
                                                letter.toUpperCase()
                                            )

                                        console.log(orderString2)
                                        if (
                                            process.env.ENVIRONMENT ===
                                            "production"
                                        ) {
                                            logEvent(analytics, "quote", {
                                                name: name,
                                                partySize: partySize,
                                                date: date,
                                                order: orderString2,
                                            })
                                        }

                                        console.log(
                                            "https://api.whatsapp.com/send?phone=12143042304&text=" +
                                                "Hello, I would like to get a quote for these items: " +
                                                "%0A" +
                                                "Items: " +
                                                "%0A" +
                                                orderString2
                                                    .replace(
                                                        "Your Selections:,",
                                                        ""
                                                    )
                                                    .replace(/,/g, "%0A") +
                                                "%0A" +
                                                "Name: " +
                                                name +
                                                "%0A" +
                                                "Party Size: " +
                                                partySize +
                                                "%0A" +
                                                "Date: " +
                                                date +
                                                "%0A"
                                        )
                                        return (window.location.href =
                                            "https://api.whatsapp.com/send?phone=12143042304&text=" +
                                            "Hello, I would like to get a quote for these items: " +
                                            "%0A" +
                                            "Items: " +
                                            "%0A" +
                                            orderString2
                                                .replace(
                                                    "Your Selections:,",
                                                    ""
                                                )
                                                .replace(/,/g, "%0A") +
                                            "%0A" +
                                            "Name: " +
                                            name +
                                            "%0A" +
                                            "Party Size: " +
                                            partySize +
                                            "%0A" +
                                            "Date: " +
                                            date +
                                            "%0A")
                                    }}
                                    leftIcon={<FaWhatsapp />}
                                >
                                    Open WhatsApp
                                </Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Box position="fixed" bottom="50px" right="50px">
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            colorScheme="whatsapp"
                            variant="solid"
                            size="lg"
                            zIndex="1000"
                            rounded="full"
                            icon={<FaWhatsapp />}
                            onClick={() => {
                                if (router.pathname !== "/catering") {
                                    router.push("/catering?order=true")
                                }
                            }}
                        >
                            Get a Quote
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Text>Your Selections:</Text>
                            </MenuItem>

                            {item}
                            <MenuItem
                                as={Button}
                                variant="solid"
                                size="sm"
                                color={useColorModeValue("#06bd9c", "#beeca0")}
                                bg={useColorModeValue("#beeca0", "#06bd9c")}
                                _hover={{
                                    bg: useColorModeValue("#06bd9c", "#beeca0"),
                                    color: useColorModeValue(
                                        "#beeca0",
                                        "#06bd9c"
                                    ),
                                }}
                                _active={{
                                    bg: useColorModeValue("#06bd9c", "#beeca0"),
                                    color: useColorModeValue(
                                        "#beeca0",
                                        "#06bd9c"
                                    ),
                                }}
                                onClick={onModelOpen}
                            >
                                Get a Quote
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Suspense>
        </>
    )
}

export default Layout
