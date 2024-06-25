import React from 'react'
import "./Program.css"
import Program1 from "../../assets/program-1.png"
import Program2 from "../../assets/program-2.png"
import Program3 from "../../assets/program-3.png"

export default function Program() {
  return (
    <div className='programs'>
      <div className="program">
        <img src={Program1} alt="" />
      </div>
      <div className="program">
        <img src={Program2} alt="" />
      </div>
      <div className="program">
        <img src={Program3} alt="" />
      </div>
    </div>
  )
}
