import { useRouter } from "next/router"
import React from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { removeFromOrder } from "@/redux/order"

type LayoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    const router = useRouter()
    const { order } = useSelector((state: any) => state.order)
    const dispatch = useDispatch()
    const [name, setName] = React.useState("")
    const [partySize, setPartySize] = React.useState(0)
    const [date, setDate] = React.useState("")
    const [isAdded, setIsAdded] = React.useState(false)

    var item = null

    //
    item = order.split(", ").map((title: any) => {
        if (
            order.includes(title) &&
            title !== "" &&
            title !== "Your Selections:"
        ) {
            return (
                <div
                    key={title}
                    onClick={() => {
                        if (
                            order.includes(title) &&
                            title !== "Your Selections:"
                        ) {
                            console.log("title", title)
                            dispatch(removeFromOrder(title + ", "))
                            setIsAdded(false)
                            // toast({
                            //     title: "Removed from Order",
                            //     description: `${title} has been removed from your order`,
                            //     status: "error",
                            //     duration: 3000,
                            //     isClosable: true,
                            // })
                        }
                    }}
                >
                    {title}
                </div>
            )
        } else {
            return null
        }
    })

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
export default Layout
