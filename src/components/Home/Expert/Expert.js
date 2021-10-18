import React from 'react';

const Expert = ({ expert }) => {
    const { img, name, mail, job } = expert
    return (
        <div className="col-md-4 col-12">

            <img className=" w-100% img-fluid" src={img} alt="" />
            <h2> Name: {name}</h2>
            <h4> Email: {mail}</h4>
            <p>Designation: {job}</p>

        </div>
    );
};

export default Expert;