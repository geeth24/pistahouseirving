import { BreadcrumbData } from "@/components/structured-data"
import Link from "next/link"
import { NeighborhoodMap } from "@/components/neighborhood-map"
import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata, restaurant } from "@/lib/restaurant"
export const metadata = pageMetadata(
  "/contactus",
  "Hours and directions",
  "Find Pista House at 901 W Royal Ln, Suite 160, in Las Colinas, Irving. Get directions, check dining room hours, or call about pickup and catering.",
)
export default function Visit() {
  return (
    <>
      <BreadcrumbData path="/contactus" />
      <section className="wrap visit-page">
        <div className="visit-detail">
          <div className="intro">
            <span className="kicker">
              <i aria-hidden="true" />
              Visit us
            </span>
            <h1>
              Find us on
              <br />
              West Royal Lane.
            </h1>
          </div>
          <p>
            Look for the green Pista House sign above the black awning in Las
            Colinas. The glass entrance is marked 160.
          </p>
          <address>
            {restaurant.street}
            <br />
            {restaurant.city}
          </address>
          <div className="actions">
            <Button asChild>
              <a href={restaurant.directions}>
                <MapPin />
                Get directions
              </a>
            </Button>
            <a className="text-link" href={restaurant.order}>
              Order pickup <ArrowUpRight />
            </a>
          </div>
          <dl>
            <div>
              <dt>Dining hours</dt>
              <dd>
                {restaurant.hours}
                <br />
                <a
                  className="hours-map-link"
                  href="https://www.google.com/maps/search/?api=1&query=Pista+House+901+W+Royal+Ln+Irving+TX"
                >
                  Check holiday hours on Google Maps
                </a>
              </dd>
            </div>
            <div>
              <dt>Call the restaurant</dt>
              <dd>
                <a href={restaurant.tel}>{restaurant.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={"mailto:" + restaurant.email}>{restaurant.email}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={restaurant.instagram}>@pistahousedallas</a>
              </dd>
            </div>
          </dl>
        </div>
        <figure className="entrance-print">
          <Image
            src="/images/irving-entrance.webp"
            alt="Illustrated view of the Pista House sign above the black awning and entrance marked 160"
            width={1536}
            height={1024}
            sizes="(max-width:700px) 95vw, 42vw"
            preload
          />
          <figcaption>Our entrance in Las Colinas, Irving</figcaption>
        </figure>
      </section>
      <NeighborhoodMap />
      <section className="wrap planning visit-planning">
        <div>
          <span className="kicker">
            <i aria-hidden="true" />
            Before you visit
          </span>
          <h2>Dine in or pick up.</h2>
        </div>
        <dl>
          <div>
            <dt>Dining with us</dt>
            <dd>
              The dining room opens at 11 AM daily. Browse{" "}
              <Link className="text-link" href="/menu">
                the restaurant menu
              </Link>{" "}
              before your visit, or ask the team about today’s dishes.
            </dd>
          </div>
          <div>
            <dt>Picking up dinner</dt>
            <dd>
              Choose pickup on{" "}
              <a className="text-link" href={restaurant.order}>
                the ordering page
              </a>{" "}
              for current prices and collection times. The Irving pickup address
              is {restaurant.street}.
            </dd>
          </div>
          <div>
            <dt>Planning a group meal</dt>
            <dd>
              For a catered event,{" "}
              <Link className="text-link" href="/catering">
                choose dishes for your group
              </Link>{" "}
              and request a quote with your date and guest count.
            </dd>
          </div>
        </dl>
      </section>
    </>
  )
}
