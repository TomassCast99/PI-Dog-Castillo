import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landingPage";

// import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
// import Dogs from "./components/Dogs/Dogs.jsx";
// import About from "./components/About/About.jsx";
// import CreateDog from "./components/Create/CreateDog.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/dogs/:id" element={<Dogs />} />
        <Route path="/create/dog" element={<CreateDog />} />
        <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
