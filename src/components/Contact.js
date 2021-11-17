import React from 'react';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaUser, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
    <section className="contact" id="contact">
    <div className="max-width">
    <h2 className="title">Contact Me</h2>
    <div className="contact-content">
    <div className="column left">
    <div className="text">Get in Touch</div>
    <p>about me....</p>
    <div className="icons">
    <div className="row">
    
        <div className="info">
        <div className="head"> <FaUser style={{ color: "orange"}}/>  Name : </div>
        <div className="sub-title"> Bindu Vaghela</div>
        </div>
    </div>
    <div className="row">
        
        
        <div className="info">
        <div className="head"><a href="mailto:bindi.vaghela@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope style={{ color: "orange"}} />  Contact</a></div>
        <div className="sub-title">You can reach me..</div>
        </div>
    </div>
    <div className="row">
    
    
        <div className="info">
        <div className="head"><a href="https://github.com/bindi-v" target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: "orange"}} />  GitHub</a></div>
        <div className="sub-title">My Github...</div>
        </div>
    </div>
    <div className="row">
    
      
        <div className="info">
        <div className="head"> <a href="https://www.linkedin.com/in/bindu-vaghela-123826214/" target="_blank" rel="noopener noreferrer"><FaLinkedin  style={{ color: "orange"}} />  LinkedIn</a></div>
        <div className="sub-title">Visit my LinkedIn...</div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    )
}

export default Contact;
