import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import friendsSlice from "../redux/friend/friendsSlice";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

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
  // useDispatch(friendsSlice.actions.addFriend({ name: "John", age: 25 }));

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
