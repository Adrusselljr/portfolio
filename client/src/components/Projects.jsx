import React from 'react'
import MemoryGame from '../images/MemoryGame.png'
import PongGame from '../images/PongGame.png'
import GitHub from '../images/GitHubLogo.png'

// Variables
const open = "<"
const close = "</"
const end = ">"

const Projects = () => {
    return (
        <div className='project-main'>
            <div className='project-main-2'>
                <p className='project-symbols'>{ open } h2 { end }</p>
                <h2 className='projects-h2'>Projects</h2>
                <p className='project-symbols'>{ close } h2 { end }</p>

                <div className='projects-div'>
                    <p className='project-symbols'>{ open } div { end }</p>
                    <div className='projects-inner-div'>
                        <div className='projects-text-div'>
                            <p>PONG</p>
                            <p className='projects-text-p'>Created with HTML5, CSS3, and JavaScript</p>
                            <p className='projects-text-p'>* MUST HAVE KEYBOARD TO PLAY *</p>
                            <a href="https://github.com/Adrusselljr/pong"><img className='projects-github-img' src={ GitHub } alt="GitHub Logo" /></a>
                        </div>
                        <a href="https://pong-lac.vercel.app/"><img className='projects-pong-img' src={ PongGame } alt="Pong Game" /></a>
                    </div>
                    <p className='project-symbols'>{ close } div { end }</p>
                </div>

                <div className='projects-div'>
                    <p className='project-symbols'>{ open } div { end }</p>
                    <div className='projects-inner-div'>
                        <a href="https://memory-card-game-blue-five.vercel.app/"><img className='projects-memory-img' src={ MemoryGame } alt="Memory Game" /></a>
                        <div className='projects-text-div'>
                            <p>MATCH GAME</p>
                            <p className='projects-text-p'>Created with HTML5, CSS3, and JavaScript</p>
                            <p className='projects-text-p'>Used jQuery and Lodash</p>
                            <a href="https://github.com/Adrusselljr/memory-card-game"><img className='projects-github-img' src={ GitHub } alt="GitHub Logo" /></a>
                        </div>
                    </div>
                    <p className='project-symbols'>{ close } div { end }</p>
                </div>

                <div className='projects-div'>
                    <p className='project-symbols'>{ open } div { end }</p>
                    <div className='projects-inner-div'>
                        <div>
                            <p>MOVIE LIBRARY</p>
                        </div>
                        <p>IMG</p>
                    </div>
                    <p className='project-symbols'>{ close } div { end }</p>
                </div>

                <div className='projects-div'>
                    <p className='project-symbols'>{ open } div { end }</p>
                    <div className='projects-inner-div'>
                        <p>SOCIAL MEDIA PLATFORM</p>
                        <p>IMG</p>
                    </div>
                    <p className='project-symbols'>{ close } div { end }</p>
                </div>

            </div>
        </div>
    )
    }

export default Projects