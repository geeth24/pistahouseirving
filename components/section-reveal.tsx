import type { CSSProperties, ReactNode } from "react"

export function SectionReveal({
  as: Element = "div",
  children,
  className,
  delay = 0,
}: {
  as?: "div" | "header" | "figure" | "h2"
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <Element
      className={className}
      data-reveal="text"
      style={
        delay ? ({ "--reveal-delay": delay + "s" } as CSSProperties) : undefined
      }
    >
      {children}
    </Element>
  )
}
