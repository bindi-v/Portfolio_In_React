import React from 'react';
import { FaUser, FaEnvelope } from "react-icons/fa";

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
        <div className="head"><a href="mailto:bindi.vaghela@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope style={{ color: "orange"}} />  Contact</a>
        </div>
        <div className="sub-title">You can mail me..</div>
        </div>
    </div>
    </div>
    </div>
    <div className="column right">
     <div className="text" >Contact Me</div>  
    <form action="#" >
    <div className="fields">
    <div className="field name">
    <input type="text"  placeholder="Name" required/>
    </div>
    <div className="field email">
    <input type="email"  placeholder="Email" required />
    </div>
    </div>
    <div className="field">
    <input type="text"  placeholder="Subject" required />
    </div>
    <div className="field textarea">
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
