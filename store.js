import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from 'redux-devtools-extension';

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
  user: userSlice.reducer
})

// create your reducer
const reducer = (state = { counter: 10, user: 20}, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return combinedReducers(state, action);
  }
};


// create a makeStore function
const makeStore = (context) => {
  const middlewares = []; // 미들웨어들을 넣으면 된다.
  const enhancer = process.env.NODE_ENV === 'production' ? 
    compose(applyMiddleware(...middlewares)) : 
        composeWithDevTools();
const initialState = {};
  return configureStore({
    reducer,
    initialState,
    enhancer
  });
}
export default makeStore;
