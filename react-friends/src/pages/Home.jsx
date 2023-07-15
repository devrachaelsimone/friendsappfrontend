import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
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
      {friends.length === 0 ? ( //check if friends are loaded
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
          <FriendTable friends={friends} />
          <div>
            <StyledButton onClick={() => navigate("/addfriend")}>
              Add friend
            </StyledButton>
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
