import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

// Define a type for the slice state
interface OrderState {
    order: string
}

// Define the initial state using that type
const initialState: OrderState = {
    order: "Your Selections:",
}

export const orderSlice = createSlice({
    name: "order",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToOrder: (state, action: PayloadAction<string>) => {
            state.order = state.order + ", " + "\n" + action.payload
        },
        removeFromOrder: (state, action: PayloadAction<string>) => {
            state.order = state.order.replace(action.payload, "")
        },

        clearOrder: (state) => {
            state.order = "Your Selections:"
        },
    },
})

export const { addToOrder, removeFromOrder, clearOrder } = orderSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default orderSlice.reducer
