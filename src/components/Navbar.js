import React from 'react';
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa"
 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand logo" href="#portfolio">Portfo<span>lio.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars style={{ color: "#fff"}}/> 
      {/*<FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />*/}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item active">
          {/*<a className="nav-link" href="#header">Home<span className="sr-only"></span></a>*/}
          <Link to="/" >Home</Link> 
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#about">About</a>*/}
          <Link to="/about" >About</Link>
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#work">Work</a>*/}
          <Link to="/work">Work</Link>
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#skills">Skills</a>*/}
          <Link to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
         {/* <a className="nav-link" href="#projects">Projects</a>*/}
         <Link to="/projects">Projects</Link> 
        </li>
        <li className="nav-item">
          
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
  </div>
</nav>
    )
}
export default Navbar;