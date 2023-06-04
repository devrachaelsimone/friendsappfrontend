import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h2>React Full Stack Application using Spring Boot and Redux-Thunk </h2>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
