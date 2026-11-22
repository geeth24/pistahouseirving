"use client"
import { SectionReveal } from "@/components/section-reveal"
import { useState } from "react"
import { Map, Navigation, Compass, ArrowUpRight } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

function AreaDrawing() {
  const plazaBuildings = [
    "M24 20h51v20H47v24H24z",
    "M96 25h67v19H96z",
    "M192 25h57v14h-17v13h-40z",
    "M261 55h34v23h-34z",
    "M60 177h72v24h-17v11H60z",
    "M142 179h73v24h-22v9h-51z",
    "M230 161h49v18h-49z",
    "M242 202h39v22h-39z",
    "M365 54h28v38h-28z",
    "M418 90h44v15h-44z",
    "M365 171h30v39h-30z",
    "M411 171h48v17h-48z",
    "M415 200h33v20h-33z",
    "M348 288h46v15h-31v21h-15z",
    "M414 300h40v24h-40z",
    "M361 345h60v13h-60z",
  ]

  return (
    <svg
      className="area-drawing"
      viewBox="0 0 480 370"
      role="img"
      aria-label="Illustrated neighborhood map. Pista House Irving, Suite 160, is on the north side of West Royal Lane, west of North MacArthur Boulevard."
    >
      <defs>
        <g id="plaza-oak">
          <path d="M-2.6 0h5.2l.6 11.5h-6.4z" fill="var(--atlas-trunk)" />
          <path
            d="M-15-2c-3-3-2-8 2-10 0-4 4-7 8-6 4-5 12-4 15 2 5 0 9 5 7 10 3 5-1 10-6 10H-9c-4 0-7-2-6-6Z"
            fill="var(--atlas-leaf)"
            stroke="var(--atlas-green)"
            strokeWidth="1.3"
          />
        </g>
      </defs>
      <rect width="480" height="370" fill="var(--atlas-ground)" />
      <g
        fill="var(--atlas-parcel)"
        stroke="var(--atlas-outline)"
        strokeWidth="1"
      >
        <path d="M-5-3h311v90H66l-8 36H-5z" />
        <path d="M49 97h255v138H32c4-52 8-93 17-138z" />
        <path d="M349-3h137v120H349zM351 146h135v89H351z" />
        <path d="M346 279h139v101H296c26-38 37-69 50-101z" />
      </g>
      <g fill="none" stroke="var(--atlas-path)" strokeWidth="5">
        <path d="M-8 78h64l20-17h200M35 242c-1-33 4-68 13-101M79 221h137M223 238V147h66M398 104v-66h46M363 223h109M350 331h120" />
      </g>
      <g
        fill="var(--atlas-block)"
        stroke="var(--atlas-roof)"
        strokeWidth="1.15"
        strokeLinejoin="round"
      >
        {plazaBuildings.map((d) => (
          <path d={d} key={d} />
        ))}
      </g>
      <path
        fill="var(--atlas-meadow)"
        d="M0 279c56 1 104 20 146 39 38 18 72 26 113 30l-14 22H0z"
      />
      <path
        fill="var(--atlas-water)"
        d="M0 305c45 0 83 17 123 35 32 15 61 22 100 30H0z"
      />
      <path
        d="M0 314c43 3 77 17 108 31m-82-8c17 4 28 9 40 14m80 5 36 10"
        fill="none"
        stroke="var(--atlas-water-line)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <g>
        <use href="#plaza-oak" transform="translate(106 64) scale(.94)" />
        <use href="#plaza-oak" transform="translate(390 31) scale(.86)" />
        <use href="#plaza-oak" transform="translate(161 306)" />
        <use href="#plaza-oak" transform="translate(209 321) scale(.90)" />
        <use href="#plaza-oak" transform="translate(449 345) scale(.92)" />
      </g>
      <g fill="none" strokeLinecap="round">
        <path
          d="M333 134h155"
          stroke="var(--atlas-road-edge)"
          strokeWidth="22"
        />
        <path d="M333 134h155" stroke="var(--atlas-road)" strokeWidth="20" />
        <g stroke="var(--atlas-road-edge)" strokeWidth="36">
          <path d="M329-15v263c0 40-30 85-57 134M-10 257h502" />
        </g>
        <g stroke="var(--atlas-road)" strokeWidth="32">
          <path d="M329-15v263c0 40-30 85-57 134M-10 257h502" />
        </g>
        <g stroke="var(--atlas-road-edge)" strokeWidth="1.2">
          <path d="M3 257h20m212 0h63m62 0h112M329 187v42m-4 53c-6 19-18 42-30 63" />
        </g>
      </g>
      <g
        className="area-road-label"
        textAnchor="middle"
        fill="var(--atlas-ink)"
      >
        <text x="136" y="264">
          W Royal Ln
        </text>
        <text transform="translate(335 108) rotate(-90)">N MacArthur Blvd</text>
        <text x="412" y="139" fontSize="16">
          Tuscan Dr
        </text>
      </g>
      <g transform="translate(438 39)" textAnchor="middle">
        <circle
          r="25"
          fill="var(--atlas-road)"
          stroke="var(--atlas-road-edge)"
        />
        <text y="-8" fill="var(--atlas-ink)" fontSize="13" fontWeight="800">
          N
        </text>
        <path
          d="M0-4 6 7 0 19-6 7Z"
          fill="var(--atlas-road)"
          stroke="var(--atlas-ink)"
          strokeWidth="1.4"
        />
        <path d="M0-4 6 7H-6Z" fill="var(--atlas-ink)" />
      </g>
      <g>
        <ellipse
          cx="165"
          cy="208"
          rx="11"
          ry="3.5"
          fill="var(--atlas-road-edge)"
        />
        <path
          d="M165 208s-18-20-18-31a18 18 0 0 1 36 0c0 11-18 31-18 31Z"
          fill="var(--atlas-pin)"
          stroke="var(--atlas-label-ink)"
          strokeWidth="2"
        />
        <circle cx="165" cy="177" r="5.3" fill="var(--atlas-label-ink)" />
        <rect
          x="46"
          y="81"
          width="222"
          height="71"
          rx="4"
          fill="var(--atlas-label)"
          stroke="var(--atlas-label-ink)"
          strokeWidth="1.7"
        />
        <text
          x="157"
          y="111"
          textAnchor="middle"
          fontFamily="var(--display)"
          fontSize="24"
          fill="var(--atlas-label-ink)"
        >
          Pista House Irving
        </text>
        <text
          x="157"
          y="137"
          textAnchor="middle"
          fontSize="18"
          fontWeight="600"
          fill="var(--atlas-label-ink)"
        >
          Suite 160
        </text>
      </g>
    </svg>
  )
}

export function NeighborhoodMap() {
  const [interactive, setInteractive] = useState(false)
  return (
    <section id="neighborhood-map" className="neighborhood">
      <div className="wrap neighborhood-inner">
        <SectionReveal className="map-copy">
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
        </SectionReveal>
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
              referrerPolicy="strict-origin-when-cross-origin"
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
