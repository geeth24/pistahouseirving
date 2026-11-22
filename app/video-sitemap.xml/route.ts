import { cateringVideo } from "@/lib/catering-video"
import { restaurant } from "@/lib/restaurant"

export const dynamic = "force-static"

function escapeXml(text: string) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
}

export function GET() {
  const { origin } = restaurant
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${escapeXml(origin + cateringVideo.path)}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(origin + cateringVideo.poster.url)}</video:thumbnail_loc>
      <video:title>${escapeXml(cateringVideo.title)}</video:title>
      <video:description>${escapeXml(cateringVideo.description)}</video:description>
      <video:content_loc>${escapeXml(origin + cateringVideo.file)}</video:content_loc>
      <video:duration>${cateringVideo.durationSeconds}</video:duration>
      <video:publication_date>${cateringVideo.published}</video:publication_date>
    </video:video>
  </url>
</urlset>
`

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
