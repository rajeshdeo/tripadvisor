import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signUp" element={<SignUp />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes