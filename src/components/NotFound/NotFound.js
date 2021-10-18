import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../images/404page.png'

const NotFound = () => {
    return (
        <div>

            <img src={Notfound} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;