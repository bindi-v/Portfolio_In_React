import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand logo" href="#portfolio">Portfo<span>lio.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item active">
          {/*<a className="nav-link" href="#header">Home<span className="sr-only"></span></a>*/}
          <Link activeClassName="active" to="/" >Home</Link> 
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#about">About</a>*/}
          <Link activeClassName="active" to="/about" >About</Link>
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#work">Work</a>*/}
          <Link activeClassName="active" to="/work">Work</Link>
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#skills">Skills</a>*/}
          <Link activeClassName="active" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
         {/* <a className="nav-link" href="#projects">Projects</a>*/}
         <Link activeClassName="active" to="/projects">Projects</Link> 
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="#contact">Contact</a>*/}
          <Link activeClassName="active" to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
  </div>
</nav>
    )
}
export default Navbar;