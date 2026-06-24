import React from "react"

interface MenuCardProps {
    title: string
    description: string
    isVeg?: boolean
    searchQuery?: string
}

function highlightText(text: string, query: string) {
    if (!query.trim()) return text

    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
            ? <mark key={i} className="rounded bg-primary/20 px-0.5 text-primary-dark">{part}</mark>
            : part
    )
}

function MenuCard({ title, description, isVeg = false, searchQuery = "" }: MenuCardProps) {
    return (
        <div className="flex gap-3 border-b border-ink/8 py-5">
            <span className={`mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border ${isVeg ? "border-green-700" : "border-red-700"}`} aria-label={isVeg ? "Vegetarian" : "Non-vegetarian"}>
                <span className={`h-1.5 w-1.5 rounded-full ${isVeg ? "bg-green-700" : "bg-red-700"}`} />
            </span>
            <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                    {highlightText(title, searchQuery)}
                </h3>
                {description && (
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {highlightText(description, searchQuery)}
                    </p>
                )}
            </div>
        </div>
    )
}

export default MenuCard
