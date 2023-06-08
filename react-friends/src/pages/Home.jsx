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
  Container,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import friendsSlice from "../redux/friend/friendsSlice";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { getFriends } from "../redux/friend/friendsSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyledButton } from "../styledcomponents/StyledButton";
import { StyledTableCell } from "../styledcomponents/StyledTableCell";
import { StyledTableRow } from "../styledcomponents/StyledTableRow";
import { StyledTable } from "../styledcomponents/StyledTable";

const Home = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  //fetch friend data
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${apiUrl}/friends`);
        //console.log(response.data);

        dispatch(getFriends(response.data)); // Dispatch the action to update the state
        setLoading(false); // Update loading state once data is fetched
      } catch (error) {
        console.error("Error fetching friends in Home:", error);
      }
    };

    fetchFriends();
  }, [dispatch]);

  //display friend data
  const friends = useSelector((state) => state.friends);
  console.log(friends);
  return (
    <>
      {loading ? ( // conditional rendering of loading or table
        <div>Loading...</div>
      ) : (
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
                      <StyledTableCell align="center">
                        {friend.email}
                      </StyledTableCell>
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
                            <Button
                              color="secondary"
                              style={{ marginRight: "5px" }}
                            >
                              Delete
                            </Button>
                            <Button
                              color="primary"
                              style={{ marginRight: "5px" }}
                            >
                              Edit
                            </Button>
                            <Button>View</Button>
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
            <StyledButton>Add friend</StyledButton>
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
