import type { MetadataRoute } from "next"
import { cateringVideo } from "@/lib/catering-video"
import {
  restaurant,
  navigation,
  pageImages,
  type PublicPath,
} from "@/lib/restaurant"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: PublicPath[] = [
    "/",
    ...navigation.map((link) => link.href),
    cateringVideo.path,
  ]
  return paths.map((path) => ({
    url: new URL(path, restaurant.origin).href,
    images: [new URL(pageImages[path].url, restaurant.origin).href],
  }))
}
