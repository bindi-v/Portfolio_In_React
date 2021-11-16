import React from 'react';
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
        <div>
           <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                    <img src={ Project1Img } alt="Homeschool HookUp homepage screenshot" />
                    <div className="text"><a href="https://shrieking-mummy-96456.herokuapp.com/" target="_blank">HomeSchool_HookUp</a></div>
                    <p>With our team, we conceive and execute a design that solves a real-world problem. 
                        In creating our first collaborative full-stack application, we combine a robust back end--with servers, databases, advanced APIs, and user authentication—-to an intuitive front end.
                         We continue to build on the agile development methodologies we’ve used throughout this course, like storing our project code in GitHub, managing our work with a project management tool, and implementing feature and bug fixes using the Git branch workflow and pull requests.
                         Our Project awarded the prestigious title of best project presentation at Coding Boot Camp.
                        </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project2Img } alt="Note Taker homepage screenshot" />
                    <div className="text"><a href="https://blooming-brook-52468.herokuapp.com/" target="_blank">Note Taker</a></div>
                    <p>I create an application called Note Taker that can be used to write and save notes. This application will use an ExpressJs back end and will save and retrieve note data from a JSON file.
                        In this application, I have to build the back end, connect with front end, and then deploy the entire application to Heroku.
                     </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project3Img } alt="Team Profile Generating homepage screenshot" />
                    <div className="text"><a href="https://github.com/bindi-v/Team_Profile_Generator" target="_blank">Team Profile Generator</a></div>
                    <p>In this application I have to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
                     Testing is key to making code maintainable, so I also write a unit test for every part of code and ensure that it passes each test.
                    </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project4Img } alt="code quiz gif" />
                    <div className="text"><a href="https://bindi-v.github.io/Code_Quiz/" target="_blank">Code Quiz</a></div>
                    <p>To build a timed coding quiz with multiple-choice questions. 
                        This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. 
                        It has a clean, polished, and responsive user interface.
                    </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project5Img } alt="Password-Generator img" />
                    <div className="text"><a href="https://bindi-v.github.io/Password-Generator/" target="_blank">Password-Generator</a></div>
                    <p>Here I create an application that enables employees to generate random passwords based on criteria that they’ve selected.
                         This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. 
                        It has a clean and polished, responsive user interface that adapts to multiple screen sizes.
                    </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project6Img } alt="Work Day Scheduler image" />
                    <div className="text"><a href="https://bindi-v.github.io/Work_Day_Scheduler/" target="_blank">Work Day Scheduler</a></div>
                    <p>Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. 
                        This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                        For work with date and time, I use [Moment.js] library.
                        </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project7Img } alt="Weather_Dashboard img" />
                    <div className="text"><a href="https://bindi-v.github.io/Weather_Dashboard/" target="_blank">Weather_Dashboard</a></div>
                    <p>My challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
                         Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL.
                          Here I have to retrieving data from another application's API and using it in the context of Weather Dashboard.
                    </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project8Img } alt="Professional Readme.md Generator" />
                    <div className="text"><a href="https://github.com/bindi-v/Professional_README_Generator" target="_blank">Professional Readme.md Generator</a></div>
                    <p>You can quickly and easily create a README.md file by using command line application to generate one. 
                        You can dynamically generate a professional README.md file from a user's input by using this command line application.
                    </p>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={ Project9Img } alt="TwoCityComparisonTool img" />
                    <div className="text"><a href="https://pgandhi21.github.io/Two-City-Comparison-Tool/" target="_blank">Two-City-Comparison-Tool</a></div>
                    <p>In this project, our group members were tasked with creating a real-world front-end application that we will be showcasing to potential employers.
                         In order to meet the project requirements:

                        styling was made through the CSS Framework Materialize,
                        the project is deployed to GitHub Pages,
                        the web application accepts and responds to user input,
                        Google Maps, CovidActNow, OpenWeather APIs were used,
                        modals were implemented to serve as an error message,
                        client-side storage was made to save the city in the search input.
                        </p>
                </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    )
}

export default Projects
