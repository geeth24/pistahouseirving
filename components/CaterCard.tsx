import { removeFromOrder, addToOrder } from "@/redux/order"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
interface CaterCardProps {
    title: string
    description: string
    price: string
}

function CaterCard({ title }: CaterCardProps) {
    const { order } = useSelector((state: any) => state.order)
    const dispatch = useDispatch()

    const [isAdded, setIsAdded] = React.useState(false)
    return (
        <div
            className={`flex cursor-pointer flex-col justify-between rounded-lg bg-pistaLightGray p-6 shadow-lg ${
                isAdded ? "bg-pistaLightGreen" : ""
            }`}
            onClick={() => {
                //if the order string has the title, remove it from the order
                if (order.includes(title) && title !== "") {
                    dispatch(removeFromOrder(title + ", "))

                    setIsAdded(false)
                } else if (title !== "") {
                    dispatch(addToOrder(title + ", "))
                    setIsAdded(true)
                }
            }}
        >
            <h1
                className={`text-lg font-bold text-pistaLightGreen md:text-xl ${
                    isAdded ? "text-pistaLightGray" : ""
                }`}
            >
                {title}
            </h1>
        </div>
    )
}

export default CaterCard
