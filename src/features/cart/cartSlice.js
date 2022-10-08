import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state) => {
            state.value += 1
            localStorage.setItem('cart items', state.value)
        }
    },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer