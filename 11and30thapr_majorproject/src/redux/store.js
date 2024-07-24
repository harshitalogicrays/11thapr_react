import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import sliderSlice from "./sliderSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        category:categorySlice.reducer,
        slider:sliderSlice.reducer,
        product:productSlice.reducer,
        cart:cartSlice.reducer
    }
})

export default store