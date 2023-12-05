import {
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { StyledButton } from "../styledcomponents/StyledButton";
import { StyledTableCell } from "../styledcomponents/StyledTableCell";
import { StyledTableRow } from "../styledcomponents/StyledTableRow";
import { StyledTable } from "../styledcomponents/StyledTable";
import { useSelector, useDispatch } from "react-redux";
import { getFriendsThunk, getFriends } from "../redux/friend/friendsSlice"; // Import your actions
import Loading from "./Loading";


const FriendTable = () => {
  //1. grab the data with dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFriendsThunk, getFriends());
  }, [dispatch]);

  //define the various friends states
  const { friends, loading } = useSelector((state) => ({ ...state.friends }));
  const error = useSelector((state) => state.friends.error);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <TableContainer
      component={Paper}
      elevation={24}
      sx={{
        backgroundColor: "cornflowerblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: 0.5,
        mb: 3,
      }}
    >

      <StyledTable aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Stream</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
           {friends && friends.length > 0 ? ( 
            friends.map((friend) => (
              <StyledTableRow key={friend.id}
              >
                <StyledTableCell component="th" scope="row">
                  {friend.name}
                </StyledTableCell>
                <StyledTableCell align="center">{friend.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {friend.stream}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {friend.address}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div>
                    <ButtonGroup
                      variant="contained"
                      aria-label="friend actions"
                    >
                      <Button>View</Button>
                      <Button color="primary" style={{ marginRight: "5px" }}>
                        {" "}
                        Edit{" "}
                      </Button>
                      <Button 
                      color="secondary" style={{ marginRight: "5px" }}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" colSpan={5}>
                No friends found.
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default FriendTable;
