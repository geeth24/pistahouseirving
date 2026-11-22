import { SectionReveal } from "@/components/section-reveal"
import { GuestNotes } from "@/components/guest-notes"
import { CateringCarousel } from "@/components/catering-carousel"
import { StructuredData } from "@/components/structured-data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata, restaurant } from "@/lib/restaurant"
export const metadata = pageMetadata(
  "/",
  "Hyderabadi Indian restaurant in Irving, TX",
  "Visit Pista House on West Royal Lane for Hyderabadi dum biryani, haleem, and kebabs. Browse the menu, order pickup, or plan an event.",
)
const specialties = [
  {
    name: "Dum biryani",
    copy: "Basmati rice takes on the spices of chicken, goat, or vegetables as the pot slowly steams.",
    anchor: "biryani",
    image: "copper-handi",
    alt: "Steaming biryani served in a copper handi with lime",
  },
  {
    name: "Hyderabadi haleem",
    copy: "Meat, wheat, and lentils cook down together into a thick, savory stew.",
    anchor: "haleem",
    image: "haleem-table",
    alt: "A bowl of haleem beside lentils, chilies, and ginger",
  },
  {
    name: "Tandoori kebabs",
    copy: "From paneer tikka to chicken hariyali, the heat of the clay oven gives each skewer its char.",
    anchor: "kebabs",
    image: "mixed-grill",
    alt: "Tandoori kebabs arranged on a platter with sliced onions",
  },
]
export default function Home() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": restaurant.origin + "/#website",
          name: restaurant.name,
          alternateName: "Pista House",
          url: restaurant.origin + "/",
          publisher: { "@id": restaurant.origin + "/#restaurant" },
        }}
      />
      <section className="hero">
        <div className="wrap hero-inner">
          <SectionReveal className="hero-copy">
            <span className="kicker">
              <i aria-hidden="true" />
              Hyderabadi kitchen
            </span>
            <h1>
              A little <br />
              Hyderabad
              <br />
              <em>in Irving.</em>
            </h1>
            <p>
              Dum biryani, slow-cooked haleem, and kebabs from the tandoor,
              served on West Royal Lane.
            </p>
            <div className="actions">
              <Button asChild variant="light">
                <Link href="/menu">
                  Explore the menu <ArrowRight />
                </Link>
              </Button>
              <Link className="hero-link" href="/contactus">
                Visit the restaurant <ArrowUpRight size={16} />
              </Link>
            </div>
          </SectionReveal>
          <figure className="hero-figure">
            <div className="arch-frame">
              <div className="arch-photo">
                <Image
                  src="/images/dum-biryani.webp"
                  alt="Biryani in a metal bowl with lime, sliced onions, and whole spices on a wooden table"
                  fill
                  sizes="(max-width:700px) 90vw, 46vw"
                  quality={90}
                  preload
                />
              </div>
            </div>
            <figcaption>
              <span />
              From our kitchen · Dum biryani
              <span />
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="visit-strip">
        <div className="wrap strip-inner">
          <a href={restaurant.directions}>
            <MapPin />
            {restaurant.street}, Irving <ArrowUpRight size={14} />
          </a>
          <span>
            <Clock3 />
            {restaurant.hours}
          </span>
          <a href={restaurant.tel}>
            <Phone />
            {restaurant.phone}
          </a>
        </div>
      </div>
      <section className="wrap kitchen-edition">
        <SectionReveal className="album-intro">
          <div>
            <span className="kicker">
              <i aria-hidden="true" />
              From the kitchen
            </span>
            <h2>House specialties</h2>
          </div>
          <Link className="text-link" href="/menu">
            Browse the full menu <ArrowRight />
          </Link>
        </SectionReveal>
        <div className="kitchen-spread">
          {specialties.map((item, index) => (
            <Link href={"/menu#" + item.anchor} key={item.anchor}>
              <SectionReveal delay={index * 0.05} className="kitchen-plate">
                <Image
                  src={"/images/" + item.image + ".webp"}
                  alt={item.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width:700px) 89vw, 48vw"
                      : "(max-width:700px) 38vw, (max-width:1440px) 20vw, 280px"
                  }
                  quality={90}
                />
              </SectionReveal>
              <div className="plate-copy">
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
                <ArrowUpRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="event-service" className="party-feature">
        <SectionReveal className="party-copy">
          <span className="kicker">
            <i aria-hidden="true" />
            Pista House catering
          </span>
          <h2>A table for the whole party.</h2>
          <p>
            Plan a wedding spread, an office lunch, or a family gathering.
            Choose the dishes you have in mind and share your list with our
            team.
          </p>
          <Button asChild variant="light">
            <Link href="/catering">
              Plan your menu <ArrowRight />
            </Link>
          </Button>
        </SectionReveal>
        <CateringCarousel />
      </section>
      <section id="after-dinner" className="dessert-story">
        <div className="wrap dessert-layout">
          <SectionReveal className="dessert-heading">
            <div className="dessert-title">
              <span className="kicker">
                <i aria-hidden="true" />
                After dinner
              </span>
              <h2>At the dessert table.</h2>
            </div>
            <div className="dessert-notes">
              <p>
                For a party, dessert can be a table of its own. For dinner in
                Irving, finish with gulab jamun in syrup or Hyderabad’s apricot
                dessert, qubani ka meetha.
              </p>
              <Link className="text-link" href="/menu#desserts">
                Explore desserts <ArrowRight />
              </Link>
            </div>
          </SectionReveal>
          <div className="dessert-spread">
            <figure>
              <SectionReveal className="dessert-photo">
                <Image
                  src="/images/dessert-tasting-table.webp"
                  alt="Strawberry layer cakes, chocolate squares, and fresh berries on a dessert tasting table"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 700px) 62vw, 60vw"
                  quality={90}
                />
              </SectionReveal>
              <figcaption>Cakes and berries</figcaption>
            </figure>
            <figure>
              <SectionReveal className="dessert-photo">
                <Image
                  src="/images/dessert-cups.webp"
                  alt="Individual dessert cups arranged in rows around a platter of sweet paan"
                  width={1000}
                  height={1333}
                  sizes="(max-width: 700px) 34vw, 32vw"
                  quality={90}
                />
              </SectionReveal>
              <figcaption>Individual sweets at a catered event</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <GuestNotes />
      <section className="wrap story-body home-visit">
        <SectionReveal>
          <span className="kicker">
            <i aria-hidden="true" />
            Las Colinas
          </span>
          <h2>
            Late supper on
            <br />
            West Royal Lane.
          </h2>
        </SectionReveal>
        <div>
          <p>
            Find us at {restaurant.street}. The dining room is open until 2 AM
            every day. For takeout, check the pickup times when you order.
          </p>
          <div className="actions">
            <Link href="/contactus" className="text-link">
              Hours and directions <ArrowRight />
            </Link>
            <a href={restaurant.instagram} className="text-link">
              Pista House on Instagram <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
