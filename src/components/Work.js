import React from 'react'
import { FaPaintBrush, FaCode  } from "react-icons/fa";
import { CgMathPercent } from "react-icons/cg";

const Work = () => {
    return (
        <div>
        <section className="work" id="work">
        <div className="max-width">
        <h2 className="title">Work</h2>
        <div className="work-content">
            <div className="card"> 
            <div className="box">
            <FaPaintBrush className="fas fa-paint-brush" size={28} />
            <div className="text">Web Design</div>
            <p>Creating website designs <br/>
                producing sample sites, Conceptualizing creative ideas with clients.
                Testing and improving the design of the website.
                Establishing design guidelines, standards, and best practices.
                Maintaining the appearance of websites by enforcing content standards.
            </p>
            </div>
            </div>
            <div className="card"> 
                <div className="box">
                <FaCode className="fas fa-code" size={28} />
                <div className="text">Web Developer</div>
                <p> As a full stack web developer, I am known as an innovative problem solver passionate about developing apps, 
                    with a focus on mobile-first design and development. With each project, my aim is to best engage my
                    audience for an impactful user experience. I applied aspects of UX and agile development in a
                    recent project. I worked on a team of four to develop an app that we deployed on Heroku. I’m excited to
                    leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the
                    web.
                </p>
                </div>
            </div>
            <div className="card"> 
                <div className="box">
                <CgMathPercent size={28} />
                <div className="text">Math Teacher</div>
                <p>I worked as a Maths and Science teacher in Middle School then in High School.
                        And then took break for family. Now starting new career as web developer.
                </p>
                </div>
            </div>
        </div>
        </div>  
        </section>
        </div>
    )
}

export default Work;
