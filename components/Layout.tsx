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
import { removeFromOrder, addToOrder } from "../redux/order"
import { useRouter } from "next/router"

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
                <Modal
                    onClose={onModelClose}
                    isOpen={isModelOpen}
                    isCentered
                    motionPreset="slideInBottom"
                    scrollBehavior="inside"
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Order Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack spacing={4}>
                                <Text fontSize="md">
                                    Please fill out the form below to place your
                                    order.
                                </Text>
                                <Input
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input
                                    placeholder="Party Size"
                                    onChange={(e) =>
                                        setPartySize(parseInt(e.target.value))
                                    }
                                />
                                <Input
                                    placeholder="Date"
                                    type="date"
                                    date-format="MM/DD/YYYY"
                                    onChange={(e) => setDate(e.target.value)}
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
                                            if (orderArray[i] !== "") {
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

                                        return (window.location.href =
                                            "https://api.whatsapp.com/send?phone=12143042304&text=" +
                                            "Hello, I would like to place an order" +
                                            "%0A" +
                                            "Name: " +
                                            name +
                                            "%0A" +
                                            "Party Size: " +
                                            partySize +
                                            "%0A" +
                                            "Date: " +
                                            date +
                                            "%0A" +
                                            "%0A" +
                                            "Items: " +
                                            "%0A" +
                                            orderString2
                                                .replace(
                                                    "Your Selections:,",
                                                    ""
                                                )
                                                .replace(/,/g, "%0A"))
                                    }}
                                    leftIcon={<FaWhatsapp />}
                                >
                                    Place Order
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
                                onClick={onModelOpen}
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
