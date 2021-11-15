import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand logo" href="#">Portfo<span>lio.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      </div>
  </div>
</nav>
    )
}
export default Navbar