import React from 'react'
import ContactForm from '../components/ContactForm'

// Variables
const open = "<"
const close = "</"
const end = ">"

const ContactMe = () => {
    return (
        <div>
            <p>{ open } html { end }</p>
            <p style={{ marginLeft: "20px" }}>{ open } body { end }</p>
            <p style={{ marginLeft: "40px" }}>{ open } form { end }</p>

            <h2 className='contact-h2' style={{ color: "#05fdd8", fontSize: "40px", display: "flex", justifyContent: "center" }}>I'd Love to Hear From You</h2>

            <div className='contact-form'>
                <ContactForm /> 
            </div>

            <p style={{ marginLeft: "40px" }}>{ close } form { end }</p>
            <p style={{ marginLeft: "20px" }}>{ close } body { end }</p>
            <p>{ close } html { end }</p>
        </div>
    )
}

export default ContactMe