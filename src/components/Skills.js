import React from 'react'

const Skills = () => {
    return (
        <div>
            <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My Skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills and experiences</div>
                  <p>HTML/CSS, GIT,
                    Analytical,
                    Responsive design,
                    JavaScript, NodeJS, ExpressJS,
                    MYSQL, Handlebars, MongoDB, React
                    Interpersonal,
                    Testing and debugging,
                    Back-end basics and
                    Search engine optimization
                    </p>

                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML, CSS, JavaScript</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>GIT</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>NodeJS</span>
                        </div>
                        <div class="line css"></div>
                    </div>                    
                    <div class="bars">
                        <div class="info">
                            <span>Express & MYSQL</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MongoDB</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Skills
