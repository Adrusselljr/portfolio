import React from 'react'
import MemoryGame from '../images/MemoryGame.png'
import PongGame from '../images/PongGame.png'

// Variables
const open = "<"
const close = "</"
const end = ">"

const Projects = () => {
    return (
        <div style={{ marginLeft: "4%" }}>
            <div style={{ fontSize: "40px" }}>
                <p style={{ fontSize: "small" }}>{ open } h2 { end }</p>
                <h2 style={{ margin: "-1% 0px 0px 0px", color: "#05fdd8" }}>Projects</h2>
                <p style={{ fontSize: "small" }}>{ close } h2 { end }</p>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <p>PONG</p>
                        </div>
                        <a href="https://pong-lac.vercel.app/"><img style={{ width: "400px", marginTop: "40px" }} src={ PongGame } alt="Pong Game" /></a>
                    </div>
                    <p style={{ fontSize: "small" }}>{ close } div { end }</p>
                </div>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <a href="https://memory-card-game-blue-five.vercel.app/"><img style={{ width: "400px", height: "275px", marginTop: "40px" }} src={ MemoryGame } alt="Memory Game" /></a>
                        <div>
                            <p>MATCH GAME</p>
                        </div>
                    </div>
                    <p style={{ fontSize: "small" }}>{ close } div { end }</p>
                </div>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <p>MOVIE LIBRARY</p>
                        </div>
                        <p>IMG</p>
                    </div>
                    <p style={{ fontSize: "small" }}>{ close } div { end }</p>
                </div>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p>SOCIAL MEDIA PLATFORM</p>
                        <p>IMG</p>
                    </div>
                    <p style={{ fontSize: "small" }}>{ close } div { end }</p>
                </div>

            </div>
        </div>
    )
    }

export default Projects