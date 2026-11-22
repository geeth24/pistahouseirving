import { Brand } from "./site-header"
import { restaurant, navigation } from "@/lib/restaurant"
import Link from "next/link"
export function SiteFooter() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <Brand />
        <div>
          <p>
            {restaurant.street}
            <br />
            {restaurant.city}
          </p>
          <a href={restaurant.tel}>{restaurant.phone}</a>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div>
          <a href={restaurant.instagram}>Instagram</a>
          <a href={restaurant.facebook}>Facebook</a>
          <a href={"mailto:" + restaurant.email}>Email us</a>
        </div>
      </div>
    </footer>
  )
}
