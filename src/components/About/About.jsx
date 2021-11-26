/* eslint-disable react/button-has-type */
import React from 'react';
import './About.css';

const About = () => (
    <div className="about-part">
        <h1 className="head-color text-center pb-5">About Us</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="">
                        <img className="img-fluid" src="./slider/1.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="">
                        <p className="about-p">Medical Zone Center - Rawdha</p>
                        <p className="about-d">
                            Our Cardiology Department renders an extensive range of services for
                            inpatients and outpatients. We have the right medical exper...
                        </p>
                        <button className="btn btn-success">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
