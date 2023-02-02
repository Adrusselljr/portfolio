import React from 'react'
import { Link } from 'react-router-dom'

// Variables
const open = "<"
const close = "</"
const end = ">"

const About = () => {
    return (
            <div className='about-div'>
                <p className='about-symbols'>{ open } h1 { end }</p>
                <h1 className='about-h1-1'>Hi,</h1>
                <h1 className='about-h1-2'>I'm <span className='about-span'>A</span>aron,</h1>
                <h1 className='about-h1-3'>full stack web developer</h1>
                <p className='about-symbols-1'>{ close } h1 { end }</p>
                <p className='about-symbols'>{ open } p { end }</p>
                <p className='about-symbols-2'>Back End Developer / Front End Developer</p>
                <p className='about-symbols'>{ close } p { end }</p>

                <div className="btn btn-size">
                    <Link className='about-link' to="contact" ><p className='button-p'>Contact Me!</p></Link>
                </div>
            </div>
    )
}

export default About