import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
    name:'slider',
    initialState:{sliders:[]},
    reducers:{
        store_slider(state,action){
            state.sliders = action.payload
        }
    }
})
export const {store_slider}=sliderSlice.actions
export default sliderSlice
export const selectsliders = (state)=>state.slider.sliders