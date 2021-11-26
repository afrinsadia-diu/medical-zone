import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./medical-zone.json')
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Services us</h1>
            <div className="row">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        // handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
