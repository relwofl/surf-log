import React from "react"
import { NavLink } from "react-router-dom"
const links = {
    display: "inline-block",
    width: "50px",
    padding: "12px",

}
function Navbar() {
  return <div className="navbar">
    <NavLink to="/" exact style={links}>Home</NavLink>
    <NavLink to="/About" style={links}>About</NavLink>
    <NavLink to="/Weather" style={links}>Forecast</NavLink>
    <NavLink to="/LogForm" style={links}>Form</NavLink>
    <NavLink to="/Logs" style={links}>Posts</NavLink>

  </div>
}

export default Navbar