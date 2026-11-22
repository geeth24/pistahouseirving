"use client"
import { SectionReveal } from "@/components/section-reveal"
import { useRef, useState } from "react"
import { Dialog } from "radix-ui"
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react"
import Image from "next/image"
import { RestaurantPhoto } from "@/components/restaurant-photo"
import { Button } from "./ui/button"

type Photo = { image: string; name: string; detail: string; alt: string }
export function EventGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0)
  const opener = useRef<HTMLButtonElement>(null)
  const current = photos[index]
  const move = (step: number) =>
    setIndex((value) => (value + step + photos.length) % photos.length)
  return (
    <Dialog.Root>
      <div className="album-grid">
        {photos.map((photo, i) => (
          <SectionReveal as="figure" treatment="photo" delay={(i % 2) * 0.06} key={photo.image}>
            <Dialog.Trigger asChild>
              <button
                className="album-frame"
                aria-label={"Enlarge photo: " + photo.name}
                onClick={(event) => {
                  opener.current = event.currentTarget
                  setIndex(i)
                }}
              >
                <RestaurantPhoto
                  src={"/images/" + photo.image + ".webp"}
                  alt={photo.alt}
                  fill
                  sizes="(max-width:700px) 89vw, 44vw"
                  quality={90}
                />
                <span className="expand-photo-icon">
                  <Expand size={16} />
                </span>
              </button>
            </Dialog.Trigger>
            <figcaption>
              <h3>{photo.name}</h3>
              <p>{photo.detail}</p>
            </figcaption>
          </SectionReveal>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="scrim" />
        <Dialog.Content
          className="album-viewer"
          onCloseAutoFocus={(event) => {
            if (opener.current) {
              event.preventDefault()
              opener.current.focus({ preventScroll: true })
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault()
              move(-1)
            }
            if (event.key === "ArrowRight") {
              event.preventDefault()
              move(1)
            }
          }}
        >
          <div className="panel-heading">
            <Dialog.Title>{current.name}</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="icon" aria-label="Close photograph">
                <X />
              </Button>
            </Dialog.Close>
          </div>
          <div className="viewer-photo">
            <Image
              src={"/images/" + current.image + ".webp"}
              alt={current.alt}
              fill
              sizes="90vw"
              quality={90}
            />
          </div>
          <div className="viewer-bottom">
            <Dialog.Description>{current.detail}</Dialog.Description>
            <div>
              <Button
                variant="icon"
                onClick={() => move(-1)}
                aria-label="Previous photograph"
              >
                <ArrowLeft />
              </Button>
              <span aria-live="polite">
                {index + 1} / {photos.length}
              </span>
              <Button
                variant="icon"
                onClick={() => move(1)}
                aria-label="Next photograph"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
