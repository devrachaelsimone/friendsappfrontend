import { useSelector, useDispatch } from "react-redux";
import friendsSlice from "../redux/friend/friendsSlice";
import { getFriends } from "../redux/friend/friendsSlice";
import axios from "axios";
import { useEffect, useState } from "react";
const apiUrl = process.env.REACT_APP_API_URL;



const fetchFriends = async () => {
  try {
    const response = await axios.get(`${apiUrl}/friends`);
    return response.data;
  } catch (error) {
    console.error("Error fetching friends:", error);
    return [];
  }
};

const useFetchFriends = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndDispatchFriends = async () => {
      const friendsData = await fetchFriends();
      dispatch(getFriends(friendsData));
    };

    fetchAndDispatchFriends();
  }, [dispatch]);
};

export default useFetchFriends;