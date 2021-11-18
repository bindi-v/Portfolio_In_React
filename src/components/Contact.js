import React from 'react';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaUser, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

    return (
    <section className="contact Contact">
    <div className="max-width">
    <h2 className="title">Contact Me</h2>
    <div className="contact-content">
    <div className="column left">
    <div className="text">Get in Touch</div>
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
    <div className="column right">
     <div className="text" >Contact Me</div>  
    <form action="#" >
    <div className="fields">
    <div className="field name">
    {/*<label className="form-label" for="exampleName">Name</label>*/}
    <input type="text"  placeholder="Name" required/>
    </div>
    <div className="field email">
    {/*<label for="exampleInputEmail1" className="form-label">Email address</label>*/}
    <input type="email"  placeholder="Email" required />
    </div>
    </div>
    <div className="field">
    <input type="text"  placeholder="Subject" required />

    </div>
    <div className="field textarea">
    {/*<label for="exampleSubject" className="form-label">Subject</label>*/}
    <textarea cols="30" rows="10" placeholder="Message here..." required ></textarea>
    </div>
    <div className="button">
    <button type="submit">Submit</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </section>
    )
}

export default Contact;
