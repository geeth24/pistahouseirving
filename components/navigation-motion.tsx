"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function NavigationMotion() {
  const pathname = usePathname()
  const destination = useRef<string | null>(null)

  useEffect(() => {
    function reset() {
      destination.current = null
    }

    function followLink(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return
      const link =
        event.target instanceof Element &&
        event.target.closest<HTMLAnchorElement>("a[href]")
      if (!link || link.target || link.hasAttribute("download")) return
      const url = new URL(link.href)
      if (url.origin !== location.origin) return
      reset()
      if (url.pathname !== location.pathname) {
        if (!url.hash) destination.current = url.pathname
      } else if (
        url.hash &&
        url.search === location.search &&
        event.detail > 0
      ) {
        const target = document.getElementById(url.hash.slice(1))
        if (!target) return
        event.preventDefault()
        if (url.href !== location.href)
          window.history.pushState(null, "", url.href)
        if (target.tabIndex < 0 && !target.hasAttribute("tabindex")) {
          target.tabIndex = -1
          target.addEventListener(
            "blur",
            () => target.removeAttribute("tabindex"),
            { once: true },
          )
        }
        target.focus({ preventScroll: true })
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        })
      }
    }

    document.addEventListener("click", followLink, true)
    window.addEventListener("popstate", reset)
    window.addEventListener("pagehide", reset)
    return () => {
      reset()
      document.removeEventListener("click", followLink, true)
      window.removeEventListener("popstate", reset)
      window.removeEventListener("pagehide", reset)
    }
  }, [])

  useEffect(() => {
    if (destination.current !== pathname) return
    destination.current = null
    const title = document.querySelector<HTMLElement>("main .page-title")
    if (title) title.dataset.enter = ""
    return () => {
      if (title) delete title.dataset.enter
    }
  }, [pathname])

  return null
}
