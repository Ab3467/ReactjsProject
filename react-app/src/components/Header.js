import React from 'react';
import logo from "../../src/assets/logo.jpg";

export default function Header() {
  return (
    <header className="text-center font-semibold flex flex-col items-center py-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="object-contain bg-transparent h-10 w-10 mr-4" />
        <h1 className="text-lg text-white">Investment Calculator</h1>
      </div>
    </header>
  );
}
