import React from 'react'
import { useContext } from 'react';
import Register from './pages/Register';
import { Login } from './pages/Login';
import './style.scss';
import Home from './pages/Home';
import {
    BrowserRouter, Routes, Route, Navigate
} from "react-router-dom"
import { AuthContext } from './context/AuthContext';


export const App = () => {

    const { currentUser } = useContext(AuthContext)

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }

        return children;
    }

    console.log(currentUser)
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/">
                    <Route index element={<ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                    } />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
