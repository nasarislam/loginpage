import Image from './Untitled design.png'
// import Logo from './Pink Circle Gradient Photography Logo.jpg'
import './App.css';
import {AiOutlineUser} from "react-icons/ai"
import {LiaLockSolid} from "react-icons/lia"

function App() {
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
          <input type="text" placeholder='nasar@gmail.com'/>
          <span className='mail'> <AiOutlineUser /> </span>
          </div>
          <div className='password'>
          <input type="password" placeholder='xxxxx'/>
          <span className='pass'> <LiaLockSolid/></span>
          </div>
          </div>
          <button>LOGIN</button>
          </form>
          <span className='foot'>Forget you Password?</span>
          <span className='foot get'>Get help Signed in.</span>
          <span className="terms">Terms of use.Privacy policy</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
