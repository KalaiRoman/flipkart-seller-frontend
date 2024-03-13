import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Changepassword, ForgetPassword, Home, PagenotFound, Products, Signin, Signup } from '../Pages/Pages';
import ProtectedRouter from '../Middleware/protectedRouter/ProtectedRouter';
function Routing() {
    const token = false;
    return (
        <Routes>
            <Route exact path="/" element={!token ? <Signin /> : <Navigate to="/home" />}></Route>
            <Route exact path="/sign-up" element={!token ? <Signup /> : <Navigate to="/home" />}></Route>
            <Route exact path="/forget-password" element={!token ? <ForgetPassword /> : <Navigate to="/" />}></Route>
            <Route exact path="/change-password" element={!token ? <Changepassword /> : <Navigate to="/" />}></Route>
            <Route element={<ProtectedRouter />}>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/product" element={<Products />}></Route>
            </Route>
            <Route exact path="/*" element={<PagenotFound />}></Route>
        </Routes>
    )
}

export default Routing
