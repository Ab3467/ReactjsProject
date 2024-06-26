// import React, { useState, useMemo } from 'react';
import About from "./components/About/About.js";
import Hero from "./components/Hero/Hero.js";
import Navbar from "./components/Navbar/Navbar.js";
import Program from "./components/program/Program.js";
import Title from "./components/title/Title.js";
import Campus from "./components/Campus/Campus.js"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle= "Our Program" title="What We Offer"/>
        <Program />
        <About/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
      </div>
    </div>
  );
}

export default App;
