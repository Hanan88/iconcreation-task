import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmout: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
            }

            toast.success(`${action.payload?.title_english} Added To Cart`);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            // state.value += 1
        },

        getQuantity(state, action) {
            let { quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { cartQuantity } = cartItem;

                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                { 
                    quantity: 0,
                }
            ); 
            state.cartTotalQuantity = quantity;
        }
    },
})

export const { addToCart, getQuantity } = cartSlice.actions

export default cartSlice.reducer