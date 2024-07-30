import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:'checkout',
    initialState:{shipping_address:{}},
    reducers:{
        store_checkout(state,action){
            state.shipping_address = action.payload
        }
    }
})
export const {store_checkout}=checkoutSlice.actions
export default checkoutSlice
export const selectShippingAddress = (state)=>state.checkout.shipping_address