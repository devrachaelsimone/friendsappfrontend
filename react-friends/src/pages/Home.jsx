import React, { useEffect, useState } from "react";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import friendsSlice from "../redux/friend/friendsSlice";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

/* 
============================================
MUI 
============================================
*/

const useStyledButton = styled("button")(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  box-shadow: ${theme.shadows[1]};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.spacing(2)};
  min-width: 300px;
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *": {
    margin: theme.spacing(1),
  },
`
);

const StyledTableCell = styled("tablecell")(
  ({ theme }) => `
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
`
);

const StyledTableRow = styled("row")(
  ({ theme }) => `
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
`
);

/* 
=========================================

=========================================
*/

const Home = () => {
  useDispatch(friendsSlice.actions.addFriend({ name: "John", age: 25 }));

  const buttonClasses = useStyledButton();
  return (
    <>
      <div className={buttonClasses.root}>
        <Button variant="contained" color="primary">
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Stream</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
