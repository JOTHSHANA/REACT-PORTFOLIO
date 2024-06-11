import React from 'react'
import CustomizedSwitches from "./toggleTheme";


function TopNav() {
  return (
    <div className='total-top-nav'>
      <div className='name-container'>
        <h3 style={{margin:"0px", color:"#12c5d1"}}>JOTHSHANA S M</h3>
      </div>
      <div className='top-right-container'>
        <CustomizedSwitches />
      </div>
    </div>
  )
}

export default TopNav
