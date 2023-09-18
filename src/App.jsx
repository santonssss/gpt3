import { useState } from "react";
import React from "react";
import Footer from "./containers/footer/Footer.jsx";
import Possibility from "./containers/possibility/Possibility.jsx";
import Features from "./containers/features/Features.jsx";
import WhatGPT3 from "./containers/WhatGPT3/WhatGPT3.jsx";
import Header from "./containers/Header/Header.jsx";
import CTA from "./components/cta/CTA.jsx";
import Brand from "./components/brand/Brand.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
