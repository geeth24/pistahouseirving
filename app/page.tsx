import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata, restaurant } from "@/lib/restaurant"
export const metadata = pageMetadata(
  "/",
  "Hyderabadi restaurant in Irving, TX",
  "Visit Pista House on West Royal Lane for Hyderabadi dum biryani, haleem, and kebabs. Browse the menu, order pickup, or plan an event.",
)
const specialties = [
  {
    name: "Dum biryani",
    copy: "Basmati rice takes on the spices of chicken, goat, or vegetables as the pot slowly steams.",
    anchor: "biryani",
  },
  {
    name: "Hyderabadi haleem",
    copy: "Meat, wheat, and lentils cook down together into a thick, savory stew.",
    anchor: "haleem",
  },
  {
    name: "Tandoori kebabs",
    copy: "From paneer tikka to chicken hariyali, the heat of the clay oven gives each skewer its char.",
    anchor: "kebabs",
  },
]
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
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
          </div>
          <figure className="hero-figure">
            <div className="arch-frame">
              <div className="arch-photo">
                <Image
                  src="/images/dum-biryani.webp"
                  alt="Biryani in a metal bowl with lime, sliced onions, and whole spices on a wooden table"
                  fill
                  sizes="(max-width:700px) 90vw, 46vw"
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
      <section className="wrap menu-feature">
        <div className="section-lead">
          <span className="kicker">
            <i aria-hidden="true" />
            From the kitchen
          </span>
          <h2>House specialties</h2>
          <Link className="text-link" href="/menu">
            Browse the full menu <ArrowRight />
          </Link>
        </div>
        <div className="special-list">
          {specialties.map((item) => (
            <Link href={"/menu#" + item.anchor} key={item.anchor}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
              </div>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <section className="catering-band">
        <div className="wrap feature-split">
          <div className="wide-photo">
            <Image
              src="/images/banquet.webp"
              alt="A row of silver chafing dishes ready for a Pista House catering event"
              fill
              sizes="(max-width:700px) 90vw, 48vw"
            />
          </div>
          <div>
            <span className="kicker">
              <i aria-hidden="true" />
              Pista House catering
            </span>
            <h2>
              A table for
              <br />
              the whole party.
            </h2>
            <p>
              Plan a wedding spread, an office lunch, or a family gathering.
              Pick the dishes you have in mind and share your list with our
              team.
            </p>
            <Button asChild>
              <Link href="/catering">
                Plan your menu <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="wrap story-body home-visit">
        <div>
          <span className="kicker">
            <i aria-hidden="true" />
            Las Colinas
          </span>
          <h2>
            Late supper on
            <br />
            West Royal Lane.
          </h2>
        </div>
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
