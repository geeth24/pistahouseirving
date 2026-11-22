import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata, restaurant } from "@/lib/restaurant"
export const metadata = pageMetadata(
  "/contactus",
  "Hours and directions",
  "Find Pista House Irving at 901 W Royal Ln. Get directions, check dining room hours, or call the restaurant about pickup and catering.",
)
export default function Visit() {
  return (
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
            <dd>{restaurant.hours}</dd>
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
      <iframe
        className="location-map"
        title="Map of Pista House Irving on West Royal Lane"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=Pista%20House%20901%20W%20Royal%20Ln%20Irving%20TX%2075039&z=15&output=embed"
      />
    </section>
  )
}
