"use client"
import { useRef, useState, type RefObject } from "react"
import { Check, Plus, Leaf, Search, X, ArrowUpRight } from "lucide-react"
import { Dialog } from "radix-ui"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import type { MenuSection } from "@/lib/catalog"
import { useOrder } from "@/contexts/order-context"
import { restaurant } from "@/lib/restaurant"

function QuoteReview({
  searchRef,
}: {
  searchRef: RefObject<HTMLInputElement | null>
}) {
  const { items, toggle, clear } = useOrder()
  const lines = items
    .map((item) => item.name + " (" + item.section + ")")
    .join("\r\n")
  const body =
    "Hello Pista House,\r\n\r\nI'd like a catering quote for these dishes:\r\n" +
    lines +
    "\r\n\r\nEvent date:\r\nVenue:\r\nGuest count:\r\nName:\r\nPhone:"
  return (
    <Dialog.Root>
      <div className="quote-bar" hidden={!items.length}>
        <span aria-live="polite">
          {items.length} {items.length === 1 ? "dish" : "dishes"} selected
        </span>
        <Dialog.Trigger asChild>
          <Button>
            Review selection <ArrowUpRight />
          </Button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="scrim" />
        <Dialog.Content
          className="quote-panel"
          onCloseAutoFocus={(event) => {
            if (!items.length && searchRef.current) {
              event.preventDefault()
              searchRef.current.focus()
            }
          }}
        >
          <div className="panel-heading">
            <Dialog.Title>Your catering menu</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="icon" aria-label="Close selection">
                <X />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Description>
            Start an email with your choices and add your event details.
          </Dialog.Description>
          {items.length > 0 ? (
            <>
              <ul role="list">
                {items.map((item) => (
                  <li key={item.id}>
                    <span>
                      {item.name}
                      <small>{item.section}</small>
                    </span>
                    <Button
                      variant="icon"
                      aria-label={"Remove " + item.name}
                      onClick={() => toggle(item)}
                    >
                      <X />
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <Button asChild>
                  <a
                    href={
                      "mailto:" +
                      restaurant.email +
                      "?subject=Catering%20quote&body=" +
                      encodeURIComponent(body)
                    }
                  >
                    Email your list <ArrowUpRight />
                  </a>
                </Button>
                <button className="text-link" onClick={clear}>
                  Clear selection
                </button>
              </div>
              <a className="text-link" href={restaurant.tel}>
                Call {restaurant.phone}
              </a>
            </>
          ) : (
            <p>Your selection is empty. Close this panel to choose dishes.</p>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
const filters = ["All dishes", "Vegetarian", "Non-vegetarian"] as const
export function Catalog({
  sections,
  catering = false,
}: {
  sections: MenuSection[]
  catering?: boolean
}) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<(typeof filters)[number]>("All dishes")
  const { items, toggle } = useOrder()
  const searchRef = useRef<HTMLInputElement>(null)
  const query = search.trim().toLowerCase()
  const visible = sections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (dish) =>
          (filter === "All dishes" ||
            dish.vegetarian === (filter === "Vegetarian")) &&
          [dish.name, dish.description, section.name].some((value) =>
            value?.toLowerCase().includes(query),
          ),
      ),
    }))
    .filter((section) => section.items.length)
  function reset() {
    setSearch("")
    setFilter("All dishes")
  }
  return (
    <div className="catalog">
      <div className="catalog-controls">
        <label className="searchbox">
          <Search size={18} />
          <Input
            ref={searchRef}
            aria-label="Search dishes"
            type="search"
            placeholder="Search dishes or ingredients"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <div className="filters" aria-label="Dietary filter" role="group">
          {filters.map((value) => (
            <button
              key={value}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      {visible.length ? (
        <div className="catalog-body">
          <aside>
            <nav aria-label="Menu sections">
              <h2>On the menu</h2>
              {visible.map((section) => (
                <a href={"#" + section.id} key={section.id}>
                  {section.name}
                </a>
              ))}
            </nav>
          </aside>
          <div>
            {visible.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="dish-section"
              >
                {section.aliases?.map((alias) => (
                  <span
                    key={alias}
                    id={alias}
                    className="legacy-anchor"
                    aria-hidden="true"
                  />
                ))}
                <h2>{section.name}</h2>
                {section.note && <p className="menu-note">{section.note}</p>}
                <ul role="list" className="dish-list">
                  {section.items.map((dish) => {
                    const item = {
                      id: section.id + "/" + dish.name,
                      name: dish.name,
                      section: section.name,
                    }
                    const selected = items.some((entry) => entry.id === item.id)
                    return (
                      <li key={item.id}>
                        <div>
                          <h3>
                            {dish.name}
                            {dish.vegetarian && !catering && (
                              <span
                                className="dish-mark"
                                role="img"
                                aria-label="Vegetarian"
                                title="Vegetarian"
                              >
                                <Leaf size={13} />
                              </span>
                            )}
                          </h3>
                          {dish.description && <p>{dish.description}</p>}
                        </div>
                        {catering && (
                          <button
                            className="dish-toggle"
                            aria-pressed={selected}
                            aria-label={
                              (selected ? "Remove " : "Select ") + dish.name
                            }
                            onClick={() => toggle(item)}
                          >
                            {selected ? (
                              <Check size={17} />
                            ) : (
                              <Plus size={17} />
                            )}
                          </button>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty" role="status">
          <h2>No matching dishes</h2>
          <p>Try a different name or clear your filters.</p>
          <Button onClick={reset} variant="outline">
            Show all dishes
          </Button>
        </div>
      )}
      {catering && <QuoteReview searchRef={searchRef} />}
    </div>
  )
}
