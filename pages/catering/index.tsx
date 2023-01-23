import React from "react"
import PhotoAlbum, { RenderPhoto } from "react-photo-album"

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
    return (
        <section className="h-full bg-opacity-10 bg-[url('/bg/catering.png')] bg-cover bg-center bg-no-repeat">
            <div className="mx-auto  max-w-screen-xl px-8 py-24 md:px-16  ">
                <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-pistaGreen md:text-5xl xl:text-6xl">
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
        </section>
    )
}

export default Catering
