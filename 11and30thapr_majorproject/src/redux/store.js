import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import sliderSlice from "./sliderSlice";

const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        category:categorySlice.reducer,
        slider:sliderSlice.reducer,
    }
})

export default store