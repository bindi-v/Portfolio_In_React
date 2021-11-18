import React from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Project1Img from "../assets/Project2.png";
import Project2Img from "../assets/Note_Taker.png";
import Project3Img from "../assets/Team_Profile_Generator.png";
import Project4Img from "../assets/Code_Quiz.gif";
import Project5Img from "../assets/Password_Generater.png";
import Project6Img from "../assets/WorkdayScheduler.gif";
import Project7Img from "../assets/WeatherDashboard.png";
import Project8Img from "../assets/img.webp";
import Project9Img from "../assets/TwoCityComparisonTool.png";


const Projects = () => {
    
    return (
<section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Projects</h2>

        <OwlCarousel className="projects carousel owl-carousel" loop margin={10} nav>  
           
                <div className="card item">
                    <div className="box">
                    <img src={ Project1Img } alt="Homeschool HookUp homepage screenshot" />
                    <div className="text"><a href="https://shrieking-mummy-96456.herokuapp.com/" target="_blank" rel="noopener noreferrer" >HomeSchool_HookUp</a></div>
                    
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project2Img } alt="Note Taker homepage screenshot" />
                    <div className="text"><a href="https://blooming-brook-52468.herokuapp.com/" target="_blank" rel="noopener noreferrer">Note Taker</a></div>
                   
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project3Img } alt="Team Profile Generating homepage screenshot" />
                    <div className="text"><a href="https://github.com/bindi-v/Team_Profile_Generator" target="_blank" rel="noopener noreferrer">Team Profile Generator</a></div>
                   
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project4Img } alt="code quiz gif" />
                    <div className="text"><a href="https://bindi-v.github.io/Code_Quiz/" target="_blank" rel="noopener noreferrer">Code Quiz</a></div>
                    
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project5Img } alt="Password-Generator img" />
                    <div className="text"><a href="https://bindi-v.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">Password-Generator</a></div>
                    
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project6Img } alt="Work Day Scheduler img" />
                    <div className="text"><a href="https://bindi-v.github.io/Work_Day_Scheduler/" target="_blank" rel="noopener noreferrer">Work Day Scheduler</a></div>
                    
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project7Img } alt="Weather_Dashboard img" />
                    <div className="text"><a href="https://bindi-v.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer">Weather_Dashboard</a></div>
                    
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project8Img } alt="Professional Readme.md Generator" />
                    <div className="text"><a href="https://github.com/bindi-v/Professional_README_Generator" target="_blank" rel="noopener noreferrer">Professional Readme.md Generator</a></div>
                    
                </div>
                </div>
                <div className="card item">
                    <div className="box">
                    <img src={ Project9Img } alt="TwoCityComparisonTool img" />
                    <div className="text"><a href="https://pgandhi21.github.io/Two-City-Comparison-Tool/" target="_blank" rel="noopener noreferrer">Two-City-Comparison-Tool</a></div>
                    
                </div>
                </div>
                </OwlCarousel>
                </div>
          </section>  
    
    
    )
    
}

export default Projects;
