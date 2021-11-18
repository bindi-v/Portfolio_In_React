import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
    return (
        <div>
        <div className="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, My Name Is </div>
                <div className="text-2">Bindu Vaghela</div>
                <div className="text-3">And I am a<span> Web Developer</span></div>
             </div>
            <div className=" info" >
        <div className="head"><a href="https://github.com/bindi-v" target="_blank" rel="noopener noreferrer"><FaGithub size={20} style={{ color: "orange"}} /></a></div>
        <div className="head"> <a href="https://www.linkedin.com/in/bindu-vaghela-123826214/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} style={{ color: "orange"}} /></a></div>
        </div>
        </div>  
        </div>
        </div>
    )
}

export default Home;
