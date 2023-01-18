import React from 'react'

// Variables
const open = "<"
const close = "</"
const end = ">"

const AboutMe = () => {
    return (
        <div style={{ marginLeft: "4%" }}>
            <div style={{ fontSize: "40px" }}>
                <p style={{ fontSize: "small" }}>{ open } h2 { end }</p>
                <h2 style={{ margin: "-1% 0px 0px 0px", color: "#05fdd8" }}>Skills</h2>
                <p style={{ fontSize: "small" }}>{ close } h2 { end }</p>

                <p style={{ fontSize: "small" }}>{ open } p { end }</p>
                <div className='skills' style={{ fontSize: "15px", color: "white", display: "flex", flexWrap: "wrap", width: "90%" }}>
                    <p>Node.js</p>
                    <p>React.js</p>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>AWS</p>
                    <p>Express</p>
                    <p>Mongoose</p>
                    <p>SpringBoot</p>
                    <p>Django</p>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>jQuery</p>
                    <p>Figma</p>
                    <p>SCRUM</p>
                    <p>Trello</p>
                    <p>Rest API's</p>
                    <p>Marterial UI</p>
                    <p>BootStrap</p>
                    <p>Vercel</p>
                    <p>Heroku</p>
                    <p>Git & GitHub</p>

                </div>
                <p style={{ fontSize: "small", marginBottom: "60px" }}>{ close } p { end }</p>
            </div>
            
            <div style={{ fontSize: "40px", width: "90%", paddingRight: "5%" }}>
                <p style={{ fontSize: "small" }}>{ open } h2 { end }</p>
                <h2 style={{ margin: "-1% 0px 0px 0px", color: "#05fdd8" }}>Me, Myself and I</h2>
                <p style={{ fontSize: "small" }}>{ close } h2 { end }</p>

                <p style={{ fontSize: "small" }}>{ open } p { end }</p>
                <p style={{ color: "white", fontSize: "20px" }}>I'm a Software Engineer with a passion for building things. I love building and creating, whether those things are web applications, or even projects at home. I'm a problem solver and I just love watching my thoughts come to life on screen. Ever since I can remember, I've always had an interest and passion for tech. I specialize in full stack development and make it my mission to create accessible and user-friendly applications and websites. Other than coding, I spend my free time playing video games, and reading.</p>
                <p style={{ fontSize: "small" }}>{ close } p { end }</p>
            </div>

            <div className="button" style={{ border: "1px solid #05fdd8", width: "250px", fontSize: "x-large", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "4.65%", transition: "0.3s", color: "#05fdd8" }}>
                <a style={{ textDecoration: "none", color: "#05fdd8" }} href="https://docs.google.com/document/d/1lU9mJVSzk6Mj0VQLnrz1Nil7LYSyr49I92A9Iathe7I"><p style={{ width: "250px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>My Resume</p></a>
            </div>
        </div>
    )
}

export default AboutMe