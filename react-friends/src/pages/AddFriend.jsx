import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { StyledButton } from "../styledcomponents/StyledButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFriends, addFriend } from "../redux/friend/friendsSlice";
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
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [friendData, setFriendData] = useState(initialState); //set initial friend data

  //2.define starting friend data
  const { name, address, email, stream } = friendData;

  //3. handle friend submission
  const handleAddFriend = (e) => {
    e.preventDefault();
    if (name && address && email && stream) {
      const updatedFriendData = { ...friendData };
      //const updatedFriendData = { ...friendData, name: user?.result?.name };
      dispatch(addFriend({ updatedFriendData })); //add friend action
      dispatch(getFriends({ updatedFriendData, navigate })); //get friend action
    } else {
      console.log("please fill out all fields");
    }
    //handleClear();
    navigate("/");
    setError("");
  };

  //4. handle input fields change
  const handleInputChange = (e) => {
    let { name, value } = e.target; //updating name and value props with the input
    setFriendData({ ...friendData, [name]: value });
  };

  return (
    <>
      <Container
        elevation={24}
        sx={{
          backgroundColor: "cornflowerblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleAddFriend}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          autoComplete="off"
        >
          <h3>--add a frend form--</h3>
          {/* {error && <h4 style={{ color: --error }}>{error}</h4>} */}

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={friendData.name}
            /* value={state.name} */
            onChange={handleInputChange}
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
            value={friendData.address}
            onChange={handleInputChange}
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={friendData.email}
            onChange={handleInputChange}
            type="email"
          />
          <TextField
            id="outlined-basic"
            label="Stream"
            variant="outlined"
            name="stream"
            value={friendData.stream}
            onChange={handleInputChange}
            type="text"
          />
          <StyledButton
            onClick={handleAddFriend}
            type="submit"
            color="secondary"
          >
            Add friend
          </StyledButton>

          <StyledButton onClick={() => navigate("/")}>go back </StyledButton>
        </Box>
      </Container>
    </>
  );
};

export default AddFriend;
