import { Box, Flex, SlideFade, Text } from "@chakra-ui/react"
import Head from "next/head"
import PhotoAlbum, { RenderPhoto } from "react-photo-album"
import styled from "styled-components"
export const RenderDiv = styled.div``

const renderPhoto: RenderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
}) => (
    <SlideFade in={true}>
        <RenderDiv className="render-div">
            <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="bold"
                color="#047f69"
            >
                {alt}
            </Text>
            <img
                alt={alt}
                style={{
                    ...style,
                    width: "100%",
                    padding: 0,
                    transition: "all 1s",
                }}
                {...restImageProps}
            />
        </RenderDiv>
    </SlideFade>
)
const images = [
    {
        src: "/slides/1.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/2.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/3.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/4.jpg",
        width: 125,
        height: 175,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/5.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/6.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/7.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/8.jpg",
        width: 175,
        height: 125,
        alt: "Dessert Table Setup",
    },

    {
        src: "/slides/9.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/10.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/11.jpg",
        width: 125,
        height: 175,
        alt: "Veggie Table Setup",
    },
    {
        src: "/slides/12.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/13.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/14.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/15.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
]

const Home = () => {
    return (
        <>
            <Head>
                <title>Catering | Pista House Texas</title>
            </Head>
            <Box mt={20} p={5}>
                <Flex justifyContent="center" alignItems="center">
                    <Text
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        color="#047f69"
                        mb={10}
                    >
                        Catering
                    </Text>
                </Flex>
                <PhotoAlbum
                    layout="masonry"
                    photos={images}
                    //@ts-ignore
                    renderPhoto={renderPhoto}
                />
            </Box>
            {/* <Hero />
            <Services />
            <Testimonials /> */}
        </>
    )
}

export default Home
