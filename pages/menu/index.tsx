import React from "react"

import {
    Flex,
    Text,
    useColorModeValue,
    VStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react"
import MenuCards from "../../components/Menu Cards/MenuCards"
import {
    VeggieAppetizers,
    MeatAppetizers,
    VeggieKebabs,
    MeatKebabs,
    VeggieEntrees,
    MeatEntrees,
    NaanBread,
    Rice,
    Drinks,
    Desserts,
} from "../../components/menu"
import styled from "styled-components"
import { Link } from "react-scroll"
import Head from "next/head"
import type { NextPage } from "next"
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

// import { GetStaticProps } from "next"
// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../../components/Firebase"

// export const getStaticProps: GetStaticProps = async () => {
//     const veggieAppetizersRef = collection(db, "veggieAppetizers")
//     const meatAppetizersRef = collection(db, "meatAppetizers")
//     const veggieKebabsRef = collection(db, "veggieKebabs")
//     const meatKebabsRef = collection(db, "meatKebabs")
//     const veggieEntreesRef = collection(db, "veggieEntrees")
//     const meatEntreesRef = collection(db, "meatEntrees")
//     const naanBreadRef = collection(db, "naanBreads")
//     const riceRef = collection(db, "rice")
//     const drinksRef = collection(db, "drinks")
//     const dessertsRef = collection(db, "desserts")

//     const veggieAppetizers = await getDocs(veggieAppetizersRef)
//     const meatAppetizers = await getDocs(meatAppetizersRef)
//     const veggieKebabs = await getDocs(veggieKebabsRef)
//     const meatKebabs = await getDocs(meatKebabsRef)
//     const veggieEntrees = await getDocs(veggieEntreesRef)
//     const meatEntrees = await getDocs(meatEntreesRef)
//     const naanBread = await getDocs(naanBreadRef)
//     const rice = await getDocs(riceRef)
//     const drinks = await getDocs(drinksRef)
//     const desserts = await getDocs(dessertsRef)

//     return {
//         props: {
//             VeggieAppetizers: veggieAppetizers.docs.map((doc) => doc.data()),
//             MeatAppetizers: meatAppetizers.docs.map((doc) => doc.data()),
//             VeggieKebabs: veggieKebabs.docs.map((doc) => doc.data()),
//             MeatKebabs: meatKebabs.docs.map((doc) => doc.data()),
//             VeggieEntrees: veggieEntrees.docs.map((doc) => doc.data()),
//             MeatEntrees: meatEntrees.docs.map((doc) => doc.data()),
//             NaanBread: naanBread.docs.map((doc) => doc.data()),
//             Rice: rice.docs.map((doc) => doc.data()),
//             Drinks: drinks.docs.map((doc) => doc.data()),
//             Desserts: desserts.docs.map((doc) => doc.data()),
//         },
//     }
// }
// interface MenuProps {
//     VeggieAppetizers: any
//     MeatAppetizers: any
//     VeggieKebabs: any
//     MeatKebabs: any
//     VeggieEntrees: any
//     MeatEntrees: any
//     NaanBread: any
//     Rice: any
//     Drinks: any
//     Desserts: any
// }
const Menu: NextPage = () => {
    //     {
    // VeggieAppetizers,
    // MeatAppetizers,
    // VeggieKebabs,
    // MeatKebabs,
    // VeggieEntrees,
    // MeatEntrees,
    // NaanBread,
    // Rice,
    // Drinks,
    // Desserts,
    // }: MenuProps
    {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()

        return (
            <>
                {" "}
                <Head>
                    <title>Menu | Pista House Texas</title>
                    <meta property="og:title" content="Menu" />
                </Head>
                <div
                    id="menu"
                    style={{
                        backgroundColor: useColorModeValue(
                            "white",
                            "rgb(26 32 44)"
                        ),
                    }}
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        py={10}
                        mt={10}
                    >
                        <VStack spacing={10}>
                            <Text
                                fontSize="4xl"
                                fontWeight="bold"
                                color={useColorModeValue("#10c60f", "#beeca0")}
                            >
                                Our Menu
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
                                    <DrawerHeader>
                                        Scroll Through Menu
                                    </DrawerHeader>

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
                                                to="naanbread"
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
                                                Naan Bread
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
                                                Rice
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
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={va.title}
                                            description={va.description}
                                            price={va.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={ma.title}
                                            description={ma.description}
                                            price={ma.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={vk.title}
                                            description={vk.description}
                                            price={vk.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={mk.title}
                                            description={mk.description}
                                            price={mk.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={ve.title}
                                            description={ve.description}
                                            price={ve.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={me.title}
                                            description={me.description}
                                            price={me.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color={useColorModeValue("#10c60f", "#beeca0")}
                                id="naanbread"
                            >
                                Naan Bread
                            </Text>
                            <Grid>
                                {NaanBread.map(
                                    (
                                        nb: {
                                            title: any
                                            description: any
                                            price: any
                                        },
                                        index: React.Key | null | undefined
                                    ) => (
                                        <MenuCards
                                            key={index}
                                            title={nb.title}
                                            description={nb.description}
                                            price={nb.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color={useColorModeValue("#10c60f", "#beeca0")}
                                id="rice"
                            >
                                Rice
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
                                        <MenuCards
                                            key={index}
                                            title={r.title}
                                            description={r.description}
                                            price={r.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color={useColorModeValue("#10c60f", "#beeca0")}
                                id="drinks"
                            >
                                Drinks
                            </Text>
                            <Grid>
                                {Drinks.map(
                                    (
                                        d: {
                                            title: any
                                            description: any
                                            price: any
                                        },
                                        index: React.Key | null | undefined
                                    ) => (
                                        <MenuCards
                                            key={index}
                                            title={d.title}
                                            description={d.description}
                                            price={d.price}
                                        />
                                    )
                                )}
                            </Grid>
                            <Text
                                fontSize="xl"
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
                                        <MenuCards
                                            key={index}
                                            title={de.title}
                                            description={de.description}
                                            price={de.price}
                                        />
                                    )
                                )}
                            </Grid>
                        </VStack>
                    </Flex>
                </div>
            </>
        )
    }
}

export default Menu
