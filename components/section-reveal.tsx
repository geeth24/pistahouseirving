import type { CSSProperties, ReactNode } from "react"

export function SectionReveal({
  as: Element = "div",
  children,
  className,
  delay = 0,
  treatment = "text",
}: {
  as?: "div" | "header" | "figure" | "h2"
  children: ReactNode
  className?: string
  delay?: number
  treatment?: "text" | "photo"
}) {
  return (
    <Element
      className={className}
      data-reveal={treatment === "text" ? "text" : undefined}
      style={
        delay ? ({ "--reveal-delay": delay + "s" } as CSSProperties) : undefined
      }
    >
      {children}
    </Element>
  )
}
