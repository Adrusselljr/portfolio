import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

// variables
const SERVICE_ID = "service_8xc4pkg"
const TEMPLATE_ID = "template_f4u1prw"
const PUBLIC_KEY = "HGkCuXmWGyc6p4Vs6"

const ContactForm = () => {
    const form = useRef()

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div>
            <form ref={ form } onSubmit={ sendEmail }>
                <div>
                    <label>Name: </label>
                    <input name='name' type='text' placeholder='Name' style={{ marginLeft: "40px", width: "250px" }} />
                </div>
                <div>
                    <label>Email: </label>
                    <input name='email' type='email' placeholder='Email address' style={{ marginLeft: "45px", marginTop: "50px", width: "250px" }} />
                </div>
                <div>
                    <label>Subject: </label>
                    <input name='subject' type='text' placeholder='Subject' style={{ marginLeft: "25px", marginTop: "50px", width: "250px" }} />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" rows={ 3 } placeholder='Message' style={{ marginLeft: "15px", marginTop: "50px", width: "250px", height: "100px" }} />
                </div>
                <button value="Send" className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm