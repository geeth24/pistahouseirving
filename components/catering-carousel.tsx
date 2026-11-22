"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const slides = [
  {
    image: "plated-dinner-service",
    title: "Plated dinner service",
    alt: "A cook finishing individual plates for a catered dinner",
  },
  {
    image: "outdoor-buffet",
    title: "Under the trees",
    alt: "Copper and silver serving dishes on a dark linen buffet beneath the trees",
  },
  {
    image: "kebabs-on-the-grill",
    title: "At the live grill",
    alt: "Kebabs smoking on skewers over hot coals",
  },
]

export function CateringCarousel() {
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function advance(direction: number) {
    const element = track.current
    if (!element) return
    const next = (active + direction + slides.length) % slides.length
    element.scrollTo({ left: next * element.clientWidth, behavior: "instant" })
  }

  return (
    <div
      className="event-reel"
      role="region"
      aria-label="Catering photographs"
      aria-roledescription="carousel"
    >
      <div
        className="event-track"
        ref={track}
        tabIndex={0}
        role="group"
        aria-label="Event photos"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault()
            advance(event.key === "ArrowLeft" ? -1 : 1)
          }
        }}
        onScroll={(event) => {
          const element = event.currentTarget
          const index = Math.round(element.scrollLeft / element.clientWidth)
          setActive(Math.max(0, Math.min(slides.length - 1, index)))
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className="event-slide"
            aria-hidden={active !== index}
          >
            <Image
              src={"/images/" + slide.image + ".webp"}
              alt={slide.alt}
              fill
              sizes="(max-width: 700px) 100vw, 65vw"
              quality={90}
            />
          </div>
        ))}
      </div>
      <div className="reel-controls">
        <span aria-live="polite">{slides[active].title}</span>
        <button
          type="button"
          aria-label="Previous catering photo"
          onClick={() => advance(-1)}
        >
          <ArrowLeft />
        </button>
        <button
          type="button"
          aria-label="Next catering photo"
          onClick={() => advance(1)}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
