import React from 'react'
import logo from "../../src/assets/logo.jpg"

export default function Header() {
  return (
    <header>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
    </header>
  )
}
