import MenuCard from "../../components/MenuCard"

import { Link } from "react-scroll"
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
import { logEvent } from "firebase/analytics"
import { analytics } from "../../components/Firebase"
import React from "react"
import Head from "next/head"

function Menu() {
    const [logged, setLogged] = React.useState(false)

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
        if (!logged) {
            logEvent(analytics, "page_view", {
                page_title: "Menu",
                page_location: "https://www.pistahouseirving.com/menu",
                page_path: "/menu",
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
                <title>Menu | Pista House Irving</title>
                <meta property="og:title" content="Menu" />
            </Head>
            <section className="h-full bg-opacity-10 bg-[url('/bg/menu.png')] bg-cover bg-center bg-no-repeat">
                <div className="fixed top-0  flex w-full flex-row items-center space-x-5 overflow-hidden overflow-x-scroll bg-pistaGray/70 pb-5 pr-5 pl-5 pt-20 backdrop-blur-lg md:pt-24  xl:justify-center">
                    <Link
                        to="VeggieAppetizers"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Veggie Appetizers
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />

                    <Link
                        to="MeatAppetizers"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Meat Appetizers
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="VeggieKebabs"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Veggie Kebabs
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="MeatKebabs"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Meat Kebabs
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="VeggieEntrees"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Veggie Entrees
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="MeatEntrees"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Meat Entrees
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="NaanBread"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Naan Bread
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="Rice"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Rice
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="Drinks"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Drinks
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                    <Link
                        to="Desserts"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Desserts
                    </Link>
                    <hr className="mb-6 border-pistaGreen/10" />
                </div>
                <div className="mx-auto  max-w-screen-xl px-8 py-52 md:px-16 md:py-64 ">
                    <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-pistaGreen md:text-5xl xl:text-6xl">
                        Menu
                    </h1>

                    <div id="VeggieAppetizers" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Veggie Appetizers
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {VeggieAppetizers.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="MeatAppetizers" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Meat Appetizers
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {MeatAppetizers.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="VeggieKebabs" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Veggie Kebabs
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {VeggieKebabs.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="MeatKebabs" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Meat Kebabs
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {MeatKebabs.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="VeggieEntrees" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Veggie Entrees
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {VeggieEntrees.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="MeatEntrees" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Meat Entrees
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {MeatEntrees.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="NaanBread" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Naan Bread
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {NaanBread.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="Rice" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Rice
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Rice.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="Drinks" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Drinks
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Drinks.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="Desserts" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Desserts
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Desserts.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
