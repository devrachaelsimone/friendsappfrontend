import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { StyledButton } from "../styledcomponents/StyledButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFriend, getFriends } from "../redux/friend/friendsSlice";
import { useSelector, useDispatch } from "react-redux";

//todo  there is no form validation//
const AddFriend = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //1. set initial state to null
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    stream: "",
  });

  //5. handle friend submission
  const handleAddFriend = (e) => {
    console.log("frien aded");
    e.preventDefault();
    if (!state.name || !state.email || !state.address || !state.stream) {
      setError("please fill all input fields");
    } else {
      dispatch(addFriend(state));
      dispatch(getFriends(state));
      setError("");
      navigate("/");
    }
  };

  //2. handle state change
  const handleInputChange = (e) => {
    let { name, value } = e.target; //updating name and value props with the input
    setState({ ...state, [name]: value });
  };

  //3. set the new state
  const { name, address, stream, email } = state;

  //4. update the state for each text field using the onChange and value props, as well as name

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
            value={state.name}
            onChange={handleInputChange}
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
            value={state.address}
            onChange={handleInputChange}
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            type="email"
          />
          <TextField
            id="outlined-basic"
            label="Stream"
            variant="outlined"
            name="stream"
            value={state.stream}
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


