import Image from "next/image"
import Link from "next/link"
import { Catalog } from "@/components/catalog"
import { menu } from "@/lib/dining-menu"
import { pageMetadata, restaurant } from "@/lib/restaurant"
export const metadata = pageMetadata(
  "/menu",
  "Irving restaurant menu",
  "Explore Hyderabadi biryani, haleem, tandoori kebabs, vegetarian curries, naan, and desserts at Pista House Irving.",
)
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": restaurant.origin + "/menu#dining-menu",
  name: "Pista House Irving dining menu",
  url: restaurant.origin + "/menu",
  inLanguage: "en-US",
  hasMenuSection: menu.map((section) => ({
    "@type": "MenuSection",
    name: section.name,
    url: restaurant.origin + "/menu#" + section.id,
    hasMenuItem: section.items.map((dish) => ({
      "@type": "MenuItem",
      name: dish.name,
      description: dish.description,
    })),
  })),
}

export default function MenuPage() {
  return (
    <div className="wrap" id="dining-menu">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuSchema).replace(/</g, "\\u003c"),
        }}
      />
      <header className="intro menu-intro">
        <span className="kicker">
          <i aria-hidden="true" />
          Irving dining room
        </span>
        <Link
          className="menu-print"
          href="/aboutus"
          aria-label="Read the story behind the Charminar"
        >
          <Image
            src="/images/charminar-print.webp"
            alt=""
            width={260}
            height={173}
            sizes="(max-width:700px) 95px, 210px"
          />
        </Link>
        <h1>The menu</h1>
        <p>
          Browse dum biryani, gongura pulavs, tandoori kebabs, and vegetarian
          dishes. Check{" "}
          <a className="text-link" href={restaurant.order}>
            online ordering
          </a>{" "}
          for today’s prices and availability.
        </p>
      </header>
      <Catalog sections={menu} />
    </div>
  )
}
