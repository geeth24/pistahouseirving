import { navigation, restaurant } from "@/lib/restaurant"

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function BreadcrumbData({
  path,
}: {
  path: (typeof navigation)[number]["href"]
}) {
  const page = navigation.find((link) => link.href === path)
  if (!page) return null

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: restaurant.name,
            item: restaurant.origin + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.name,
            item: restaurant.origin + path,
          },
        ],
      }}
    />
  )
}
