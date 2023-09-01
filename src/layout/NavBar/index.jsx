import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {

  let activeStyle = {
    textDecoration: "none",
    color: "blue",
  }

  let inactive ={
    textDecoration: "none",
    color: "#161616"
  }
  
  const navA = ({ isActive }) => (isActive ? activeStyle : inactive)

  return (
    <>
      <nav className='nav'>
        <h2 >
          <Link className='logo' to="/" >
            Colours
          </Link>
            
        </h2>
        <ul className='nav-links'>
          <li>
            <NavLink to="/" style={navA} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/colours" style={navA} end>
              Colours
            </NavLink>
          </li>
          <li>
            <NavLink to="/colours/new" style={navA}>
              Add Colour
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}


export default NavBar
