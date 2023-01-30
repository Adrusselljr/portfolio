import React from 'react'

// Variables
const open = "<"
const close = "</"
const end = ">"

const AboutMe = () => {
    return (
        <div className='aboutMe-div-1'>
            <div className='aboutMe-div-2'>
                <p className='aboutMe-symbols'>{ open } h2 { end }</p>
                <h2 className='aboutMe-h2'>Skills</h2>
                <p className='aboutMe-symbols'>{ close } h2 { end }</p>

                <p className='aboutMe-symbols'>{ open } p { end }</p>
                <div className='skills'>
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
                <p className='aboutMe-symbols-1'>{ close } p { end }</p>
            </div>
            
            <div className='aboutMe-div-3'>
                <p className='aboutMe-symbols'>{ open } h2 { end }</p>
                <h2 className='aboutMe-h2'>Me, Myself and I</h2>
                <p className='aboutMe-symbols'>{ close } h2 { end }</p>

                <p className='aboutMe-symbols'>{ open } p { end }</p>
                <p className='aboutMe-p'>I'm a Software Engineer with a passion for building things. I love building and creating, whether those things are web applications, or even projects at home. I'm a problem solver and I just love watching my thoughts come to life on screen. Ever since I can remember, I've always had an interest and passion for tech. I specialize in full stack development and make it my mission to create accessible and user-friendly applications and websites. Other than coding, I spend my free time playing video games, and reading.</p>
                <p className='aboutMe-symbols'>{ close } p { end }</p>
            </div>

            <div className="button">
                <a className='aboutMe-a' href="https://docs.google.com/document/d/1lU9mJVSzk6Mj0VQLnrz1Nil7LYSyr49I92A9Iathe7I"><p className='button-p'>My Resume</p></a>
            </div>
        </div>
    )
}

export default AboutMe