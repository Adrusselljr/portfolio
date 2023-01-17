import React from 'react'
import { Link } from 'react-router-dom'
import Email from '../images/EmailLogo.png'
import GitHub from '../images/GitHubLogo.png'
import LinkedIn from '../images/LinkedinLogo.png'
import Resume from '../images/ResumeLogo.png'

function Links() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a href="https://www.linkedin.com/in/aaron-r-59578b186/"><img style={{ width: "60px" }} src={ LinkedIn } alt="LinkedIn Logo" /></a>
            <a href="https://github.com/Adrusselljr"><img style={{ width: "60px" }} src={ GitHub } alt="GitHub Logo" /></a>
            <a href="https://docs.google.com/document/d/1lU9mJVSzk6Mj0VQLnrz1Nil7LYSyr49I92A9Iathe7I"><img style={{ width: "40px", marginLeft: "10px" }} src={ Resume } alt="Resume Logo" /></a>
            <Link to="contact" ><img style={{ width: "40px", marginLeft: "20px" }} src={ Email } alt="Email Logo" /></Link>
        </div>
    )
}

export default Links