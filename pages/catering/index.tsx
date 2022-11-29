import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack,
} from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import PhotoAlbum, { RenderPhoto } from "react-photo-album"
import styled from "styled-components"
import {
    VeggieAppetizers,
    MeatAppetizers,
    VeggieKebabs,
    MeatKebabs,
    VeggieEntrees,
    MeatEntrees,
    Chat,
    Rice,
    Desserts,
    IndianSandwich,
    Drinks,
} from "../../components/cmenu"
import CaterCards from "../../components/Menu Cards/CaterCards"
import { animateScroll, Link } from "react-scroll"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
// import { Environment, Html, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { logEvent } from "firebase/analytics"
import { analytics } from "../../components/Firebase"

// const ModelComponent = lazy(() => import("../../components/Model"))

export const RenderDiv = styled.div``

const renderPhoto: RenderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
}) => (
    <RenderDiv
        className="render-div"
        as={motion.div}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "1" }}
    >
        <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold"
            color="#06bd9c"
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const router = useRouter()

    const { order } = router.query

    if (order === "true") {
        console.log("order is true")
        animateScroll.scrollTo(900, { duration: 1000 })
    }

    // const renderLoader = () => (
    //     <Html center>
    //         <Flex justifyContent="center" alignItems="center" height="100%">
    //             <Spinner
    //                 size="xl"
    //                 thickness="4px"
    //                 speed="0.65s"
    //                 color="#06bd9c"
    //             />
    //         </Flex>
    //     </Html>
    // )

    const [logged, setLogged] = React.useState(false)

    if (process.env.ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "Catering",
                page_location: "https://www.pistahouseirving.com/catering",
                page_path: "/catering",
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
                <title>Catering | Pista House Texas</title>
            </Head>
            <Box mt={20} p={5}>
                <Flex justifyContent="center" alignItems="center">
                    <Text
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        color="#06bd9c"
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
                <div
                    style={{
                        height: "calc(70vh - 100px)",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "50px",
                    }}
                >
                    {/* <Canvas
                        //set camera position in the middle of the screen
                        camera={{ position: [10, 10, 10] }}

                        //add rotation to the canvas
                    >
                        <Suspense fallback={renderLoader()}>
                            <ModelComponent />
                            <OrbitControls />
                            <Environment preset="sunset" />
                        </Suspense>
                    </Canvas> */}
                </div>
                <VStack spacing={10}>
                    <Text
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                    >
                        Catering Menu
                    </Text>
                    <Button
                        //@ts-ignore
                        ref={btnRef}
                        onClick={onOpen}
                        position="sticky"
                        top="100"
                        zIndex="10"
                        variant="ghost"
                        color="#ffffff"
                        bg="#06bd9c"
                    >
                        Open Menu
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement="top"
                        onClose={onClose}
                        //@ts-ignore
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Scroll Through Menu</DrawerHeader>

                            <DrawerBody>
                                <VStack>
                                    <Link
                                        to="veggieappetizers"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Veggie Appetizers
                                    </Link>
                                    <Link
                                        to="meatappetizers"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Meat Appetizers
                                    </Link>
                                    <Link
                                        to="indiansandwiches"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Indian Sandwiches
                                    </Link>
                                    <Link
                                        to="veggiekebabs"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Veggie Kebabs
                                    </Link>
                                    <Link
                                        to="meatkebabs"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Meat Kebabs
                                    </Link>

                                    <Link
                                        to="veggieentrees"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Veggie Entrees
                                    </Link>
                                    <Link
                                        to="meatentrees"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Meat Entrees
                                    </Link>
                                    <Link
                                        to="chat"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Chat
                                    </Link>
                                    <Link
                                        to="rice"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Rice/Biryani
                                    </Link>

                                    <Link
                                        to="desserts"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Desserts
                                    </Link>
                                    <Link
                                        to="drinks"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#10c60f",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Drinks
                                    </Link>
                                </VStack>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button
                                    variant="outline"
                                    mr={3}
                                    onClick={onClose}
                                >
                                    Cancel
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="veggieappetizers"
                    >
                        Veggie Appetizers
                    </Text>
                    <Grid>
                        {VeggieAppetizers.map(
                            (
                                va: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={va.title}
                                    description={va.description}
                                    price={va.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="meatappetizers"
                    >
                        Meat Appetizers
                    </Text>
                    <Grid>
                        {MeatAppetizers.map(
                            (
                                ma: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={ma.title}
                                    description={ma.description}
                                    price={ma.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="indiansandwiches"
                    >
                        Indian Sandwiches
                    </Text>
                    <Grid>
                        {IndianSandwich.map(
                            (
                                de: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={de.title}
                                    description={de.description}
                                    price={de.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="veggiekebabs"
                    >
                        Veggie Kebabs
                    </Text>
                    <Grid>
                        {VeggieKebabs.map(
                            (
                                vk: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={vk.title}
                                    description={vk.description}
                                    price={vk.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="meatkebabs"
                    >
                        Meat Kebabs
                    </Text>
                    <Grid>
                        {MeatKebabs.map(
                            (
                                mk: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={mk.title}
                                    description={mk.description}
                                    price={mk.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="veggieentrees"
                    >
                        Veggie Entrees
                    </Text>
                    <Grid>
                        {VeggieEntrees.map(
                            (
                                ve: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={ve.title}
                                    description={ve.description}
                                    price={ve.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="meatentrees"
                    >
                        Meat Entrees
                    </Text>
                    <Grid>
                        {MeatEntrees.map(
                            (
                                me: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={me.title}
                                    description={me.description}
                                    price={me.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="chat"
                    >
                        Chat
                    </Text>
                    <Grid>
                        {Chat.map(
                            (
                                nb: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={nb.title}
                                    description={nb.description}
                                    price={nb.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="rice"
                    >
                        Rice/Biryani
                    </Text>
                    <Grid>
                        {Rice.map(
                            (
                                r: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={r.title}
                                    description={r.description}
                                    price={r.price}
                                />
                            )
                        )}
                    </Grid>

                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="desserts"
                    >
                        Desserts
                    </Text>
                    <Grid>
                        {Desserts.map(
                            (
                                de: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={de.title}
                                    description={de.description}
                                    price={de.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="2xl"
                        as={motion.div}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition="0.5s ease-in-out"
                        fontWeight="bold"
                        color={useColorModeValue("#10c60f", "#beeca0")}
                        id="drinks"
                    >
                        Drinks
                    </Text>
                    <Grid>
                        {Drinks.map(
                            (
                                de: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <CaterCards
                                    key={index}
                                    title={de.title}
                                    description={de.description}
                                    price={de.price}
                                />
                            )
                        )}
                    </Grid>
                </VStack>
            </Box>
            {/* <Hero />
            <Services />
            <Testimonials /> */}
        </>
    )
}

export default Home

const Grid = styled.div`
    display: grid;
    justify-content: center;

    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    margin: 0 auto;
    max-width: 500px;
    padding: 0 2rem;
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`
