import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRouter = () => {
    const token = localStorage.getItem("flip-token");
    useEffect(() => {
    }, [token])
    return token ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRouter
