import { createSlice } from "@reduxjs/toolkit";

const hamSlice=createSlice({
    name:"ham",
    initialState:{
        isHamOpen:true,
    },
    reducers:{
        toggleHam:(state)=>{
            state.isHamOpen=!state.isHamOpen;
        }
    }
})

export const  {toggleHam}= hamSlice.actions;
export default hamSlice.reducer;