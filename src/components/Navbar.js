import React from 'react';
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand logo" href="#portfolio">Portfo<span>lio.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars style={{ color: "#fff"}}/> 
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item active">
          <NavLink exact activeClassName="active-link" to="/" >Home</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/work">Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
         <NavLink activeClassName="active" to="/projects">Projects</NavLink> 
        </li>
        <li className="nav-item">
          
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
      </div>
  </div>
</nav>
    )
}
export default Navbar;