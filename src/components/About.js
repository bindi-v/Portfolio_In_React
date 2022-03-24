import React from 'react';
import MyImg from "../assets/My_Img.jpeg";


const About = () => {
    return (
         <section className="about" >
        <div className="max-width">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <div className=" column left">
                    <img src={ MyImg } alt="MyImg" />
                </div>
                <div className="column right">
                    <div className="text">I'm Bindu and I'm a <span>Web Developer</span></div>
                    <p> I am a full stack Web Developer with a Mathematics Background.
                         Earned a certificate in full stack web development from the
                        Georgia Institute of Technology, with newly developed skills in JavaScript, CSS, React.js, 
                         and responsive web design. Recently graduated from Southern Methodist University, Texas 
                         and got Certificate in Java React Native. And developed skills in Java 8, Spring Boot, Rest Api, MySQL.</p>
                    <a href="https://docs.google.com/document/d/1vvqrSysKW3xM88JS7Q38VXayeFIweiK53iu9ScTQD88/edit?usp=sharing">My CV</a>
                </div>
            </div>
        </div>   
        </section>
    )
}

export default About;
