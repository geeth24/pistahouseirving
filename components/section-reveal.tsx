import type { ReactNode } from "react"

export function SectionReveal({
  as: Element = "div",
  children,
  className,
}: {
  as?: "div" | "header" | "figure" | "h2"
  children: ReactNode
  className?: string
}) {
  return (
    <Element className={className} data-reveal="text">
      {children}
    </Element>
  )
}
