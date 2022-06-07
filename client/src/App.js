import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./components/Landing/landingPage";
import Home from "./components/Home/Home.jsx";
import CreateDog from "./components/Create/CreateDog.jsx";
import Details from "./components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dog" element={<CreateDog />} />
          <Route path="/dogs/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
