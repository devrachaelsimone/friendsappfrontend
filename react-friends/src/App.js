import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h2>React java spring boot redux toolkit </h2>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
