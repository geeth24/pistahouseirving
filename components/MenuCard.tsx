import React from "react"
interface MenuCardProps {
    title: string
    description: string
    price: string
}

function MenuCard({ title, description }: MenuCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-lg bg-pistaLightGray p-6 shadow-lg">
            <h1 className="text-lg font-bold text-pistaLightGreen md:text-xl ">
                {title}
            </h1>
            {<p className="font-sm text-pistaGreen">{description}</p>}
        </div>
    )
}

export default MenuCard
