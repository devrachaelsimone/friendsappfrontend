import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/* =========================== THUNKS ============================= */
export const getFriendsThunk = createAsyncThunk("friends", async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/friends`);
    console.log("API Response:", response.data)
    return response.data;
  } catch (err) {
    return err.response.data;
  }
});

/* =========================== SLICE ============================= */
const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    loading: true,
    error: null,
  },
  reducers: {
  /*   addFriend: (state, action) => {
      state.addFriend = action.payload;
    }, */
   /*  getFriends: (state, action) => {
      // Ensure action.payload is always an array
      state.friends = Array.isArray(action.payload)
        ? action.payload
        : Object.values(action.payload);
    }, */
    getFriends: (state, action) => {
      state.friends = action.payload
      console.log(action.payload, "action.payload")

    },
  },
});

//export const { getFriends, addFriend, deleteFriend } = friendsSlice.actions;
export const { getFriends } = friendsSlice.actions;

export default friendsSlice.reducer;

