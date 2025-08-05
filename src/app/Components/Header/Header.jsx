'use client'
import React, { useState } from 'react'
import './header.css'
import Countdown from '../Hooks/Countdown'
import { FaCaretDown,FaSearch  } from "react-icons/fa";
import Maindropdown from '../maindropdown/Maindropdown';
const Header = () => {
 
  const [showDropdown, setShowDropdown]=useState(false);
 
  const visibleDropdown = () => {
     setShowDropdown(true);
    
  };
    const hidedropdown = () => {
    setShowDropdown(false);
    
  };
 
  return (
    <div
    className='header-area'
    >
        <div className="nav"> <p>Future Skills Fiesta:Get up to 30% OFF on Career Booster Combos</p> <div className='avail-button'>AVAIL NOW</div><Countdown targetDate="2025-09-31T23:59:59" /></div>
        <div className="header" onMouseEnter={hidedropdown}>
          <img src='certbills-logo.png'/>
          <div className="search-area">
            <div className="left" onMouseEnter={visibleDropdown} onMouseLeave={hidedropdown}  >Courses <FaCaretDown /></div>
          <input  placeholder='search here ....'/>
            <div className="right" ><FaSearch /></div>
          </div>
         
          <ul>
            <li >Training Calendar</li>
            <li>free resources <FaCaretDown /></li>
            <li>services <FaCaretDown /></li>
            <li>about us</li>
          </ul>
          
        </div>
        {showDropdown && (
          <div className="maindropdown-area">
          <div className="maindropdown-area-flex "  >
          <div className="left" onMouseEnter={hidedropdown}></div>
          <div className='center' onMouseEnter={visibleDropdown} ><Maindropdown  /></div>
          <div className="right"onMouseEnter={hidedropdown} ></div>
          </div>
        </div>
        
      )}
     
       
    </div>
  )
}

export default Header