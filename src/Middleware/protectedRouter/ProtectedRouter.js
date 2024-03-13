import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRouter = () => {
    const token = !false;
    return token ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRouter
