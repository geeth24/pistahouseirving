import { SectionReveal } from "@/components/section-reveal"
import { PhotoFrame } from "@/components/photo-frame"
import { BreadcrumbData, StructuredData } from "@/components/structured-data"
import { EventGallery } from "@/components/event-gallery"
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
    image: "outdoor-buffet",
    name: "An outdoor buffet",
    detail:
      "Copper and silver chafing dishes set beneath the trees. Restored from an event photograph.",
    alt: "Copper chafing dishes on a long buffet beneath leafy trees",
  },
  {
    image: "skewer-service",
    name: "At the live station",
    detail: "Finishing a skewer just before service.",
    alt: "A cook holding a skewer at a live station",
  },
  {
    image: "mixed-grill",
    name: "Tandoori kebabs",
    detail: "A platter of marinated kebabs fresh from the tandoor.",
    alt: "A platter of tandoori kebabs in three marinades",
  },
  {
    image: "kebabs-on-the-grill",
    name: "Kebabs on the grill",
    detail: "Rows of skewers cook over the coals at an outdoor event.",
    alt: "Smoke rising from skewers cooking on a long grill",
  },
  {
    image: "buffet",
    name: "The banquet line",
    detail:
      "Brass serving dishes along the windows. Restored from an event photograph.",
    alt: "Covered brass buffet servers arranged along a wall of windows",
  },
  {
    image: "plated-dinner-service",
    name: "Plated dinner service",
    detail:
      "A cook adds the finishing touches to individual plates before service.",
    alt: "A cook attending to rows of white plates on a long table",
  },
  {
    image: "silver-handi-buffet",
    name: "Silver handi service",
    detail: "Silver handis set along a window for buffet service. Restored from an event photograph.",
    alt: "Silver serving vessels lined up on a banquet table",
  },
]
export default function Catering() {
  return (
    <>
      <BreadcrumbData path="/catering" />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FoodService",
          name: "Pista House catering",
          url: restaurant.origin + "/catering",
          serviceType: "Indian catering",
          areaServed: "Dallas–Fort Worth, Texas",
          provider: { "@id": restaurant.origin + "/#restaurant" },
        }}
      />
      <section className="cater-hero">
        <div className="wrap feature-split">
          <SectionReveal>
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
          </SectionReveal>
          <PhotoFrame className="cater-cover-frame">
            <Image
              src="/images/station-finish.webp"
              alt="Marinated kebabs on skewers over the flames at a live grill"
              fill
              sizes="(max-width:700px) 95vw, 47vw"
              preload
            />
          </PhotoFrame>
        </div>
      </section>
      <section className="wrap event-album">
        <SectionReveal className="album-intro">
          <h2>At our events</h2>
          <p>
            A look at the different ways our team sets the table, from an
            outdoor grill to a banquet hall.
          </p>
        </SectionReveal>
        <EventGallery photos={eventPhotos} />
      </section>
      <section className="planning-band">
        <div className="wrap planning">
          <SectionReveal>
            <span className="kicker">
              <i aria-hidden="true" />
              Planning an event
            </span>
            <h2>What will service look like?</h2>
          </SectionReveal>
          <dl>
            <div>
              <dt>Buffet service</dt>
              <dd>
                Set out a selection of starters, rice, curries, and breads so
                guests can choose their own plates.
              </dd>
            </div>
            <div>
              <dt>Live stations</dt>
              <dd>
                Ask about a grill or chaat station. Tell us which dishes you’d
                like prepared in front of your guests and what space the venue
                has available.
              </dd>
            </div>
            <div>
              <dt>Plated dinners</dt>
              <dd>
                For a seated gathering, share your guest count, serving time,
                and course preferences with the catering team.
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section id="menu" className="wrap catering-catalog">
        <SectionReveal as="h2">Build your catering menu</SectionReveal>
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
