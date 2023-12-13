import { Container } from "@mui/material";

import { StyledButton } from "../styledcomponents/StyledButton";
import FriendTable from "../components/FriendTable";
import { Navigate, useNavigate } from "react-router-dom";
import AddFriend from "./AddFriend";

const Home = ({ friends }) => {
  const navigate = useNavigate();
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

        <FriendTable friends={friends} />
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
