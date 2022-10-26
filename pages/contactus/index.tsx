import { Flex, Heading, Link, VStack } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us | Pista House Texas</title>
            </Head>
            <Flex justifyContent="center" alignItems="center" height="60vh">
                <VStack
                    spacing={{ base: 4, md: 8, lg: 20 }}
                    alignItems="center"
                >
                    <Heading
                        fontSize={{
                            base: "4xl",
                            md: "5xl",
                        }}
                    >
                        To Contact Us
                    </Heading>
                    <Link
                        href="https://api.whatsapp.com/send?phone=12143042304"
                        color="#047f69"
                    >
                        <FaWhatsapp size="15rem" /> <br />
                        <Heading
                            fontSize={{
                                base: "2xl",
                                md: "3xl",
                            }}
                        >
                            Please Click Here
                        </Heading>
                    </Link>
                    <Heading
                        fontSize={{
                            base: "xl",
                            md: "2xl",
                        }}
                    >
                        Or walk in to our restaurant at: <br />
                        <Link
                            href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving"
                            color="#047f69"
                            isExternal
                        >
                            901 W Royal Ln, Irving, TX 75039.
                        </Link>
                    </Heading>
                </VStack>
            </Flex>
        </>
    )
}
