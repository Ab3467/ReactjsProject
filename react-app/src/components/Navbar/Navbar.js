import React,{useEffect, useState} from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.png"

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
            <li><Link>Home</Link></li>
            <li><Link>Program</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>Campus</Link></li>
            <li><Link>Testimonials</Link></li>
            <li><button className='btn'><Link>Contact us</Link></button></li>
        </ul>
    </nav>
  )
}
 