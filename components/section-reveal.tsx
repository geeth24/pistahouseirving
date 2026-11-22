"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

const elements = {
  div: motion.div,
  header: motion.header,
  figure: motion.figure,
  h2: motion.h2,
}

export function SectionReveal({
  as = "div",
  children,
  className,
  delay = 0,
}: {
  as?: keyof typeof elements
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  const Element = elements[as]
  return (
    <Element
      className={className}
      data-reveal=""
      initial={false}
      whileInView={
        reduce
          ? undefined
          : {
              y: [16, 0],
              opacity: [0.55, 1],
              filter: ["blur(3px)", "blur(0px)"],
              transitionEnd: { filter: "none" },
            }
      }
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.75, 0.25, 1] }}
    >
      {children}
    </Element>
  )
}
