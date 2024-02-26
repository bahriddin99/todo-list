import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}


export const countReducer  = createSlice({
   name: "counter",
   initialState,
   reducers:{
    increment: (state, action)=>{
      return  {...state, count: state.count + 1}
    },
    decrement:(state, action)=>{
        return  {...state, count: state.count - 1}
      }, 
   }
})

export default countReducer.reducer
export const {increment,decrement} = countReducer.actions