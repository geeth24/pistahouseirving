import { Flex, Badge, Text, useColorMode, Button } from "@chakra-ui/react"
import React from "react"
import {
    HeroBg,
    HeroContainer,
    HeroContent,
    Examplebox,
    ExampleboxDark,
} from "./HeroElements"
import { motion } from "framer-motion"
import Link from "next/link"
const Hero = () => {
    const { colorMode } = useColorMode()

    var back = <motion.div />

    if (colorMode === "light") {
        back = (
            <Examplebox>
                <motion.div
                    className="background-shapes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: "2" }}
                />
            </Examplebox>
        )
    } else {
        back = (
            <ExampleboxDark>
                <motion.div
                    className="background-shapes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: "2" }}
                />
            </ExampleboxDark>
        )
    }

    return (
        <HeroContainer>
            <HeroBg>{back}</HeroBg>
            <HeroContent>
                <Flex
                    direction="column"
                    alignItems={{ base: "flex-start", md: "center" }}
                    justifyContent="center"
                    px={{ base: 4, lg: 20 }}
                    py={24}
                >
                    <Badge
                        color="white"
                        backgroundColor="transparent"
                        // variant="solid"
                        fontSize={["xs", "sm", "md", "lg"]}
                        // rounded="full"
                        p={2}
                    >
                        Authentic Hyderabadi Food
                    </Badge>
                    <Text
                        fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
                        fontWeight="bold"
                        color="#ffffff"
                    >
                        Pista House Texas
                    </Text>

                    <Text fontSize="xl" color="#eeeeee">
                        Celebration of Indian culture, flavours and hospitality
                    </Text>
                    <Link href="/contactus">
                        <Button
                            as="a"
                            variant="ghost"
                            mt={5}
                            color="white"
                            bg="#06bd9c"
                            _hover={{ color: "#06bd9c", bg: "#beeca0" }}
                            cursor="pointer"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </Flex>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
