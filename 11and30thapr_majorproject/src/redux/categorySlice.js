import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:'category',
    initialState:{categories:[]},
    reducers:{
        store_category(state,action){
            state.categories = action.payload
        }
    }
})
export const {store_category}=categorySlice.actions
export default categorySlice
export const selectCategories = (state)=>state.category.categories