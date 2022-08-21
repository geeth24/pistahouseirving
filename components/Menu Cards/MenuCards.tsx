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
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
                <Text
                    color={useColorModeValue("#6ba644", "#beeca0")}
                    fontWeight="700"
                    fontSize="xl"
                    textTransform="uppercase"
                >
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

export default MenuCards
