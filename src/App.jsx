import { useState } from "react";
import React from "react";
import { Footer, Possibility, Features, Header, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar } from "./components";
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
