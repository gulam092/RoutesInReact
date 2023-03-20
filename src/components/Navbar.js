import React from 'react'
import{Link, NavLink} from 'react-router-dom'
function Navbar() {
    const NavLinkCss=({isActive}) =>{
    return {
        fontWeight:isActive?'bold':'normal',
        fontSize:isActive?'23px':'20px',
    }
    }
  return (
    <nav>
        <NavLink  style={NavLinkCss} to ='/'>Home</NavLink>
        <NavLink  style={NavLinkCss} to ='/about'>About</NavLink>
        <NavLink style={NavLinkCss} to ='/contact'>Contact</NavLink>
    </nav>
  )
}

export default Navbar