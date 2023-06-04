import { createSlice } from '@reduxjs/toolkit';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: [], 
  reducers: {
    addFriend: (state, action) => {
      state.push(action.payload);
    },
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
    deleteFriend: (state, action) => {
      const id = action.payload;
      return state.filter((friend) => friend.id !== id);
    },
    // Add other actions here
  },
});

export const { addFriend, editFriend, deleteFriend } = friendsSlice.actions;
export default friendsSlice.reducer;