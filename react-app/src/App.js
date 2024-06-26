// import React, { useState, useMemo } from 'react';
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/program/Program";
import Title from "./components/title/Title";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle= "Our Program" title="What We Offer"/>
        <Program />
        <About/>
      </div>
    </div>
  );
}

export default App;
