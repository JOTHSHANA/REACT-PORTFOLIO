import React from 'react'
import CustomizedSwitches from "./toggleTheme";
import joImg from '../assets/joImg.jpg';


function TopNav() {
  return (
    <div className='total-top-nav'>
      <div className='name-container'>
        <img style={{ height: "40px", borderRadius: "100px" }} src={joImg} alt="image" />
        <div>
          <h3 style={{ margin: "0px", color: "var(--icons)" }}>JOTHSHANA S M</h3>
          <p style={{ margin: "0px", color: "gray", fontWeight: "700", fontSize: "10px" }}>Web Developer</p>
        </div>
      </div>
      <div className='top-right-container'>
        <CustomizedSwitches />
      </div>
    </div>
  )
}

export default TopNav
