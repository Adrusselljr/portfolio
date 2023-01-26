import React from 'react'
import { Link } from 'react-router-dom'

// Variables
const open = "<"
const close = "</"
const end = ">"

const About = () => {
    return (
            <div style={{ margin: "-1% 0px 0px 4.5%", fontSize: "40px", display: "flex", flexDirection: "column", width: "1100px" }}>
                <p style={{ fontSize: "small" }}>{ open } h1 { end }</p>
                <h1 style={{ margin: "-1% 0px 0px 0px", color: "white" }}>Hi,</h1>
                <h1 style={{ margin: "-1.5% 0px 0px 0px", color: "white" }}>I'm <span style={{ color: "#05fdd8" }}>A</span>aron,</h1>
                <h1 style={{ margin: "-1.5% 0px -1.25% 0px", color: "white" }}>full stack web developer</h1>
                <p style={{ marginBottom: "-5px", fontSize: "small" }}>{ close } h1 { end }</p>
                <p style={{ fontSize: "small" }}>{ open } p { end }</p>
                <p style={{ margin: "-.5% 0px -.5% 0px", color: "#8d8d8d" }}>Back End Developer / Front End Developer</p>
                <p style={{ fontSize: "small" }}>{ close } p { end }</p>

                <div className="button">
                    <Link style={{ textDecoration: 'none', color: "#05fdd8" }} to="contact" ><p className='button-p'>Contact Me!</p></Link>
                </div>
            </div>
    )
}

export default About