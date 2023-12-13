import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFriend from "./pages/AddFriend";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./pages/Layout";

function App() {
  const [friends, setFriends] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/friends");
      console.log("API Response:", response.data);
      setFriends(response.data);
      //setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <h2>React java spring boot redux toolkit </h2>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home friends={friends} />}></Route>
          <Route path="/home" element={<Home friends={friends} />}></Route>
          <Route path="/addfriend" element={<AddFriend />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
