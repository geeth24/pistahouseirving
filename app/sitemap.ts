import type { MetadataRoute } from "next"
import {
  restaurant,
  navigation,
  pageImages,
  type PublicPath,
} from "@/lib/restaurant"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: PublicPath[] = ["/", ...navigation.map((link) => link.href)]
  return paths.map((path) => ({
    url: new URL(path, restaurant.origin).href,
    images: [new URL(pageImages[path].url, restaurant.origin).href],
  }))
}
