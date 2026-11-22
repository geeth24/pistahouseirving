"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduce ? undefined : { y: [6, 0], filter: ["blur(2px)", "blur(0px)"] }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
