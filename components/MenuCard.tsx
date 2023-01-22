import React from "react"
interface MenuCardProps {
    title: string
    description: string
    price: string
}

function MenuCard({ title, description }: MenuCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-lg bg-green-800 p-6 shadow-lg">
            <h1 className="text-lg font-bold text-white md:text-xl ">
                {title}
            </h1>
            {<p className="font-sm text-green-300">{description}</p>}
        </div>
    )
}

export default MenuCard
