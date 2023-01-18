import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Links from '../components/Links'

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
            <p style={{ marginLeft: "40px" }}>{ close } section { end }</p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                <Links />
            </div>

            <p style={{ marginLeft: "40px", marginTop: "10%" }}>{ open } section { end }</p>
            <AboutMe />
            <p style={{ marginLeft: "40px" }}>{ close } section { end }</p>

            <p style={{ marginLeft: "40px", marginTop: "10%" }}>{ open } section { end }</p>
            <Projects />
            <p style={{ marginLeft: "40px" }}>{ close } section { end }</p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                <Links />
            </div>

            <p style={{ marginLeft: "20px" }}>{ close } body { end }</p>
            <p>{ close } html { end }</p>

        </div>
    )
}

export default Main