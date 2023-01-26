import {
    VeggieAppetizers,
    MeatAppetizers,
    VeggieKebabs,
    MeatKebabs,
    VeggieEntrees,
    MeatEntrees,
    Rice,
    Drinks,
    Desserts,
    IndianSandwich,
    Chat,
} from "@/components/cmenu"
import CaterCard from "@/components/CaterCard"
import React from "react"
import PhotoAlbum, { RenderPhoto } from "react-photo-album"
import { Link } from "react-scroll"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/components/Firebase"
import Head from "next/head"

const renderPhoto: RenderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
}) => (
    <div className="render-div">
        <p className="text-left text-sm font-bold text-pistaLightGreen">
            {alt}
        </p>
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
    </div>
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
function Catering() {
     const [logged, setLogged] = React.useState(false)

     if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
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
                <title>Catering | Pista House Irving</title>
            </Head>
            <section className="h-full">
                <div className="fixed top-0  flex w-full flex-row items-center space-x-5 overflow-hidden overflow-x-scroll bg-pistaGray/70 pb-5 pr-5 pl-5 pt-20 backdrop-blur-lg md:pt-24   xl:justify-center">
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
                        to="IndianSandwiches"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Indian Sandwiches
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
                        to="Chats"
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-180}
                        className="text-md nowrap cursor-pointer font-medium text-pistaMidGreen hover:text-pistaLightGreen"
                    >
                        Chats
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
                <div className="mx-auto  max-w-screen-xl py-52 px-8 md:px-16">
                    <h1 className=" mt-8 max-w-2xl text-4xl font-black  text-pistaGreen md:text-5xl xl:text-6xl">
                        Catering
                    </h1>
                    <div>
                        <PhotoAlbum
                            layout="masonry"
                            photos={images}
                            //@ts-ignore
                            renderPhoto={renderPhoto}
                        />
                    </div>
                </div>
                <div
                    id="menu"
                    className="mx-auto -mt-32 max-w-screen-xl  px-8 pt-44 md:px-16"
                >
                    <h1 className="mb-8  max-w-2xl text-4xl font-black  text-pistaGreen md:text-5xl xl:text-6xl">
                        Catering Menu
                    </h1>

                    <div id="VeggieAppetizers" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Veggie Appetizers
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {VeggieAppetizers.map((item, index) => (
                                <CaterCard
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
                                <CaterCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="IndianSandwiches" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Indian Sandwiches
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {IndianSandwich.map((item, index) => (
                                <CaterCard
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
                                <CaterCard
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
                                <CaterCard
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
                                <CaterCard
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
                                <CaterCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div id="Chats" className="mb-8">
                        <h6 className="mb-8 max-w-2xl text-xl font-bold text-pistaLightGreen md:text-3xl xl:text-4xl">
                            Chats
                        </h6>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Chat.map((item, index) => (
                                <CaterCard
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
                                <CaterCard
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
                                <CaterCard
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
                                <CaterCard
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

export default Catering
