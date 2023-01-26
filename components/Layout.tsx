import { useRouter } from "next/router"
import React from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { FaWhatsapp } from "react-icons/fa"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Datepicker from "tailwind-datepicker-react"
import { logEvent } from "firebase/analytics"
import { analytics } from "./Firebase"

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
    const [open, setOpen] = React.useState(false)

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
                            // dispatch(removeFromOrder(title + ", "))
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

    const options = {
        title: "",
        autoHide: true,
        todayBtn: false,
        clearBtn: false,

        theme: {
            background: "bg-pistaLightGray",
            todayBtn: "",
            clearBtn: "",
            icons: "text-pistaLightGreen bg-pistaGray hover:bg-pistaLightGreen hover:text-pistaLightGray active:bg-pistaLightGreen active:text-pistaLightGray focus:outline-none focus:bg-pistaLightGreen focus:text-pistaLightGray",
            text: "text-pistaLightGreen hover:text-pistaLightGreen active:text-pistaLightGreen focus:text-pistaLightGreen focus:outline-none hover:bg-pistaGray",
            disabledText:
                "text-pistaLightGreen/50 hover:text-pistaLightGreen active:text-pistaLightGreen/70 focus:text-pistaLightGreen/70 focus:outline-none hover:bg-pistaGray/70",
            input: "w-full rounded-md border-2 border-pistaGreen bg-transparent text-pistaGreen",
            inputIcon: "text-pistaGreen",
            selected:
                " bg-pistaLightGreen text-pistaLightGray hover:bg-pistaLightGreen hover:text-pistaLightGray active:bg-pistaLightGreen active:text-pistaLightGray focus:outline-none focus:bg-pistaLightGreen focus:text-pistaLightGray",
        },
        datepickerClassNames: "ml-10 mt-10 ",
        // defaultDate: new Date("2023-01-01"),
        language: "en",
    }

    const [show, setShow] = React.useState(false)
    const handleChange = (selectedDate: Date) => {
        var month = selectedDate.getMonth() + 1
        var day = selectedDate.getDate()
        var year = selectedDate.getFullYear()
        setDate(`${month}/${day}/${year}`)
    }
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    const handleQuote = () => {
        // var dateArray = date.split("-")
        // var newDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0]
        // setDate(newDate)

        //loop through order and add index 1. to each item
        var orderArray = order.split(", ")
        var orderArray2 = []
        for (var i = 1; i < orderArray.length; i++) {
            if (
                orderArray[i] !== " " &&
                orderArray[i] !== "" &&
                orderArray[i] !== "\n"
            ) {
                console.log(orderArray[i])
                orderArray2.push(`${i}. ${orderArray[i]}`)
            }
        }
        var orderString = orderArray2.join("%0A")
        var orderString2 = orderString
            .toLowerCase()
            .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())

        console.log(orderString2)
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
            logEvent(analytics, "quote", {
                name: name,
                partySize: partySize,
                date: date,
                order: orderString2,
            })
        }

        console.log(
            "https://api.whatsapp.com/send?phone=16823800209&text=" +
                "Hello, I would like to get a quote for these items: " +
                "%0A" +
                "Items: " +
                "%0A" +
                orderString2
                    .replace("Your Selections:,", "")
                    .replace(/,/g, "%0A") +
                "%0A" +
                "Name: " +
                name +
                "%0A" +
                "Party Size: " +
                partySize +
                "%0A" +
                "Date: " +
                date +
                "%0A"
        )
        return (window.location.href =
            "https://api.whatsapp.com/send?phone=16823800209&text=" +
            "Hello, I would like to get a quote for these items: " +
            "%0A" +
            "Items: " +
            "%0A" +
            orderString2.replace("Your Selections:,", "").replace(/,/g, "%0A") +
            "%0A" +
            "Name: " +
            name +
            "%0A" +
            "Party Size: " +
            partySize +
            "%0A" +
            "Date: " +
            date +
            "%0A")
    }

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-pistaLightGray bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-pistaGray px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                        <button
                                            type="button"
                                            className="rounded-md bg-transparent text-pistaLightGreen hover:text-pistaLightGreen/70"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">
                                                Close
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="mt-3 text-left ">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl font-medium leading-6 text-pistaLightGreen"
                                            >
                                                Get a Quote
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <span className="text-md text-pistaLightGreen/70">
                                                    Please fill out the form to
                                                    get in touch with Pista
                                                    House
                                                </span>
                                            </div>

                                            <div className="mt-2">
                                                <span className="text-lg text-pistaGreen">
                                                    Your Selections: <br />{" "}
                                                    {item}
                                                </span>
                                            </div>
                                            <div className="mt-2">
                                                <label className="text-lg text-pistaGreen">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="w-full rounded-md border-2 border-pistaGreen bg-transparent p-2 text-pistaGreen focus:border-none focus:outline-none active:outline-none"
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <label className="text-lg text-pistaGreen">
                                                    Party Size
                                                </label>
                                                <input
                                                    type="number"
                                                    placeholder="Party Size"
                                                    className="w-full rounded-md border-2 border-pistaGreen bg-transparent p-2 text-pistaGreen outline-none focus:border-none focus:outline-none active:outline-none"
                                                    style={{
                                                        WebkitAppearance:
                                                            "none",
                                                        MozAppearance:
                                                            "textfield",
                                                    }}
                                                    onChange={(e) =>
                                                        setPartySize(
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <label className="text-lg text-pistaGreen">
                                                    Date
                                                </label>
                                                <Datepicker
                                                    options={options}
                                                    onChange={handleChange}
                                                    show={show}
                                                    setShow={handleClose}
                                                    //change the date format
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className={`inline-flex w-full justify-center rounded-md border border-transparent bg-pistaGreen px-4 py-2 text-base font-medium text-pistaLightGray shadow-sm hover:bg-pistaGreen/70   sm:ml-3 sm:w-auto sm:text-sm ${
                                                name === "" ||
                                                partySize === 0 ||
                                                date === ""
                                                    ? "cursor-not-allowed opacity-50"
                                                    : ""
                                            }`}

                                            onClick={() => {
                                                handleQuote()
                                                setOpen(false)
                                            }}
                                            disabled={
                                                name === "" ||
                                                partySize === 0 ||
                                                date === ""
                                            }
                                        >
                                            Get Quote
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-base font-medium text-red-700 shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Navbar />
            {children}
            <Footer />
            <div className="fixed bottom-0 right-0 m-10 md:m-20 ">
                <button
                    className="rounded-full bg-pistaGreen p-2 px-4 py-4 text-pistaLightGreen shadow-lg"
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    <FaWhatsapp className="h-6 w-6" />
                </button>
            </div>
        </>
    )
}
export default Layout
