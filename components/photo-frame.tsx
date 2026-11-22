"use client"
import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

export function PhotoFrame({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <div className={"photo-mount " + className}>
      <motion.div
        className="mounted-photo"
        initial={false}
        whileInView={reduce ? undefined : { scale: [1.035, 1], y: [3, 0] }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
