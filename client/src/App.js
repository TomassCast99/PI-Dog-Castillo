import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landingPage";

import Home from "./components/Home/Home.jsx";
//import About from "./components/About/About.jsx";
import CreateDog from "./components/Create/CreateDog.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/dog" element={<CreateDog />} />
          {/* <Route path="/history" element={<SinceWhen />} /> 
          <Route path="/about" element={<About />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
