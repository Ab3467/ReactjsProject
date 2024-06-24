import React from 'react';
import logo from "../../src/assets/logo.jpg";

export default function Header() {
  return (
    <div className="bg-blue-100 text-center font-semibold flex flex-col items-center py-4">
      <div className="bg-blue-100 text-center font-semibold flex flex-col items-center py-4">
        <img src={logo} alt="logo" className="object-contain bg-transparent h-20 w-20 mr-4" />
        <h1 className="text-lg font-serif">Investment Calculator</h1>
      </div>
    </div>
  );
}
