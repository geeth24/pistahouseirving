import { Flex, Heading, Link, VStack } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"

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
                    <Heading
                        fontSize={{
                            base: "xl",
                            md: "2xl",
                        }}
                    >
                        Please call us at:{" "}
                        <Link href="tel:+1 (972) 635-5657" color="#047f69">
                            +1 (972) 635-5657
                        </Link>
                    </Heading>
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
