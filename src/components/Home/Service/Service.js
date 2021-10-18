import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, detail, photo } = service


    return (
        <div className="service">
            <img src={photo} alt="" />
            <h5>Price : {price}</h5>
            <h3>Name: {name}</h3>
            <p>{detail.slice(0, 100)}</p>
            <button type="button" class="btn btn-primary mb-2">Buy now</button>

        </div>
    );
};

export default Service;