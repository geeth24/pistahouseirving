import React from "react"
import { Box, useColorModeValue, Text } from "@chakra-ui/react"

type MenuCardsProps = {
    title: string
    description: string
    price: string
}

const MenuCards = ({ title, description }: MenuCardsProps) => {
    return (
        <Box
            w={["xs", "sm", "md"]}
            bg={useColorModeValue("gray.50", "#2D3748")}
            color={useColorModeValue("#06bd9c", "#beeca0")}
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
                <Text fontWeight="700" fontSize="xl" textTransform="uppercase">
                    {title}
                </Text>
                <Text mt={1} fontSize="md" color="#06bd9c">
                    {description}
                </Text>
                {/* <Badge colorScheme="green" fontSize="sm" rounded={50}>
                    {price}
                </Badge> */}
            </Box>
        </Box>
    )
}

export default MenuCards
