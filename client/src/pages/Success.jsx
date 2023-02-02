import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'

// Variables
const open = "<"
const close = "</"
const end = ">"

const Success = () => {
    return (
        <div className='success-main-div'>
            <p className='success-symbols-1'>{ open } html { end }</p>
            <p className='success-symbols-2'>{ open } body { end }</p>

            <div className='success-inner-div-1'>
                <h3>Thank you for the email!  I will reply as soon as I can!</h3>
                <p>Please keep browing my portfolio! Click Home.</p>
                <div className="btn success-btn">
                    <Link className='success-btn-Link' to='/' value="Send" type='submit'><p>Home</p></Link>
                </div>
            </div>

            <div className='success-inner-div-2'>
                <p className='success-Links-symbols-1'>{ open } div { end }</p>
                <Links />
                <p className='success-Links-symbols-2'>{ close } div { end }</p>
            </div>

            <p className='success-symbols-2'>{ close } body { end }</p>
            <p className='success-symbols-1'>{ close } html { end }</p>
        </div>
    )
}

export default Success