"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react"

interface OrderContextType {
    order: string
    addToOrder: (item: string) => void
    removeFromOrder: (item: string) => void
    clearOrder: () => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
    const [order, setOrder] = useState<string>("Your Selections:, ")

    const addToOrder = useCallback((item: string) => {
        setOrder((prev) => {
            const newOrder = prev + "\n" + item
            console.log(newOrder)
            return newOrder
        })
    }, [])

    const removeFromOrder = useCallback((item: string) => {
        setOrder((prev) => {
            const newOrder = prev.replace(item, "")
            console.log(newOrder)
            return newOrder
        })
    }, [])

    const clearOrder = useCallback(() => {
        setOrder("Your Selections:")
    }, [])

    return (
        <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, clearOrder }}>
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
