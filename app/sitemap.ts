import type { MetadataRoute } from "next"
import { cateringVideo } from "@/lib/catering-video"
import {
  restaurant,
  navigation,
  pageImages,
  type PublicPath,
} from "@/lib/restaurant"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: PublicPath[] = ["/", ...navigation.map((link) => link.href)]
  const posterUrl = restaurant.origin + cateringVideo.poster.url
  return [
    ...paths.map((path) => ({
      url: new URL(path, restaurant.origin).href,
      images: [new URL(pageImages[path].url, restaurant.origin).href],
    })),
    {
      url: restaurant.origin + cateringVideo.path,
      images: [posterUrl],
      videos: [
        {
          title: cateringVideo.title,
          description: cateringVideo.description,
          thumbnail_loc: posterUrl,
          content_loc: restaurant.origin + cateringVideo.file,
          duration: cateringVideo.durationSeconds,
          publication_date: cateringVideo.published,
        },
      ],
    },
  ]
}
