import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user", 
    initialState: {
        login: "",
        isLoggedIn: false,
    }, 
    reducers: {
      logIn(state, action) {
        state.login = action.payload;
        state.isLoggedIn = true;        
      },
      logOut(state) {
        state.login = "";
        state.isLoggedIn = false;  
      },
    }
  });
  
  console.log(userSlice);
  
  export const { logIn, logOut } = userSlice.actions;