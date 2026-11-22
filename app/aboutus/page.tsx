import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/restaurant"

export const metadata = pageMetadata(
  "/aboutus",
  "Our Hyderabadi kitchen in Las Colinas",
  "Meet the food and city behind Pista House Irving, from Hyderabad’s Charminar to dum biryani, tandoori kebabs, and late dinners in Las Colinas.",
)
export default function Story() {
  return (
    <article>
      <div className="story-cover">
        <div className="wrap story-opener">
          <div>
            <span className="kicker">
              <i aria-hidden="true" />
              Our story
            </span>
            <h1>
              Hyderabad
              <br />
              at heart.
            </h1>
            <p>
              Look up from a booth in our Irving dining room and you’ll see the
              Charminar. The city on our wall is also the city behind our
              cooking.
            </p>
          </div>
          <figure>
            <Image
              src="/images/charminar-print.webp"
              alt="Illustration of Hyderabad’s Charminar rising above the old-city market"
              width={1536}
              height={1024}
              sizes="(max-width:700px) 90vw, 55vw"
              preload
            />
            <figcaption>The Charminar, Hyderabad</figcaption>
          </figure>
        </div>
      </div>
      <section className="wrap story-body">
        <h2>
          From the old city
          <br />
          to West Royal Lane
        </h2>
        <div>
          <p>
            Built in 1591, the Charminar has four minarets and arched
            passageways that open onto the streets of Hyderabad. Here in Las
            Colinas, a mural of that landmark runs along our dining room.
            Outside, our green sign has another way of saying where we come
            from. It reads “Biryani, Haleem &amp; Kabobs.”
          </p>
          <p>
            Each takes a different kind of heat. Dum biryani steams under a lid,
            so the rice absorbs the spices as it cooks. Haleem simmers until the
            grains and meat come together. At the tandoor, the clay walls hold
            enough heat to char a skewer of marinated chicken or paneer.
          </p>
          <Link className="text-link" href="/menu">
            Discover the menu <ArrowRight />
          </Link>
        </div>
      </section>
      <section className="pantry">
        <div className="wrap pantry-inner">
          <figure>
            <Image
              src="/images/biryani-spices.webp"
              width={700}
              height={1050}
              sizes="(max-width:700px) 89vw, 35vw"
              quality={90}
              alt="A bowl of biryani with cinnamon, star anise, and fresh herbs on blue wood"
            />
          </figure>
          <div>
            <span className="kicker">
              <i aria-hidden="true" />
              Kitchen notes
            </span>
            <h2>Flavors to look for</h2>
            <dl>
              <div>
                <dt>Gongura</dt>
                <dd>
                  Look for the tartness of sorrel leaves in gongura chicken
                  curry and paneer pulao.
                </dd>
              </div>
              <div>
                <dt>Methi</dt>
                <dd>
                  Fenugreek gives methi chicken its gently bitter, herbal
                  flavor.
                </dd>
              </div>
              <div>
                <dt>Mirchi</dt>
                <dd>
                  Mirchi means chili. Try cut mirchi as a starter, or pachi
                  mirchi paneer pulao for rice with green chili.
                </dd>
              </div>
            </dl>
            <Link href="/menu#curries" className="text-link">
              Find them on the menu <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="catering-band">
        <div className="wrap feature-split">
          <div className="wide-photo">
            <Image
              src="/images/live-grill.webp"
              alt="Rows of kebab skewers cooking at an outdoor Pista House grill"
              fill
              sizes="(max-width:700px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>Beyond the dining room</h2>
            <p>
              A wedding buffet takes a different shape from a late dinner for
              two. For catered gatherings, the team sets out chafing dishes,
              prepares live stations, and helps hosts choose a menu for the
              room.
            </p>
            <Button asChild>
              <Link href="/catering">
                See our catering setups <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  )
}
