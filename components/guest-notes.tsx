import { ArrowUpRight } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const sources = {
  Sulekha: "https://us.sulekha.com/irving-tx/restaurants/pista-house-847210",
  DoorDash:
    "https://www.doordash.com/store/pista-house-irving-212227/16929014/",
}

const notes = [
  {
    name: "Irfan S.",
    source: "Sulekha",
    quote: "Taste is as good as Hyderabad Biryani.",
  },
  {
    name: "Chakradhar B.",
    source: "Sulekha",
    quote: "I am glad I made good choice for my reception.",
  },
  {
    name: "Chandra R.",
    source: "DoorDash",
    quote: "Excellent Paneer Pulav with moderate spice level",
  },
  {
    name: "Alice L.",
    source: "DoorDash",
    quote: "The Fish Biryani is super delicious!",
  },
  {
    name: "Love B.",
    source: "DoorDash",
    quote: "The butter chicken is my second favorite from my order.",
  },
] as const

export function GuestNotes() {
  return (
    <section
      className="guest-notes"
      id="guest-notes"
      aria-labelledby="guest-notes-title"
    >
      <div className="wrap">
        <h2 id="guest-notes-title">From our guests</h2>
        <div className="guest-quotes">
          {notes.map(({ name, source, quote }) => (
            <SectionReveal className="guest-note" key={name}>
              <figure>
                <blockquote cite={sources[source]}>“{quote}”</blockquote>
                <figcaption>
                  <span>{name}</span>
                  <a
                    href={sources[source]}
                    aria-label={`Read ${name}’s review on ${source}`}
                  >
                    {source} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
