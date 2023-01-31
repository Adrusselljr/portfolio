import React from 'react'
import ContactForm from '../components/ContactForm'

// Variables
const open = "<"
const close = "</"
const end = ">"

const ContactMe = () => {
    return (
        <div>
            <p className='contactMe-symbols-1'>{ open } html { end }</p>
            <p className='contactMe-symbols-2'>{ open } body { end }</p>
            <p className='contactMe-symbols-3'>{ open } form { end }</p>

            <h2 className='contactMe-h2'>I'd Love to Hear From You</h2>

            <div className='contact-form'>
                <ContactForm /> 
            </div>

            <p className='contactMe-symbols-3'>{ close } form { end }</p>
            <p className='contactMe-symbols-2'>{ close } body { end }</p>
            <p className='contactMe-symbols-1'>{ close } html { end }</p>
        </div>
    )
}

export default ContactMe