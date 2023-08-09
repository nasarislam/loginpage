import Image from './Untitled design.png'
// import Logo from './Pink Circle Gradient Photography Logo.jpg'
import './App.css';
import {AiOutlineUser} from "react-icons/ai"
import {LiaLockSolid} from "react-icons/lia"
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
      {/* <img src={Logo} alt="" /> */}
      <div className="main">
        <div className="child">
          <img src={Image} alt="" className='childimg'/>
        </div>
        <div className="vl"></div>
        <div className="child">
          <div className="login">
          <span className='title'>Login as a Admin user</span>
          <form action="#">
          <div className='inputfield'>
          <div className='email'>
          <input type="email" placeholder='nasar@gmail.com'/>
          <span className='mail'> <AiOutlineUser /> </span>
          </div>
          <div className='password'>
          <input type="password" placeholder='xxxxx'/>
          <span className='pass'> <LiaLockSolid/></span>
          </div>
          </div>
          <button className='logbtn'>LOGIN</button>
          </form>
          <span ><NavLink to={'/Forgot'} className='foot'> <p> Forgot you Password? </p> </NavLink></span>
          <NavLink to={'Signin'} className='foot get'> Get help Signed in.</NavLink>
          <NavLink className="terms">Terms of use.Privacy policy</NavLink>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
