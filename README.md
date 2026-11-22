# Pista House Irving

Website for the Hyderabadi restaurant at 901 W Royal Ln, Suite 160, in Las Colinas, Irving, Texas. [Visit Pista House Irving](https://pistahouseirving.com/).

| Guest page | What guests can do |
| --- | --- |
| [Home](https://pistahouseirving.com/) | Find the restaurant, see house specialties, or start a pickup order. |
| [Dining menu](https://pistahouseirving.com/menu) | Search dishes by name or browse by section. The ordering partner provides current prices and availability. |
| [Catering](https://pistahouseirving.com/catering) | Explore event service and select dishes. The quote button opens an email draft with the selection. The guest reviews and sends it. |
| [Catering video](https://pistahouseirving.com/catering/video) | Watch a short behind-the-scenes look at an event setup. |
| [Our story](https://pistahouseirving.com/aboutus) | Read about the restaurant’s Hyderabadi roots. |
| [Contact and directions](https://pistahouseirving.com/contactus) | Find the entrance, get directions, check hours, or call the Irving location. |

## Local development

The site uses Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, and Motion. Install dependencies with Bun and start the development server.

```sh
bun install --frozen-lockfile
bun run dev
```

Open [localhost:3000](http://localhost:3000). To check a change before merging, run `bun run lint`, `bun run build`, and `bun run typecheck`.

## Updating restaurant information

| Change | Where to edit |
| --- | --- |
| Dining dishes and catering selections | [Dining menu](lib/dining-menu.ts) and [catering menu](lib/catering-menu.ts). Keep dish listings text-based and leave prices to the ordering partner. |
| Address, phone, ordering, and social links | [Restaurant details](lib/restaurant.ts). For an address change, also update the postal fields in the [restaurant structured data](app/layout.tsx), the [contact page description](app/contactus/page.tsx), and the [neighborhood map](components/neighborhood-map.tsx). |
| Hours | Update the [restaurant details](lib/restaurant.ts), the announcement and structured hours in the [layout](app/layout.tsx), and time references on the [home](app/page.tsx) and [contact](app/contactus/page.tsx) pages. Update the Google Business Profile separately, including holiday hours. |
| Visual identity and photography | [Theme, typography, and motion styles](styles/globals.css) and [restaurant images](public/images). |

## Local search after a release

The [sitemap](https://pistahouseirving.com/sitemap.xml) lists the six public pages and their preview images. The [video sitemap](https://pistahouseirving.com/video-sitemap.xml) lists the watch page, thumbnail, and MP4. The [crawl rules](https://pistahouseirving.com/robots.txt) point search engines to both sitemaps. Each page publishes a canonical URL and its own search description. The dining menu includes dishes in the page HTML and in structured data.

Keep the [catering video details](lib/catering-video.ts) in sync with the MP4 and poster in [public/videos](public/videos). When publishing a replacement video, give it a stable file URL and use its actual first publication date.

1. Open the restaurant’s verified property in [Google Search Console](https://search.google.com/search-console). Check that `sitemap.xml` was read successfully. Use URL Inspection on `/`, `/menu`, and `/catering` to see when Google last crawled them and which canonical it selected. Check the Video indexing report for `/catering/video` after Google has crawled it.
2. In the [Google Business Profile](https://business.google.com/), check the website and menu links, pickup destination, phone, suite number, and special hours against the live site. These listings are maintained separately from the repository.
3. In Search Console’s Performance report, compare the last 28 days with the previous 28. Track searches for the restaurant name separately from local searches such as “biryani Irving” and “Indian catering Irving.” In Business Profile performance, check calls and direction requests alongside website clicks.
