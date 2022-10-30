// import {
//     Box,
//     Flex,
//     Grid,
//     GridItem,
//     Image,
//     Text,
//     VStack,
// } from "@chakra-ui/react"
import React, { useEffect } from "react"

import { motion, useViewportScroll } from "framer-motion"
// import CHero from "../components/CHero/CHero"

// import { FaAngleDown } from "react-icons/fa"
import Head from "next/head"
import dynamic from "next/dynamic"
const CHero = dynamic(() => import("../components/CHero/CHero"), {
    suspense: true,
})
const Catering = () => {
    var { scrollYProgress } = useViewportScroll()
    const [windowWidth, setWindowWidth] = React.useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        console.log(window.innerWidth)
        window.onresize = resize

        function resize() {
            setWindowWidth(window.innerWidth)
            console.log(window.innerWidth)
        }
    }, [windowWidth])
    var svg = <svg></svg>
    if (windowWidth < 768) {
        svg = (
            <svg
                width="100%"
                height="1399px"
                viewBox="0 0 291 3198"
                // enableBackground="new 0 0 291 3198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M146.5 1C146.5 1 473.875 368.57 146.5 800C-180.875 1231.43 146.5 1599 146.5 1599C146.5 1599 473.875 1966.57 146.5 2398C-180.875 2829.43 146.5 3197 146.5 3197"
                    stroke="#10c60f"
                    strokeWidth="10"
                    style={{ pathLength: scrollYProgress }}
                    display="block"
                />
            </svg>
        )
    } else {
        svg = (
            <svg
                width="100%"
                height="3198px"
                viewBox="0 0 291 3198"
                // enableBackground="new 0 0 291 3198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M146.5 1C146.5 1 473.875 368.57 146.5 800C-180.875 1231.43 146.5 1599 146.5 1599C146.5 1599 473.875 1966.57 146.5 2398C-180.875 2829.43 146.5 3197 146.5 3197"
                    stroke="#10c60f"
                    strokeWidth="10"
                    style={{ pathLength: scrollYProgress }}
                    display="block"
                />
            </svg>
        )
    }

    //spring

    return (
        <>
            {" "}
            <Head>
                <title>Home | Pista House Texas</title>
                <meta property="og:title" content="Pista House Texas" />
            </Head>
            <CHero />
            {/* <Flex justify={"center"} align={"center"}>
                <VStack
                    as={motion.div}
                    //spring animations
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    transition="0.7s linear"
                >
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        mt={5}
                        color="#06bd9c"
                    >
                        SCROLL DOWN
                    </Text>
                    <FaAngleDown color="#06bd9c" />
                </VStack>
            </Flex>
            <div
                style={{
                    overflow: "hidden",
                    // backgroundImage:
                    //     "linear-gradient(to bottom right, #beeca0, #10c60f)",
                }}
            >
                <Flex
                    position="relative"
                    maxWidth={1200}
                    mx="auto"
                    justifyContent="center"
                >
                    <Grid
                        templateRows="repeat(10, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap={8}
                        position="absolute"
                        marginTop={100}
                    >
                        <GridItem
                            colStart={3}
                            colEnd={3}
                            rowStart={1}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/sweet1.png"
                                alt="Gulab Jamun"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"

                                // variants={cardVariants}
                            />
                        </GridItem>
                        <GridItem
                            colStart={3}
                            rowStart={3}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/sweet2.png"
                                alt="Double Ka Meetha"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                        <GridItem
                            rowStart={2}
                            colStart={1}
                            colEnd={1}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/IraniSamosa.png"
                                alt="samosa"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                        <GridItem
                            rowStart={5}
                            colStart={1}
                            colEnd={1}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/biryani.png"
                                alt="biryani"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                        <GridItem
                            rowStart={5}
                            colStart={3}
                            colEnd={3}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/haleem.png"
                                alt="haleem"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                        <GridItem
                            rowStart={7}
                            colStart={1}
                            colEnd={1}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/ckebabs.png"
                                alt="chicken kebabs"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                        <GridItem
                            rowStart={8}
                            colStart={3}
                            colEnd={3}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/pkebabs.png"
                                alt="paneer kebabs"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                        <GridItem
                            rowStart={10}
                            colStart={2}
                            colEnd={2}

                            // viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src="/sign.png"
                                alt="sign of pista house texas"
                                as={motion.img}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 2.2 }}
                                transition="0.8s linear"
                            />
                        </GridItem>
                    </Grid>
                    <Flex>
                        {" "}
                        <Box>{svg}</Box>
                    </Flex>
                </Flex>
            </div> */}
        </>
    )
}

export default Catering
