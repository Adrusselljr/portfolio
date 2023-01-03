import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import ScrollDown from '../components/ScrollDown'
import AboutMe from '../components/AboutMe'


// Variables
const open = "<"
const close = "</"
const end = ">"

const Main = () => {
    return (
        <div style={{ margin: '25px', fontSize: "small" }}>

            <p>{ open } html { end }</p>
            <p style={{ marginLeft: "20px" }}>{ open } body { end }</p>

            <p style={{ marginLeft: "40px" }}>{ open } header { end }</p>
            <Header />
            <p style={{ marginLeft: "40px" }}>{ close } header { end }</p>

            <p style={{ marginLeft: "40px" }}>{ open } section { end }</p>
            <About />
            <div style={{ border: "1px solid #05fdd8", width: "250px", fontSize: "x-large", height: "60px", color: "#05fdd8", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "4.65%" }}>
                <div className="contact-me">
                    <p>Contact Me!</p>
                </div>
            </div>
            <p style={{ marginLeft: "40px" }}>{ close } section { end }</p>


            <div style={{ height: "480px", border: "1px solid #1d1d1d", diplay: "flex" }}>
                <ScrollDown />
            </div>

            <p style={{ marginLeft: "40px" }}>{ open } section { end }</p>
            <AboutMe />
            <p style={{ marginLeft: "40px" }}>{ close } section { end }</p>

            <p style={{ marginLeft: "20px" }}>{ close } body { end }</p>
            <p>{ close } html { end }</p>

        </div>
    )
}

export default Main