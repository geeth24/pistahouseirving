import Image, { type ImageProps } from "next/image"
import type { CSSProperties } from "react"
import previews from "@/lib/photo-previews.json"

export function RestaurantPhoto(props: ImageProps & { src: string }) {
  const preview = previews[props.src as keyof typeof previews]
  return (
    <span
      className={props.fill ? "photo-focus photo-focus-fill" : "photo-focus"}
      data-reveal="photo"
      style={{ "--photo-preview": `url("${preview}")` } as CSSProperties}
    >
      <Image {...props} alt={props.alt} />
    </span>
  )
}
