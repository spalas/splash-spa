import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, detail, photo } = service


    return (
        <div className="service">
            <img src={photo} alt="" />
            <h5>Price : {price}</h5>
            <h3>Name: {name}</h3>
            <p>{detail.slice(0, 100)}</p>
            <Link to={`/buying/${id}`}>
                <button type="button" class="btn btn-primary mb-2">Buy now</button>
            </Link>


        </div>
    );
};

export default Service;