import { configureStore, } from '@reduxjs/toolkit'
import { itemsSlice } from './items/sliceItem';
import { myValueSlice } from './myValue/slice';
import { userSlice } from './userSlice';
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer
  },
  middleware: getDefaultMiddleware => 
  [...getDefaultMiddleware(), logger],
});

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment.toString());


// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// 
// export const add = createAction('items/add');
// export const remove = createAction('items/remove')
// // IMMER
// const itemsReducer = createReducer([], {
//   // [add]: (state, action) => [...state, action.payload,],
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });
// // 


// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//     // 
//     items: itemsReducer,
//   },
// })