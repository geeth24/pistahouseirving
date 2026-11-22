"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function NavigationMotion() {
  const pathname = usePathname()
  const destination = useRef<string | null>(null)

  useEffect(() => {
    const root = document.documentElement
    let timeout: ReturnType<typeof setTimeout>

    function reset() {
      delete root.dataset.anchorScroll
      destination.current = null
      clearTimeout(timeout)
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
        root.dataset.anchorScroll = ""
        timeout = setTimeout(reset, 1400)
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
