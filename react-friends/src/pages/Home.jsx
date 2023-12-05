import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { StyledButton } from "../styledcomponents/StyledButton";
import FriendTable from "../components/FriendTable";
import { useNavigate } from "react-router-dom";
import { getFriends, getFriendsThunk } from "../redux/friend/friendsSlice";
import {
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import styled from "@emotion/styled";
import { StyledTableCell } from "../styledcomponents/StyledTableCell";
import { StyledTableRow } from "../styledcomponents/StyledTableRow";
import { StyledTable } from "../styledcomponents/StyledTable";
import Loading from "../components/Loading.jsx"

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  
   //define the various friends states
   const friends = useSelector(state => state.friends); 
   const error = useSelector((state) => state.friends.error);


  //1. grab the data with dispatch
  useEffect(() => {
    dispatch(getFriendsThunk());
    console.log(friends);
  }, [dispatch]); // Include dispatch as a dependency

 

  
  return (
    <>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 10,
            width: "100%",
          }}
        >
          <h2>this is home</h2>
          
          {/*  */}













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
                <Loading/>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </StyledTable>
    </TableContainer>





























          {/*  */}
          <div>
            <StyledButton onClick={() => navigate("/addfriend")}>
              Add friend
            </StyledButton>
          </div>
        </Container>
    </>
  );
};

export default Home;
