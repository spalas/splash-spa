import React, { useState } from 'react';

import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle, handleUserRegister, handleUserLogin
    } = useAuth();


    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')



    const handleEmail = e => {
        setEmail(e.target.value)
    };
    const handlePassword = e => {
        setPassword(e.target.value)
    };
    console.log(email, password)

    const handleRegister = () => {

        handleUserRegister(email, password)
    }
    const handleLogin = () => {

        handleUserLogin(email, password)
    }











    return (
        <div>
            <h2>Please Login</h2>



            <input onChange={handleEmail} className="mb-2" type="email" name="" id="" placeholder="Your mail" />
            <br />

            <input onChange={handlePassword} type="password" name="" id="" placeholder="Your password" />

            <br />

            <button onClick={handleRegister} type="button" className="btn btn-primary me-2 mt-5">Register</button>
            <button onClick={handleLogin} type="button" className="btn btn-primary mt-5">Login</button>
            {/* <button onClick={handleRegister} type="submit">Register</button> */}

            <br />............<br />
            <button onClick={signInUsingGoogle} className="btn btn-dark my-5"> Google Login </button>
        </div>
    );
};

export default Login;