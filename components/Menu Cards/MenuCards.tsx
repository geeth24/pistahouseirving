import React from "react"
import { chakra, Box, useColorModeValue, Badge } from "@chakra-ui/react"

type MenuCardsProps = {
    title: string
    description: string
    price: string
}

const MenuCards = ({ title, description, price }: MenuCardsProps) => {
    return (
        <Box
            w={["xs", "sm", "md"]}
            bg={useColorModeValue("white", "#2D3748")}
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
                <chakra.h1
                    color={useColorModeValue("#6ba644", "#beeca0")}
                    fontWeight="bold"
                    fontSize="2xl"
                    textTransform="uppercase"
                >
                    {title}
                </chakra.h1>
                <chakra.p mt={1} fontSize="md" color="#047f69">
                    {description}
                </chakra.p>
                <Badge colorScheme="green" fontSize="sm" rounded={50}>
                    {price}
                </Badge>
            </Box>
        </Box>
    )
}

export default MenuCards
