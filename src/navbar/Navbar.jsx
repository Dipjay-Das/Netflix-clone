import React, { useEffect, useRef } from 'react'
import './navbar.css'
import Logo from '../Assets/Netflix_Logo.png'
import profile_img from '../Assets/netflix-profileImg.jpg'
import { CiSearch } from "react-icons/ci"
import { FaRegBell } from "react-icons/fa6"
import { FaCaretDown } from "react-icons/fa";
import { logout } from '../Firebase'

function Navbar() {

const navRef = useRef()
// useEffect(()=>{
//   window.addEventListener('scroll', ()=>{
//     if(window.scrollY >= 80){
//       navRef.current.classList.add('nav-dark')
//     }else{
//       navRef.current.classList.remove('nav-dark')
//     }
//   })
// }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="nav-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div  className="nav-right">
        <CiSearch className='icons' />
        <p>Children</p>
        <FaRegBell className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <FaCaretDown className='icons' />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar