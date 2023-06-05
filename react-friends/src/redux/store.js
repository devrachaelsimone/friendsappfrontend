import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import friendsSlice from "./friend/friendsSlice";

import rootReducer from "./rootReducer";

const middleware = [thunk, logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  friend: friendsSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;