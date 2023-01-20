import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

// Variables
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
        <div style={{ width: "70%", marginLeft: "25%", marginTop: "50px" }}>
            <form ref={ form } onSubmit={ sendEmail }>

                <div>
                    <label>Name: </label>
                    <input name='name' type='text' placeholder='Name' style={{ width: "50%", marginLeft: "50px" }} />
                </div>
                <div>
                    <label>Email: </label>
                    <input name='email' type='email' placeholder='Email address' style={{ marginLeft: "55px", marginTop: "50px", width: "50%" }} />
                </div>
                <div>
                    <label>Subject: </label>
                    <input name='subject' type='text' placeholder='Subject' style={{ marginLeft: "35px", marginTop: "50px", width: "50%" }} />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" rows={ 3 } placeholder='Message' style={{ marginLeft: "25px", marginTop: "50px", width: "50%", height: "100px" }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-around", marginRight: "35%" }}>
                    <div className="button" style={{ border: "1px solid #05fdd8", width: "250px", fontSize: "x-large", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", transition: "0.3s", color: "#05fdd8" }}>
                        <Link style={{ textDecoration: "none", color: "#05fdd8" }} to='/' value="Send" className='submit-btn' type='submit'><p style={{ width: "250px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>Cancel</p></Link>
                    </div>
                    <div className="button" style={{ border: "1px solid #05fdd8", width: "250px", fontSize: "x-large", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", transition: "0.3s", color: "#05fdd8" }}>
                        <input style={{ border: "none" }} className='submit-btn submit' type="submit" value="Send" />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ContactForm