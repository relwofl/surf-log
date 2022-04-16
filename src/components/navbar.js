import React from "react"
import { NavLink } from "react-router-dom"
// const links = {
//     display: "flex",
//     width: "50px",
//     padding: "10px",
// }
function Navbar() {
  return <div className="navbar">
    <div className='links'>
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/About" >About</NavLink>
    <NavLink to="/Weather" >Forecast</NavLink>
    <NavLink to="/LogForm" >New Session</NavLink>
    <NavLink to="/Logs" >Sessions</NavLink>

    {/* <NavLink to="/" style={links}>Home</NavLink>
    <NavLink to="/About" style={links}>About</NavLink>
    <NavLink to="/Weather" style={links}>Forecast</NavLink>
    <NavLink to="/LogForm" style={links}>New Session</NavLink>
    <NavLink to="/Logs" style={links}>Sessions</NavLink> */}
    </div>
  </div>
}

export default Navbar