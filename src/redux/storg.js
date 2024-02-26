import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducer/counter";
import todo from "./reducer/todo";



export const strog = configureStore({
    reducer:{
    counter,
    todo,
    }
})
