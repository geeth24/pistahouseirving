"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeProvider, useTheme } from "next-themes"
import { DropdownMenu, Dialog } from "radix-ui"
import { ArrowUpRight, Menu, X, Moon, Sun, Monitor, Check } from "lucide-react"
import type { ReactNode } from "react"
import { navigation, restaurant } from "@/lib/restaurant"
import { Button } from "@/components/ui/button"

export function AppearanceProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
function ThemeMenu() {
  const { theme, setTheme } = useTheme()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="icon" aria-label="Change appearance">
          <Sun className="sun" />
          <Moon className="moon" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="popover"
          sideOffset={8}
          align="end"
          aria-label="Appearance"
        >
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            {(
              [
                ["system", "System", Monitor],
                ["light", "Light", Sun],
                ["dark", "Dark", Moon],
              ] as const
            ).map(([value, label, Icon]) => (
              <DropdownMenu.RadioItem key={value} value={value}>
                <Icon size={16} />
                {label}
                <DropdownMenu.ItemIndicator>
                  <Check size={15} />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Pista House Irving home">
      <span className="wordmark" aria-hidden="true" />
      <span>Irving, Texas</span>
    </Link>
  )
}
export function SiteHeader() {
  const pathname = usePathname()
  const links = navigation.map(({ href, name }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? "page" : undefined}
    >
      {name}
    </Link>
  ))
  return (
    <header className="masthead">
      <div className="wrap mast-inner">
        <Brand />
        <nav aria-label="Main navigation" className="desktop-nav">
          {links}
        </nav>
        <div className="head-actions">
          <ThemeMenu />
          <Button asChild className="order-button">
            <a href={restaurant.order}>
              Order online <ArrowUpRight />
            </a>
          </Button>
          <Dialog.Root key={pathname}>
            <Dialog.Trigger asChild>
              <Button
                variant="icon"
                className="mobile-toggle"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="scrim" />
              <Dialog.Content
                className="mobile-panel"
                aria-describedby={undefined}
              >
                <div className="panel-heading">
                  <Dialog.Title>Explore Pista House</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="icon" aria-label="Close navigation">
                      <X />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile navigation">
                  {navigation.map(({ href, name }) => (
                    <Dialog.Close asChild key={href}>
                      <Link
                        href={href}
                        aria-current={pathname === href ? "page" : undefined}
                      >
                        {name}
                        <ArrowUpRight />
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>
                <a className="text-link" href={restaurant.tel}>
                  {restaurant.phone}
                </a>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
