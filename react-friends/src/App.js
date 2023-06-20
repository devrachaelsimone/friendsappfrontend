import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFriend from "./pages/AddFriend";

function App() {
  return (
    <div className="App">
      <h2>React java spring boot redux toolkit </h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addfriend" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
