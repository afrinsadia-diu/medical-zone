import React from 'react';
import About from '../About/About';
import Carousels from '../Carousels/Carousels';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import './Home.css';

const Home = () => (
    <div>
        <Carousels />
        <About />
        <Services />
        <Doctor />
        <Contact />
    </div>
);

export default Home;
