"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react"

interface OrderContextType {
    items: string[]
    toggleItem: (title: string) => void
    removeItem: (title: string) => void
    clearOrder: () => void
    hasItem: (title: string) => boolean
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<string[]>([])

    const toggleItem = useCallback((title: string) => {
        if (!title) return
        setItems((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
    }, [])

    const removeItem = useCallback((title: string) => {
        setItems((prev) => prev.filter((t) => t !== title))
    }, [])

    const clearOrder = useCallback(() => setItems([]), [])

    const hasItem = useCallback((title: string) => items.includes(title), [items])

    return (
        <OrderContext.Provider value={{ items, toggleItem, removeItem, clearOrder, hasItem }}>
            {children}
        </OrderContext.Provider>
    )
}

export function useOrder() {
    const context = useContext(OrderContext)
    if (context === undefined) {
        throw new Error("useOrder must be used within an OrderProvider")
    }
    return context
}
