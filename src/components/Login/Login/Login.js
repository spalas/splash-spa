import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <Link><button className="btn btn-dark"> Google Login </button></Link>
        </div>
    );
};

export default Login;