import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { StyledButton } from "../styledcomponents/StyledButton";
import FriendTable from "../components/FriendTable";
import { useNavigate } from "react-router-dom";
import { getFriends, getFriendsThunk } from "../redux/friend/friendsSlice";
import Loading from "../components/Loading.jsx"

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state
  const friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the list of friends when the component mounts or whenever needed
    dispatch(getFriendsThunk, getFriends());
  }, []);
  
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
          <FriendTable/>
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
