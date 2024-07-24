import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{products:[]},
    reducers:{
        store_product(state,action){
            state.products = action.payload
        }
    }
})
export const {store_product}=productSlice.actions
export default productSlice
export const selectproducts = (state)=>state.product.products