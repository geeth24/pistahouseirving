import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Catalog } from "@/components/catalog"
import { cateringMenu } from "@/lib/catering-menu"
import { pageMetadata, restaurant } from "@/lib/restaurant"

export const metadata = pageMetadata(
  "/catering",
  "Indian catering in Dallas–Fort Worth",
  "Explore Pista House Irving’s wedding buffets, live grill and chaat stations, and office catering. Build a menu and request a quote for your event.",
)
const eventPhotos = [
  {
    image: "garden-buffet",
    name: "An outdoor buffet",
    detail:
      "Copper chafing dishes under the trees, with serving space on both sides.",
    alt: "Copper chafing dishes on a long buffet beneath leafy trees",
  },
  {
    image: "chaat-station",
    name: "Chaat, finished to order",
    detail: "A final squeeze of chutney at the live station.",
    alt: "A cook finishes a stacked chaat skewer in front of guests",
  },
  {
    image: "fruit-display",
    name: "A carved fruit display",
    detail: "Cut melon and fresh fruit arranged around a tiered centerpiece.",
    alt: "A tiered carved fruit centerpiece on a catering table",
  },
  {
    image: "live-grill",
    name: "Kebabs on the grill",
    detail: "Rows of skewers cook over the coals at an outdoor event.",
    alt: "Smoke rising from skewers cooking on a long grill",
  },
  {
    image: "buffet",
    name: "The banquet line",
    detail: "A row of covered serving dishes ready for guests.",
    alt: "Covered brass buffet servers arranged along a wall of windows",
  },
]
export default function Catering() {
  return (
    <>
      <section className="cater-hero">
        <div className="wrap feature-split">
          <div>
            <span className="kicker">
              <i aria-hidden="true" />
              Dallas–Fort Worth catering
            </span>
            <h1>Gather around.</h1>
            <p>
              Choose a live kebab station for a wedding, chaat for a reception,
              or a spread of biryani and curries for an office lunch. We’ll work
              out the setup with you.
            </p>
            <div className="actions">
              <Button asChild>
                <a href="#menu">
                  Build a catering menu <ArrowDown />
                </a>
              </Button>
              <a className="text-link" href={restaurant.tel}>
                {restaurant.phone}
              </a>
            </div>
          </div>
          <div className="wide-photo">
            <Image
              src="/images/banquet.webp"
              alt="Silver chafing dishes set for a catered event"
              fill
              sizes="(max-width:700px) 95vw, 47vw"
              preload
            />
          </div>
        </div>
      </section>
      <section className="wrap event-album">
        <div className="album-intro">
          <h2>At our events</h2>
          <p>
            A look at the different ways our team sets the table, from an
            outdoor grill to a banquet hall.
          </p>
        </div>
        <div className="album-grid">
          {eventPhotos.map((photo) => (
            <figure key={photo.image}>
              <div>
                <Image
                  src={"/images/" + photo.image + ".webp"}
                  alt={photo.alt}
                  fill
                  sizes="(max-width:700px) 89vw, (max-width:1100px) 44vw, 540px"
                />
              </div>
              <figcaption>
                <h3>{photo.name}</h3>
                <p>{photo.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section id="menu" className="wrap catering-catalog">
        <h2>Build your catering menu</h2>
        <p>
          Choose dishes below and open your selection to request a quote.
          Include the event date, venue, guest count, and any dietary requests
          in your email.
        </p>
        <Catalog sections={cateringMenu} catering />
      </section>
    </>
  )
}
