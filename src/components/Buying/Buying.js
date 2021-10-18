import React from 'react';
import { useParams } from 'react-router';

const Buying = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>this buying :{serviceId}</h1>
        </div>
    );
};

export default Buying;