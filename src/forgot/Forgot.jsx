import React from 'react'
import './Forgot.css'
import {BsFacebook} from 'react-icons/bs'
import {ImGoogle3} from 'react-icons/im'
import {BsApple} from 'react-icons/bs'
import {TiArrowBack} from 'react-icons/ti'
import {AiOutlineUser} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

function Forgot() {
  return (
    <div className="Forgot">
        <div className="formain">
                <NavLink to={'/'} className='loglink'> <span> <TiArrowBack /> </span> </NavLink>
            <h4>Forgot Password</h4>
            <div className='forinput'>
                <h5>Enter Email Address</h5>
                <div className='email'>
          <input type="email" placeholder='nasar@gmail.com'/>
          <span className='mail'> <AiOutlineUser /> </span>
          </div>
                <NavLink to={'/Verification'}><button className='send'>Send</button></NavLink>
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

export default Forgot