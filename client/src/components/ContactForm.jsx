import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Links from '../components/Links'

// Variables
const open = "<"
const close = "</"
const end = ">"
const SERVICE_ID = "service_8xc4pkg"
const TEMPLATE_ID = "template_f4u1prw"
const PUBLIC_KEY = "HGkCuXmWGyc6p4Vs6"

const ContactForm = () => {
    const form = useRef()
    const navigate = useNavigate()

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
            navigate("/success")
    }

    return (
        <div className='contactForm-div'>
            <form ref={ form } onSubmit={ sendEmail }>

                <div>
                    <label>Name: </label>
                    <input className='contactForm-input-name' name='name' type='text' placeholder='Name'/>
                </div>
                <div>
                    <label>Email: </label>
                    <input className='contactForm-input-email' name='email' type='email' placeholder='Email address'/>
                </div>
                <div>
                    <label>Subject: </label>
                    <input className='contactForm-input-subject' name='subject' type='text' placeholder='Subject'/>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea className='contactForm-input-message' name="message" rows={ 3 } placeholder='Message'/>
                </div>

                <div className='contact-buttons'>
                    <div className="button btn">
                        <Link className='contactForm-Link' to='/' value="Send" type='submit'><p className='contactForm-Link-p'>Cancel</p></Link>
                    </div>
                    <div className="button btn">
                        <input className='contactForm-submit' type="submit" value="Send" />
                    </div>
                </div>

            </form>

            <div className='contactForm-Links-div'>
                <p className='contactForm-symbols-1'>{ open } div { end }</p>
                <Links />
                <p className='contactForm-symbols-2'>{ close } div { end }</p>
            </div>
        </div>
    )
}

export default ContactForm