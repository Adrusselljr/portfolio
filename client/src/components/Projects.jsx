import React from 'react'

// Variables
const open = "<"
const close = "</"
const end = ">"

function Projects() {
    return (
        <div style={{ marginLeft: "4%" }}>
            <div style={{ fontSize: "40px" }}>
                <p style={{ fontSize: "small" }}>{ open } h2 { end }</p>
                <h2 style={{ margin: "-1% 0px 0px 0px", color: "#05fdd8" }}>Projects</h2>
                <p style={{ fontSize: "small" }}>{ close } h2 { end }</p>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p>PONG</p>
                        <p>IMG</p>
                    </div>
                    <p style={{ fontSize: "small" }}>{ close } div { end }</p>
                </div>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p>MATCH GAME</p>
                        <p>IMG</p>
                    </div>
                    <p style={{ fontSize: "small" }}>{ close } div { end }</p>
                </div>

                <div style={{ marginLeft: "1%" }}>
                    <p style={{ fontSize: "small" }}>{ open } div { end }</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p>MOVIE LIBRARY</p>
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