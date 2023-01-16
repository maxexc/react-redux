import { createSlice } from "@reduxjs/toolkit";


export const myValueSlice = createSlice({
    name: "myValueQWE", 
    initialState: 150, 
    reducers: {
      increment(state, action) {
        return state + action.payload
      },
      decrement(state, action) {
        return state - action.payload;
      },
    }
  });
  
  console.log(myValueSlice);
  
  export const { increment, decrement } = myValueSlice.actions;