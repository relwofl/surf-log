import React from "react"
import { NavLink } from "react-router-dom"
const links = {
    display: "inline-block",
    width: "50px",
    padding: "12px",

}
function Navbar() {
  return <div className="navbar">
    <NavLink to="/" style={links}>Home</NavLink>
    <NavLink to="/About" style={links}>About</NavLink>
   
      
  </div>
}

export default Navbar