import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
const userSlice = createSlice({
  name: "user",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const combinedReducers = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});


// create your reducer
const reducer = (state, action) => {
  console.log('root reducer', state, action)
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return combinedReducers(state, action);
  }
};

const initialState = { counter: 200, user: 100 };

const makeStore = (context) => configureStore({
  reducer,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV === "production" ? compose() : composeWithDevTools(),
});

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== "production" });
