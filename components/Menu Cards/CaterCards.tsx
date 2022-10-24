import React from "react"
import { Box, useColorModeValue, Text, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { addToOrder, removeFromOrder } from "../../redux/order"

type CaterCardsProps = {
    title: string
    description: string
    price: string
}

const CaterCards = ({ title, description }: CaterCardsProps) => {
    const { order } = useSelector((state: any) => state.order)
    const dispatch = useDispatch()

    const [isAdded, setIsAdded] = React.useState(false)
    const toast = useToast()

    return (
        <Box
            w={["xs", "sm", "md"]}
            bg={useColorModeValue(
                isAdded ? "#047f69" : "gray.50",
                isAdded ? "#beeca0" : "#2D3748"
            )}
            color={useColorModeValue(
                isAdded ? "#beeca0" : "#047f69",
                isAdded ? "#047f69" : "#beeca0"
            )}
            shadow="lg"
            rounded="lg"
            _hover={{
                shadow: "xl",
                cursor: "pointer",
                opacity: 0.8,
                transform: "scale(1.05)",
                transition: "all 0.2s ease-in-out",
                backgroundColor: useColorModeValue("#047f69", "#beeca0"),
                color: useColorModeValue("#beeca0", "#047f69"),
            }}
            transition="all 0.2s ease-in-out"
            onClick={() => {
                //if the order string has the title, remove it from the order
                if (order.includes(title)) {
                    dispatch(removeFromOrder(title+", "))
                    setIsAdded(false)
                    toast({
                        title: "Removed from Order",
                        description: `${title} has been removed from your order`,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        position: "top",

                        size: "sm",
                    })
                } else {
                    dispatch(addToOrder(title))
                    setIsAdded(true)
                    toast({
                        title: "Added to Order",
                        description: `${title} has been added to your order`,
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",

                        size: "sm",
                    })
                }
            }}
        >
            <Box px={4} py={2}>
                <Text fontWeight="700" fontSize="xl" textTransform="uppercase">
                    {title}
                </Text>
                <Text mt={1} fontSize="md" color="#047f69">
                    {description}
                </Text>
                {/* <Badge colorScheme="green" fontSize="sm" rounded={50}>
                    {price}
                </Badge> */}
            </Box>
        </Box>
    )
}

export default CaterCards