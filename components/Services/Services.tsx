import React from "react"
import {
    chakra,
    Box,
    useColorModeValue,
    Stack,
    Image,
    Flex,
    Button,
    VStack,
} from "@chakra-ui/react"
import Link from "next/link"

const Services = () => {
    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("#ffffff", "#1a202c")}
                px={8}
                py={8}
                mx="auto"
                gap={8}
            >
                {" "}
                <Box
                    w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                    mx="auto"
                    alignItems={"center"}
                    justifyContent={"center"}
                    display="flex"
                >
                    <chakra.h2
                        fontSize={{ base: "5xl", sm: "6xl" }}
                        fontWeight="extrabold"
                        lineHeight="shorter"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        mb={6}
                    >
                        <chakra.span
                            display="block"
                            color={useColorModeValue("#6ba644", "#beeca0")}
                        >
                            Dine In / Take Out
                        </chakra.span>
                    </chakra.h2>
                </Box>
                <Box
                    w={{ base: "full", md: 10 / 12 }}
                    mx="auto"
                    textAlign="center"
                >
                    <Image
                        w="full"
                        rounded="lg"
                        shadow="2xl"
                        src="/dinein.png"
                        alt="Dine in"
                    />
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("#ffffff", "#1a202c")}
                px={8}
                py={8}
                mx="auto"
                gap={8}
            >
                <Box
                    w={{ base: "full", md: 10 / 12 }}
                    mx="auto"
                    textAlign="center"
                >
                    <Image
                        w="full"
                        rounded="lg"
                        shadow="2xl"
                        src="/cater.jpeg"
                        alt="Catering"
                    />
                </Box>

                <Box
                    w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                    mx="auto"
                    alignItems={"center"}
                    justifyContent={"center"}
                    display="flex"
                >
                    <VStack spacing={4}>
                        <chakra.h2
                            fontSize={{ base: "5xl", sm: "6xl" }}
                            fontWeight="extrabold"
                            lineHeight="shorter"
                            color={useColorModeValue("#6ba644", "#beeca0")}
                            mb={6}
                        >
                            <chakra.span
                                display="block"
                                color={useColorModeValue("#6ba644", "#beeca0")}
                            >
                                Catering
                            </chakra.span>
                        </chakra.h2>

                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            mb={{ base: 4, md: 8 }}
                            spacing={2}
                        >
                            <Link href="/catering">
                                <Button
                                    as="a"
                                    variant="ghost"
                                    mt={5}
                                    color="white"
                                    bg="#047f69"
                                    _hover={{ color: "#047f69", bg: "#beeca0" }}
                                    cursor="pointer"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                </Box>
            </Flex>
        </>
    )
}

export default Services
