import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Addproduct, Changepassword, ForgetPassword, Home, Inventory, Orders, Otp, PagenotFound, Products, Profile, Signin, Signup } from '../Pages/Pages';
import ProtectedRouter from '../Middleware/protectedRouter/ProtectedRouter';
import TokenId from '../Middleware/token/TokenId';
function Routing() {
    const { toknname } = TokenId();
    return (
        <Routes>
            <Route exact path="/" element={!toknname ? <Signin /> : <Navigate to="/home" />}></Route>
            <Route exact path="/sign-up" element={!toknname ? <Signup /> : <Navigate to="/home" />}></Route>
            <Route exact path="/forget-password" element={!toknname ? <ForgetPassword /> : <Navigate to="/" />}></Route>
            <Route exact path="/change-password" element={!toknname ? <Changepassword /> : <Navigate to="/" />}></Route>
            <Route exact path="/otp" element={!toknname ? <Otp /> : <Navigate to="/" />}></Route>

            <Route element={<ProtectedRouter />}>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/product" element={<Products />}></Route>
                <Route exact path="/orders" element={<Orders />}></Route>
                <Route exact path="/inventory" element={<Inventory />}></Route>
                <Route path="addproduct" element={<Addproduct />}></Route>
                <Route path="profile" element={<Profile />}></Route>


            </Route>
            <Route exact path="/*" element={<PagenotFound />}></Route>
        </Routes>
    )
}

export default Routing
