// import React, { useState, useMemo } from 'react';
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
      </div>
    </div>
  );
}

export default App;
