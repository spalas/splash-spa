import React from 'react';

const Service = ({ service }) => {
    const={ photo, name, }

    return (
        <div>
            <img src={service.photo} alt="" />
        </div>
    );
};

export default Service;