import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { StyledButton } from "../styledcomponents/StyledButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//todo  there is no form validation//
const AddFriend = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //1. set initial state to null
  const [friend, setFriend] = useState({
    name: "",
    address: "",
    stream: "",
    email: "",
  });

  //5. handle friend submission
  const handleAddFriend = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/v1/friends", friend);
      navigate("/");

    } catch (error) {
      console.error("Error adding friend:", error);
      setError("");
    }
  };

  //2. handle state change
  const handleInputChange = (e) => {
    console.log("input is changing");
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
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
            value={friend.name}
            onChange={handleInputChange}
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
            value={friend.address}
            onChange={handleInputChange}
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={friend.email}
            onChange={handleInputChange}
            type="email"
          />
          <TextField
            id="outlined-basic"
            label="Stream"
            variant="outlined"
            name="stream"
            value={friend.stream}
            onChange={handleInputChange}
            type="text"
          />
          <StyledButton
            onClick={handleAddFriend}
            type="button"
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
