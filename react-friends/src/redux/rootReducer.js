import { combineReducers } from "redux";

import friendsSlice from "./friend/friendsSlice";

const rootReducer = combineReducers({
  data: friendsSlice,
});

export default rootReducer;