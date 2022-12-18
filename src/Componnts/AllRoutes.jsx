import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gaya from '../Pages/Gaya'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Payment from '../Pages/Payment'
import PaymentSuccessful from '../Pages/PaymentSuccessful'
import SignUp from '../Pages/SignUp'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signUp" element={<SignUp />}/>
            <Route path="/gaya" element={<Gaya />} />
            <Route path="/payment" element= {<Payment />}/>
            <Route path="/successful" element= {<PaymentSuccessful />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes