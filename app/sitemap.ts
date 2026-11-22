import type { MetadataRoute } from "next"
import { restaurant, navigation } from "@/lib/restaurant"
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...navigation.map((link) => link.href)].map((path) => ({
    url: new URL(path, restaurant.origin).href,
  }))
}
