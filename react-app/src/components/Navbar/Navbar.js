import React,{useEffect, useState} from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.png"
import Link from "react-scroll"

export default function Navbar() {
  const [sticky,setsticky] =useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 250 ? setsticky(true) : setsticky(false)
    })
  }, [])
  
  return (
  
 <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to="hero" smooth={true} offest={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offest={0} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offest={0} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offest={0} duration={500}>Campus</Link></li>
            <li><Link to="testimonial" smooth={true} offest={0} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offest={0} duration={500} className='btn'>Contact us</Link></li>
        </ul>
    </nav>
  )
}
 