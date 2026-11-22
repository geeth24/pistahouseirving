import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { cateringVideo } from "@/lib/catering-video"
import { pageMetadata, restaurant } from "@/lib/restaurant"

const watchUrl = restaurant.origin + cateringVideo.path
const videoId = watchUrl + "#video"

export const metadata = pageMetadata(
  cateringVideo.path,
  "Behind the scenes at a catered event",
  cateringVideo.description,
)

export default function CateringVideo() {
  return (
    <article className="wrap catering-watch">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": watchUrl + "#webpage",
              url: watchUrl,
              name: cateringVideo.title,
              mainEntity: { "@id": videoId },
            },
            {
              "@type": "VideoObject",
              "@id": videoId,
              name: cateringVideo.title,
              description: cateringVideo.description,
              uploadDate: cateringVideo.published,
              thumbnailUrl: [restaurant.origin + cateringVideo.poster.url],
              contentUrl: restaurant.origin + cateringVideo.file,
              duration: `PT${cateringVideo.durationSeconds}S`,
              publisher: { "@id": restaurant.origin + "/#restaurant" },
            },
          ],
        }}
      />
      <header>
        <Link className="text-link" href="/catering">
          <ArrowLeft aria-hidden="true" /> Catering
        </Link>
        <h1>{cateringVideo.title}</h1>
        <p>{cateringVideo.description}</p>
      </header>
      <video
        aria-label={cateringVideo.title}
        aria-describedby="catering-video-description"
        className="catering-watch-player"
        controls
        playsInline
        preload="none"
        poster={cateringVideo.poster.url}
        width={cateringVideo.poster.width}
        height={cateringVideo.poster.height}
      >
        <source src={cateringVideo.file} type="video/mp4" />
        <a href={cateringVideo.file}>Download the catering video</a>
      </video>
      <div className="catering-watch-notes" id="catering-video-description">
        <p>
          This silent video shows a floral arch over a line of brass serving
          dishes, a steaming pot in the kitchen, a banquet buffet ready for
          service, and platters of carved fruit.
        </p>
        <Link className="text-link" href="/catering#menu">
          Build a catering menu <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
