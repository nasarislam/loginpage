import React from 'react'
import './Verification.css'
import {BsFacebook} from 'react-icons/bs'
import {ImGoogle3} from 'react-icons/im'
import {BsApple} from 'react-icons/bs'
import {TiArrowBack} from 'react-icons/ti'
import { NavLink } from 'react-router-dom'


function Verification() {
  return (
    <div className="Verification">
        <div className="verimain">
                <NavLink to={'/'} className='verilink'> <span> <TiArrowBack /> </span> </NavLink>
            <h4>Forgot Password</h4>
            <div className='veriinput'>
                <h5>Enter Verification Code</h5>
                <div className='email'>
          <input type="email" placeholder='Enter OTP'/>
          <p>If you didn't receive a code <span className='resend'>Resend</span></p>
          </div>
                <NavLink to={'/NewPassword'}><button className='send'>Send</button></NavLink>
                <p> or </p>
                <div>
                <BsFacebook className='logo'/> &nbsp; <ImGoogle3 className='logo'/> &nbsp; <BsApple className='logo'/>
                </div>
                <p>Do you have an account?</p>
                <button className='signup'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Verification

