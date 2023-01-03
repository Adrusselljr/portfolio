import React from 'react'

// Variables
const open = "<"
const close = "</"
const end = ">"

function AboutMe() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "4%" }}>
            <div style={{ fontSize: "40px" }}>
                <p style={{ fontSize: "small" }}>{ open } h2 { end }</p>
                <h2 style={{ margin: "-1% 0px 0px 0px", color: "#05fdd8" }}>Skills</h2>
                <p style={{ fontSize: "small" }}>{ close } h2 { end }</p>

                <p style={{ fontSize: "small" }}>{ open } p { end }</p>
                
                <p style={{ fontSize: "small" }}>{ close } p { end }</p>
            </div>
            
            <div style={{ fontSize: "40px", width: "45%", paddingRight: "5%" }}>
                <p style={{ fontSize: "small" }}>{ open } h2 { end }</p>
                <h2 style={{ margin: "-1% 0px 0px 0px", color: "#05fdd8" }}>Me, Myself and I</h2>
                <p style={{ fontSize: "small" }}>{ close } h2 { end }</p>

                <p style={{ fontSize: "small" }}>{ open } p { end }</p>
                <p style={{ margin: "-1.5% 0px -1.5% 0px", color: "white", fontSize: "20px" }}>First and foremost, I'm a United States Marine Corps Veteran.  I currently have about 3 years experience in full stack web development.  If I had to choose to go in one direction between front end vs back end, I would have to go with back end development!</p>
                <p style={{ fontSize: "small" }}>{ close } p { end }</p>
            </div>
        </div>
    )
}

export default AboutMe