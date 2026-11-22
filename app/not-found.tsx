import Link from "next/link"
export default function NotFound() {
  return (
    <section className="wrap intro">
      <h1>Page not found</h1>
      <p>
        Find a dish on{" "}
        <Link className="text-link" href="/menu">
          our menu
        </Link>{" "}
        or go back to the{" "}
        <Link className="text-link" href="/">
          home page
        </Link>
        .
      </p>
    </section>
  )
}
