"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function RevealPlayback() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const visible = new Set<HTMLElement>()
    let timer: ReturnType<typeof setTimeout>
    const settleTime = 150

    function show(element: HTMLElement) {
      element.dataset.phase = "shown"
      observer.unobserve(element)
      visible.delete(element)
    }

    function schedule() {
      clearTimeout(timer)
      if (visible.size)
        timer = setTimeout(() => visible.forEach(show), settleTime + 10)
    }

    function onScroll() {
      if (visible.size) schedule()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement
          if (entry.isIntersecting && entry.intersectionRatio >= 0.08)
            visible.add(element)
          else visible.delete(element)
        }
        schedule()
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    )

    function configure() {
      clearTimeout(timer)
      visible.clear()
      observer.disconnect()
      for (const element of elements) {
        if (preference.matches) show(element)
        else if (element.dataset.phase !== "shown") {
          element.dataset.phase = "waiting"
          observer.observe(element)
        }
      }
    }

    configure()
    preference.addEventListener("change", configure)
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    })
    return () => {
      clearTimeout(timer)
      observer.disconnect()
      preference.removeEventListener("change", configure)
      window.removeEventListener("scroll", onScroll, true)
      elements.forEach((element) => delete element.dataset.phase)
    }
  }, [pathname])

  return null
}
