// import React, { useState, useMemo } from 'react';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/program/Program";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Program />
      </div>
    </div>
  );
}

export default App;
