"use client"
import { createContext, useContext, useState, type ReactNode } from "react"
export type Selection = { id: string; name: string; section: string }
type Order = {
  items: Selection[]
  toggle: (item: Selection) => void
  clear: () => void
}
const OrderContext = createContext<Order | null>(null)
export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Selection[]>([])
  function toggle(item: Selection) {
    setItems((current) =>
      current.some((it) => it.id === item.id)
        ? current.filter((it) => it.id !== item.id)
        : [...current, item],
    )
  }
  return (
    <OrderContext.Provider value={{ items, toggle, clear: () => setItems([]) }}>
      {children}
    </OrderContext.Provider>
  )
}
export function useOrder() {
  const order = useContext(OrderContext)
  if (!order) throw new Error("Missing OrderProvider")
  return order
}
