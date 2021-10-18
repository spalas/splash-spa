import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div id="services" className="container">
            <div className='f4-font'><h1>Our services</h1>
                <hr />
                <h2>Experience the art of caring</h2>
            </div>

            <div className="service-container">




                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }


            </div>
        </div>
    );
};

export default Services;