import { Flex, Image } from "@chakra-ui/react"
import Head from "next/head"
import React, { useEffect } from "react"

const Four = () => {
    useEffect(() => {
        //redirect to home page after 5 seconds
        setTimeout(() => {
            window.location.href = "/"
        }, 2000)
    }, [])
    return (
        <>
            <Head>
                <title>404 | Pista House Irving</title>
            </Head>
            <Flex justifyContent="center" alignItems="center" height="80vh">
                <Image src="/404.svg" alt="404" />
            </Flex>
        </>
    )
}

export default Four
