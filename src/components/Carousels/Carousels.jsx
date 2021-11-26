/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousels.css';

const Carousels = () => (
    <div className="carousels-part">
        <Carousel>
            <Carousel.Item interval={5000}>
                <img className="d-block w-100" src="./slider/1.jpg" alt="First slide" />
                <Carousel.Caption>
                    <h3>Specialized Pediatric Care At Medical Zone Hospital</h3>
                    <p>Specialized Pediatric Care At Medical Zone Hospital</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block w-100" src="./slider/2.jpg" alt="Second slide" />
                <Carousel.Caption>
                    <h3>Patient Team </h3>
                    <p>Baby Of Ms. ASRAR MOHSEN Nationality- Mrs. Asrar Mohsen</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./slider/3.jpg" alt="Third slide" />
                <Carousel.Caption>
                    <h3>Dr. Moamen's Publication</h3>
                    <p>A 25-year-old woman with an unremarkable medical history presented </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default Carousels;
