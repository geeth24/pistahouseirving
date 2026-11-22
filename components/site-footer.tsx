import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { Brand } from "./site-header"
import { Button } from "./ui/button"
import { restaurant, navigation } from "@/lib/restaurant"

export function SiteFooter() {
  return (
    <footer className="house-footer">
      <div className="wrap">
        <div className="footer-main">
          <SectionReveal className="footer-brand">
            <Brand />
            <p>Hyderabadi kitchen on West Royal Lane.</p>
            <Button asChild variant="light">
              <a href={restaurant.order}>
                Order online <ArrowUpRight />
              </a>
            </Button>
          </SectionReveal>
          <div>
            <h2>Come by</h2>
            <address>
              {restaurant.street}
              <br />
              {restaurant.city}
            </address>
            <p>{restaurant.hours}</p>
            <a href={restaurant.directions}>
              <MapPin size={15} /> Get directions
            </a>
          </div>
          <div>
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {navigation.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2>Get in touch</h2>
            <a href={restaurant.tel}>{restaurant.phone}</a>
            <a href={"mailto:" + restaurant.email}>{restaurant.email}</a>
            <a href={restaurant.instagram}>
              Instagram <ArrowUpRight size={13} />
            </a>
            <a href={restaurant.facebook}>
              Facebook <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="footer-base">
          <span>Pista House Irving</span>
          <span>Built by <a className="builder-credit" href="https://geethg.com" aria-label="Geeth Gunnampalli">Geeth</a></span>
        </div>
      </div>
    </footer>
  )
}
