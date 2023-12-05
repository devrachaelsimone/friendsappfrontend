import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/* =========================== THUNKS ============================= */
export const getFriendsThunk = createAsyncThunk("friends", async () => {
  try {
    const response = axios.get(`${process.env.REACT_APP_API_URL}/friends`);
    console.log("API Response:", response.data)
    return response.data;
  } catch (err) {
    return err.response.data;
  }
});

//create thunk

//update/edit thunk

//delete thunk

/* =========================== SLICE ============================= */
const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    loading: false,
    error: null,
  },
  reducers: {
    addFriend: (state, action) => {
      state.addFriend = action.payload;
    },
    getFriends: (state, action) => {
      state.friends = action.payload;
    },
  },
  extraReducers: {
    //================================================== get actions
      [getFriendsThunk.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [getFriendsThunk.fulfilled]: (state, action) => {
        state.loading = false;
        state.friends = action.payload;
      },
      [getFriendsThunk.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    //==============================================================
  },
});

//export const { getFriends, addFriend, deleteFriend } = friendsSlice.actions;
export const { addFriend, getFriends } = friendsSlice.actions;

export default friendsSlice.reducer;
