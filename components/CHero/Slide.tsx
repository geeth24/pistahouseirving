import React, { useState, useEffect } from "react"
import { useTransition, animated, config, useSpring } from "react-spring"

const slides = [
    {
        id: 0,
        url: "/SlideOne.jpg",
    },
    {
        id: 1,
        url: "/SlideTwo.jpg",
    },
    {
        id: 2,
        url: "/SlideThree.jpg",
    },
    { id: 3, url: "/SlideFour.jpg" },
]
interface SlideProps {
    url: string
    duration: number
}
const Image = ({ url, duration }: SlideProps) => {
    const props = useSpring({
        from: {
            transform: "scale(1) translateX(0%)",
        },
        to: {
            transform: "scale(2) translateX(20%)",
        },
        config: {
            duration: duration - 200,
        },
    })
    return (
        <animated.div
            className="bg"
            style={{
                ...props,
                backgroundImage: `url(${url})`,
            }}
        />
    )
}

export const Slide = () => {
    const duration = 5000
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], (item) => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    useEffect(
        () => void setInterval(() => set((state) => (state + 1) % slides.length), duration),

        []
    )
    
    return (
        <>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={{ ...props }}>
                    <Image url={item.url} duration={duration} />
                </animated.div>
            ))}
        </>
    )
}
