import { configureStore } from "@reduxjs/toolkit";
import hamSlice from "./hamSlice"

const store=configureStore({
    reducer:{
        ham:hamSlice,
    }
})

export default store;