import React, { useEffect, useState } from 'react';
import TeamCards from '../DoctorCard/DoctorCard';
import './Team.css';

const Doctor = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then((res) => res.json())
            .then((data) => setDoctor(data));
    }, []);
    return (
        <div className="container">
            <h1 className="text-center">Our Doctors</h1>
            <div className="row">
                {doctors.slice(0, 6).map((team) => (
                    <TeamCards
                        key={team.key}
                        team={team}
                        // handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Doctor;
