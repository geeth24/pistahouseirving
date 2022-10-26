import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Icon,
    IconProps,
} from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CHero() {
    return (
        <Flex
            as="section"
            w="full"
            bgImage="url('/slides/1.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgAttachment="fixed"
            boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.637)"
            align="center"
            justify="center"
            py="12"
            px="6"
            pos="relative"
            zIndex="0"
        >
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
                maxW={"7xl"}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                        fontFamily="Philosopher"
                        as={motion.div}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        initial={{ opacity: 0, y: 100 }}
                        transition="0.5s linear"
                    >
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: "#beeca03e",
                                zIndex: -1,
                            }}
                            zIndex={1}
                            color="#beeca0"
                        >
                            Authentic Hyderabadi
                        </Text>
                        <br />
                        <Text as={"span"} color={"#047f69"}>
                            Food and Service
                        </Text>
                    </Heading>
                    <Text
                        color={"gray.50"}
                        fontFamily="Philosopher"
                        fontSize={{ base: "md", lg: "lg" }}
                        as={motion.div}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        initial={{ opacity: 0, y: 100 }}
                        transition="0.7s linear"
                    >
                        We are dedicated to providing you with the finest Indian
                        food and service available. <br />
                        Browse our{" "}
                        <Link href="/menu">
                            <Text
                                as={"span"}
                                color="#047f69"
                                fontWeight="bold"
                                textDecoration="underline"
                                cursor="pointer"
                            >
                                menu
                            </Text>
                        </Link>{" "}
                        and call to order in advance. If you don&apos;t mind a
                        short wait, just pop in and order in person. You can
                        also order online for collection or home delivery at
                        Just Eat.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: "column", sm: "row" }}
                        as={motion.div}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        initial={{ opacity: 0, y: 100 }}
                        transition="0.9s linear"
                    >
                        <Link href="/contactus">
                            <Button
                                as="a"
                                variant="ghost"
                                mt={5}
                                color="white"
                                bg="#047f69"
                                _hover={{ color: "#047f69", bg: "#beeca0" }}
                                cursor="pointer"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </Stack>
                </Stack>

                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Box
                        position={"relative"}
                        height={"fit-content"}
                        rounded={"2xl"}
                        boxShadow="2xl"
                        width={"full"}
                        overflow={"hidden"}
                        as={motion.div}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        initial={{ opacity: 0, y: 100 }}
                        transition="1.1s linear"
                    >
                        <video
                            // @ts-ignore
                            alt="Catering"
                            fit="cover"
                            align="center"
                            w={"100%"}
                            h={"100%"}
                            src="https://photos.smugmug.com/photos/i-7h6J4v9/0/640/i-7h6J4v9-640.mp4"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsinline={true}
                            type={"video/mp4"}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Flex>
    )
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={"100%"}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    )
}
