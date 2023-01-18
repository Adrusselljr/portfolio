import React from 'react'

const ContactForm = () => {

    return (
        <div>
            <div>
                <label>Name: </label>
                <input type='text' placeholder='Name' style={{ marginLeft: "40px", width: "250px" }} />
            </div>
            <div>
                <label>Email: </label>
                <input type='email' placeholder='Email address' style={{ marginLeft: "45px", marginTop: "50px", width: "250px" }} />
            </div>
            <div>
                <label>Subject: </label>
                <input type='text' placeholder='Subject' style={{ marginLeft: "25px", marginTop: "50px", width: "250px" }} />
            </div>
            <div>
                <label>Message:</label>
                <textarea rows={ 3 } placeholder='Message' style={{ marginLeft: "15px", marginTop: "50px", width: "250px", height: "100px" }} />
            </div>
            <button className='submit-btn' type='submit'>Submit</button>
        </div>
    )
}

export default ContactForm