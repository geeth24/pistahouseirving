import { navigation, pageImages, restaurant } from "@/lib/restaurant"

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
        "@id": restaurant.origin + path + "#breadcrumb",
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

export function RestaurantPageData({
  path,
}: {
  path: "/aboutus" | "/contactus"
}) {
  const url = restaurant.origin + path
  const image = pageImages[path]
  const page = navigation.find((link) => link.href === path)
  if (!page) return null

  return (
    <>
      <BreadcrumbData path={path} />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": path === "/aboutus" ? "AboutPage" : "ContactPage",
          "@id": url + "#webpage",
          url,
          name: page.name + " | " + restaurant.name,
          mainEntity: { "@id": restaurant.origin + "/#restaurant" },
          isPartOf: { "@id": restaurant.origin + "/#website" },
          breadcrumb: { "@id": url + "#breadcrumb" },
          primaryImageOfPage: {
            "@type": "ImageObject",
            contentUrl: new URL(image.url, restaurant.origin).href,
            width: image.width,
            height: image.height,
          },
        }}
      />
    </>
  )
}
