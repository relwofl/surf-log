import React from "react"
import { Link } from "react-router-dom"
// const links = {
//     display: "flex",
//     width: "50px",
//     padding: "10px",
// }
function Navbar() {
  return <div className="navbar">
    <div className='links'>
    <Link to="/" >Home</Link>
    <Link to="/About" >About</Link>
    <Link to="/Weather" >Forecast</Link>
    <Link to="/LogForm" >New Session</Link>
    <Link to="/Logs" >Sessions</Link>

    {/* <NavLink to="/" style={links}>Home</NavLink>
    <NavLink to="/About" style={links}>About</NavLink>
    <NavLink to="/Weather" style={links}>Forecast</NavLink>
    <NavLink to="/LogForm" style={links}>New Session</NavLink>
    <NavLink to="/Logs" style={links}>Sessions</NavLink> */}
    </div>
  </div>
}

export default Navbar