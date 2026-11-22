"use client"
import { useState } from "react"
import { Map, Navigation, Compass, ArrowUpRight } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

function AreaDrawing() {
  return (
    <svg
      className="area-drawing"
      viewBox="0 0 720 395"
      role="img"
      aria-label="Illustrated neighborhood map. Pista House is north of West Royal Lane and west of North MacArthur Boulevard in Las Colinas."
    >
      <defs>
        <pattern
          id="map-paper"
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r=".55" fill="var(--atlas-ink)" opacity=".19" />
        </pattern>
        <g id="grove" stroke="var(--atlas-green)" strokeWidth="1.4">
          <path d="M0 10V-2m-5 5 5 3 5-4" fill="none" />
          <path
            d="M-1 3c-9 2-12-5-7-10-2-4 1-9 5-8 5-7 12-2 11 3 7 2 8 9 3 12z"
            fill="var(--atlas-leaf)"
          />
        </g>
      </defs>
      <rect width="720" height="395" fill="var(--atlas-ground)" />
      <rect width="720" height="395" fill="url(#map-paper)" />
      <g
        fill="var(--atlas-block)"
        stroke="var(--atlas-outline)"
        strokeWidth="1"
      >
        {[
          [26, 38, 48, 39],
          [20, 93, 43, 66],
          [20, 172, 48, 31],
          [130, 34, 70, 30],
          [212, 34, 49, 29],
          [298, 27, 95, 57],
          [150, 105, 74, 32],
          [246, 109, 44, 22],
          [315, 136, 74, 43],
          [518, 35, 60, 36],
          [611, 29, 73, 46],
          [523, 156, 65, 24],
          [605, 139, 49, 63],
          [544, 303, 56, 28],
          [618, 298, 54, 65],
          [341, 305, 55, 21],
          [140, 298, 59, 26],
          [239, 297, 52, 44],
        ].map(([x, y, w, h]) => (
          <rect key={x + "-" + y} x={x} y={y} width={w} height={h} rx="3" />
        ))}
      </g>
      <path
        d="M-10 316c70-17 103 14 162 41s151 27 206 51H-10z"
        fill="var(--atlas-water)"
      />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {[
          ["M-10 251 Q125 246 237 251H735", 24],
          ["M484 -8V231Q488 270 466 311L417 409", 26],
          ["M98 -8Q112 69 98 113T98 251", 13],
          ["M485 101Q565 106 733 95", 12],
        ].map(([d, w]) => (
          <g key={d}>
            <path
              d={String(d)}
              stroke="var(--atlas-outline)"
              strokeWidth={Number(w) + 3}
            />
            <path
              d={String(d)}
              stroke="var(--atlas-road)"
              strokeWidth={Number(w)}
            />
          </g>
        ))}
      </g>
      <g>
        {[
          [43, 291],
          [61, 306],
          [306, 354],
          [320, 365],
          [396, 291],
          [555, 206],
          [570, 213],
          [138, 183],
          [116, 50],
          [681, 157],
          [662, 330],
          [571, 346],
          [584, 351],
        ].map(([x, y]) => (
          <use href="#grove" key={x + "-" + y} x={x} y={y} />
        ))}
      </g>
      <g
        fill="var(--atlas-ink)"
        fontFamily="var(--body)"
        fontSize="15"
        fontWeight="650"
      >
        <text x="173" y="256">
          W Royal Ln
        </text>
        <text transform="translate(490 209) rotate(-90)">N MacArthur Blvd</text>
        <text x="563" y="104" fontSize="12">
          Tuscan Dr
        </text>
        <text transform="translate(101 166) rotate(-87)" fontSize="12">
          Sierra Dr
        </text>
      </g>
      <g transform="translate(258,202)">
        <ellipse cy="5" rx="12" ry="3" fill="var(--atlas-outline)" />
        <path
          d="M0 3S-17-14-17-25a17 17 0 0 1 34 0C17-14 0 3 0 3Z"
          fill="var(--hero)"
        />
        <circle cy="-25" r="5" fill="var(--hero-ink)" />
      </g>
      <g transform="translate(180 149)">
        <rect width="155" height="38" rx="3" fill="var(--hero)" />
        <text
          x="77.5"
          y="25"
          textAnchor="middle"
          fill="var(--hero-ink)"
          fontFamily="var(--display)"
          fontSize="21"
        >
          Pista House
        </text>
      </g>
      <g transform="translate(671 39)" stroke="var(--atlas-ink)" fill="none">
        <path d="M0 18V-4m0 0-5 13 5-3 5 3z" />
        <text
          x="0"
          y="-9"
          stroke="none"
          textAnchor="middle"
          fill="var(--atlas-ink)"
          fontSize="12"
        >
          N
        </text>
      </g>
    </svg>
  )
}
export function NeighborhoodMap() {
  const [interactive, setInteractive] = useState(false)
  return (
    <section className="neighborhood">
      <div className="wrap neighborhood-inner">
        <div className="map-copy">
          <span className="kicker">
            <Compass size={17} /> Around the restaurant
          </span>
          <h2>Our corner of Las Colinas.</h2>
          <p>
            We’re on the north side of West Royal Lane, just west of North
            MacArthur Boulevard. Look for Suite 160 in the shopping plaza.
          </p>
          <a className="text-link" href={restaurant.directions}>
            Directions to the entrance <ArrowUpRight />
          </a>
        </div>
        <div className="map-board">
          <div className="map-toolbar">
            <span>
              <Map size={17} /> Neighborhood map
            </span>
            <button
              onClick={() => setInteractive(!interactive)}
              aria-pressed={interactive}
            >
              {interactive ? "Show illustration" : "Show Google Maps"}
            </button>
          </div>
          {interactive ? (
            <iframe
              className="location-map"
              title="Google Maps location of Pista House Irving"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Pista%20House%20901%20W%20Royal%20Ln%20Irving%20TX%2075039&z=16&output=embed"
            />
          ) : (
            <AreaDrawing />
          )}
          <div className="map-key">
            <Navigation size={15} />
            {restaurant.street} · Irving, TX
          </div>
        </div>
      </div>
    </section>
  )
}
