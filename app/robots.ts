import type { MetadataRoute } from "next"
import { restaurant } from "@/lib/restaurant"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: ["/sitemap.xml", "/video-sitemap.xml"].map(
      (path) => restaurant.origin + path,
    ),
  }
}
