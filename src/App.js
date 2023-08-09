import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Forgot from './forgot/Forgot'
import Verification from './verification/Verification'
import NewPassword from './newpassword/NewPassword'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/Forgot' element={<Forgot />}/>
            <Route path='/Verification' element={<Verification />}/>
            <Route path='/NewPassword' element={<NewPassword />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App