import React from 'react'
import './NewPassword.css'
import { NavLink } from 'react-router-dom'
import {TiArrowBack} from 'react-icons/ti'

function NewPassword() {
  return (
    <div className="NewPassword">
        <div className="passmain">
                <NavLink to={'/Verification'} className='verilink'> <span> <TiArrowBack /> </span> </NavLink>
            <h4>New Password</h4>
            <div className='passinput'>
              <div className='passemail'>
              {/* passemail */}
                <label>
                <input type="password" placeholder='Atleast 8 digit'/>
                 </label>
                 {/* Confirm Password */}
             </div>
              <div className='passemail'>
                <label>
                <input type="text" placeholder='******'/>
                 </label>
             </div>
                <button className='send'>Send</button>
                
            </div>
        </div>
    </div>
  )
}

export default NewPassword