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
            <div className='mainjs-div'>

                <p>{ open } html { end }</p>
                <p className='p20'>{ open } body { end }</p>

                <p className='p40'>{ open } header { end }</p>
                <Header />
                <p className='p40'>{ close } header { end }</p>

                <p className='p40'>{ open } section { end }</p>
                <About />
                <p className='p40'>{ close } section { end }</p>

                <div className='link-div'>
                    <p className='links-p'>{ open } div { end }</p>
                    <Links />
                    <p className='p20'>{ close } div { end }</p>
                </div>

                <p className='p40-2'>{ open } section { end }</p>
                <AboutMe />
                <p className='p40'>{ close } section { end }</p>

                <p className='p40-2'>{ open } section { end }</p>
                <Projects />
                <p className='p40'>{ close } section { end }</p>

                <div className='link-div'>
                    <p className='links-p'>{ open } div { end }</p>
                    <Links />
                    <p className='p20'>{ close } div { end }</p>
                </div>

                <p className='p20'>{ close } body { end }</p>
                <p>{ close } html { end }</p>

            </div>
    )
}

export default Main