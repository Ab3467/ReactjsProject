import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play_icon.png"

export default function About() {
  return (
    <div className='about'>
      <div className="about-left">
       <img src={about_img} alt="" className='aboout_img'/>
       <img src={play_icon} alt="" className='play_icon'/>
      </div>
      <div className="about-right">
      
      </div>
    </div>
  )
}
