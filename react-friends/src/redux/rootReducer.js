import { combineReducers } from "redux";

import friendsSlice from "./friend/friendsSlice";

const rootReducer = combineReducers({
  friends: friendsSlice,
});

export default rootReducer;