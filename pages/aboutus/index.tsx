import React from "react"
import { SimpleGrid, Image, Box, chakra, Flex } from "@chakra-ui/react"
import Head from "next/head"
import Testimonials from "../../components/Testimonials/Testimonials"
import { logEvent } from "firebase/analytics"
import { analytics } from "../../components/Firebase"

const Aboutus = () => {
    const [logged, setLogged] = React.useState(false)

    if (process.env.ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "About Us",
                page_location: "https://www.pistahouseirving.com/aboutus",
                page_path: "/aboutus",
            })
            setLogged(true)
        }
    } else {
        if (!logged) {
            console.log("development")
            setLogged(true)
        }
    }

    return (
        <>
            <Head>
                <title>About Us | Pista House Irving</title>
            </Head>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                }}
                spacing={0}
                mt={20}
            >
                <Flex>
                    <Image
                        src="/sign.png"
                        alt="Sign"
                        fit="contain"
                        w="full"
                        h={{
                            base: 64,
                            md: "full",
                        }}
                        loading="lazy"
                    />
                </Flex>
                <Flex
                    direction="column"
                    alignItems="start"
                    justifyContent="center"
                    px={{
                        base: 4,
                        md: 8,
                        lg: 20,
                    }}
                    py={24}
                    zIndex={3}
                >
                    <chakra.span
                        color="#06bd9c"
                        _dark={{
                            color: "gray.300",
                        }}
                        fontSize="lg"
                        textTransform="uppercase"
                        fontWeight="extrabold"
                    >
                        Who We Are
                    </chakra.span>
                    <chakra.h1
                        mb={4}
                        fontSize={{
                            base: "4xl",
                            md: "4xl",
                            lg: "5xl",
                        }}
                        fontWeight="bold"
                        color="#06bd9c"
                        _dark={{
                            color: "gray.300",
                        }}
                        lineHeight="shorter"
                        textShadow="2px 0 currentcolor"
                    >
                        About Us
                    </chakra.h1>
                    <chakra.p
                        pr={{
                            base: 0,
                            lg: 16,
                        }}
                        mb={4}
                        fontSize="lg"
                        color="#06bd9c"
                        _dark={{
                            color: "#06bd9c",
                        }}
                        letterSpacing="wider"
                    >
                        PistaHouse Irving is a celebration of Indian culture,
                        flavours and hospitality. Immerse yourself in a sensory
                        spice experience and awaken your tastebuds with our
                        modern Indian menu, showcasing the very best of Indias
                        exotic flavours. <br />
                        <br />
                        PistaHouse Irving food is inspired by traditional Indian
                        dishes, served with a modern twist, and we pride
                        ourselves on using the freshest, most seasonal produce.{" "}
                        <br />
                        <br />
                        We believe that the best form of hospitality is that
                        found in the home, and it is our aim to bring that
                        welcoming, relaxed environment to our guests at
                        PistaHouse Irving Cuisine.
                    </chakra.p>
                    <Box display="inline-flex" rounded="md" shadow="md">
                        <chakra.a
                            mt={2}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            w="full"
                            rounded="md"
                            _light={{
                                color: "white",
                            }}
                            bg="#06bd9c"
                            _dark={{
                                bg: "#06bd9c",
                            }}
                            _hover={{
                                bg: "#06bd9c",
                                _dark: {
                                    bg: "#06bd9c",
                                },
                            }}
                            href="/contactus"
                        >
                            Contact Us
                        </chakra.a>
                    </Box>
                </Flex>
            </SimpleGrid>
            <Testimonials />
        </>
    )
}

export default Aboutus
