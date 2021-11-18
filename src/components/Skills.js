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
                    JavaScript, NodeJS, ExpressJS,
                    MYSQL, Handlebars, MongoDB, React, 
                    GraphQL, Interpersonal,
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
                            <span>GIT</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>NodeJS</span>
                        </div>
                        <div className="line css"></div>
                    </div>                    
                    <div className="bars">
                        <div className="info">
                            <span>Express,  MYSQL</span>
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
                            <span>React,  GraphQL</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Skills;
