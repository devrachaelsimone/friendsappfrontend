import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import { StyledTableCell } from "../styledcomponents/StyledTableCell";
import { StyledTableRow } from "../styledcomponents/StyledTableRow";
import { StyledTable } from "../styledcomponents/StyledTable";











import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { StyledButton } from "../styledcomponents/StyledButton";
import FriendTable from "../components/FriendTable";
import { useNavigate } from "react-router-dom";
import useFetchFriends from "../api/fetchFriends";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state
  const friends = useSelector((state) => state.friends);
  useFetchFriends();

  return (
    <>
     {/*  {friends.length === 0 ? ( //check if friends are loaded
        <div>Loading...</div>
      ) : ( */}
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
          {/*  <FriendTable friends={friends}/>  */}
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
              <StyledTableRow key={friend.id}>
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
                      <Button color="secondary" style={{ marginRight: "5px" }}>
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

          <div>
            <StyledButton onClick={() => navigate("/addfriend")}>
              Add friend
            </StyledButton>
          </div>
        </Container>
    {/*   )} */}
    </>
  );
};

export default Home;


