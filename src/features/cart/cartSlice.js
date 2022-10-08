import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

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
            toast.success("Added To Cart");
        }
    },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer