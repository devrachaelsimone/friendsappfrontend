import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import friendsSlice from "../redux/friend/friendsSlice";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { getFriends } from "../redux/friend/friendsSlice";
import axios from "axios";
import { useEffect } from "react";

const StyledButton = styled(Button)({
  backgroundColor: "cornflowerblue",
  color: "black",
  boxShadow: "grey",
  borderRadius: 5,
  padding: 2,
  minWidth: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledTableCell = styled(TableCell)({
  head: {
    backgroundColor: "red",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
});

const StyledTableRow = styled(TableRow)({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "blue",
    },
  },
});

const Home = () => {
  //fetch friend data
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${apiUrl}/friends`);
        dispatch(getFriends(response.data)); // Dispatch the action to update the state
      } catch (error) {
        console.error("Error fetching friends in Home:", error);
      }
    };

    fetchFriends();
  }, [dispatch]);
  //display friend data
  const {} = useSelector(state => state.data)

  return (
    <>
      <div>
        <StyledButton>Add User</StyledButton>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Stream</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
