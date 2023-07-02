import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const friendsSlice = createSlice({
  name: "friends",
  initialState: [],
  reducers: {
    getFriends: (state, action) => {
      return action.payload; // get list of friends
    },

    addFriend: async (state, action, friend) => {
      try {
        const response = axios.post(
          `${process.env.REACT_APP_API_URL}/friends`,
          action.payload,
          friend,
          state
        ); //posting to api/db
        const newFriendState = response.data;
        console.log(response.data);
        return [...state, newFriendState];
      } catch (error) {
        console.log(error);
        return state;
      }
    },
    deleteFriend: async (state, action, friend, id) => {
      try {
        const response = axios.post(
          `${process.env.REACT_APP_API_URL}/friend/{id}`,
          action.payload,
          friend,
          state
        ); //DELETE from api/db
        const newFriendState = response.data;
        console.log("deleteFriend friendsSlice");
        return [...state, newFriendState];
      } catch (error) {
        console.log(error);
        return state;
      }
    },

    /* 
    editFriend: (state, action) => {
      const { id, name, address, stream, email } = action.payload;
      const friend = state.find((friend) => friend.id === id);
      if (friend) {
        friend.name = name;
        friend.address = address;
        friend.stream = stream;
        friend.email = email;
      }
    },
    */
  },
});

export const { getFriends, addFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
