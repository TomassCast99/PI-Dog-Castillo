import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landingPage";

import Home from "./components/Home/Home.jsx";
import CreateDog from "./components/Create/CreateDog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dog" element={<CreateDog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
