import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { auth, storage, db } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';




export const Login = () => {
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
            })
        }
        catch (err) {
            console.log(err)
            setErr(err);
        }


    }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>JG Chat</span>
                <span className='title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Login</button>
                    {
                        err && <span style={{ color: "red" }}>{err.code}</span>
                    }
                </form>
                <p>Don't have an account?<Link to="/register">Register</Link> </p>
            </div>
        </div>
    )
}
