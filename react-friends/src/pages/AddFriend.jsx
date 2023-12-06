import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { StyledButton } from "../styledcomponents/StyledButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import { getFriends, addFriend } from "../redux/friend/friendsSlice";
import { useSelector, useDispatch } from "react-redux";

//todo  there is no form validation//
//1. set initial state to null
const initialState = {
  name: "",
  address: "",
  email: "",
  stream: "",
};

const AddFriend = () => {
  
};

export default AddFriend;
