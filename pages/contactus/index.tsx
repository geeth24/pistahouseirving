import { Flex, Heading, Link, VStack } from "@chakra-ui/react"
import {  logEvent } from "firebase/analytics"
import Head from "next/head"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { analytics } from "../../components/Firebase"

export default function ContactUs() {
    const [logged, setLogged] = React.useState(false)

    if (process.env.ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "Contact Us",
                page_location: "https://www.pistahouseirving.com/contactus",
                page_path: "/contactus",
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
                        color="#06bd9c"
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
                            color="#06bd9c"
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
