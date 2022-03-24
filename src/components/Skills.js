import React from 'react'

const Skills = () => {
    return (
        <div>
            <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills and experiences</div>
                  <p>HTML/CSS, GIT,
                    Analytical,
                    Responsive design,
                    JavaScript, Java 8, Spring Boot, NodeJS, ExpressJS,
                    MYSQL, Handlebars, MongoDB, ReactJS, 
                    GraphQL, Heroku, Netlify, Jenkins, Interpersonal,
                    Testing and debugging,
                    Back-end basics and
                    Search engine optimization
                    </p>

                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML, CSS, JavaScript</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Java 8, Spring Boot</span>
                        </div>
                        <div className="line html"></div>
                        </div>
                    <div className="bars">
                        <div className="info">
                            <span>GIT</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>NodeJS, ExpressJS</span>
                        </div>
                        <div className="line css"></div>
                    </div>                    
                    <div className="bars">
                        <div className="info">
                            <span>  MYSQL, NoSQL</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MongoDB</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>ReactJS,  GraphQL</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Netlify, Heroku, Jenkins, AWS</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Skills;
