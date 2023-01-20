import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'

// Variables
const open = "<"
const close = "</"
const end = ">"

function Success() {
    return (
        <div>
            <p>{ open } html { end }</p>
            <p style={{ marginLeft: "20px" }}>{ open } body { end }</p>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#05fdd8" }}>
                <h1>Thank you for the email!  I will reply as soon as I can!</h1>
                <p>Please keep browing my portfolio! Click Home.</p>
                <div className="button" style={{ border: "1px solid #05fdd8", width: "250px", fontSize: "x-large", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", transition: "0.3s", color: "#05fdd8" }}>
                    <Link style={{ textDecoration: "none", color: "#05fdd8" }} to='/' value="Send" className='submit-btn' type='submit'><p style={{ width: "250px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>Home</p></Link>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                <p style={{ marginRight: "15px" }}>{ open } div { end }</p>
                <Links />
                <p style={{ marginLeft: "20px" }}>{ close } div { end }</p>
            </div>

            <p style={{ marginLeft: "20px" }}>{ close } body { end }</p>
            <p>{ close } html { end }</p>
        </div>
    )
}

export default Success