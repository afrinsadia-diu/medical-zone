/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const { name, description, img, id, price } = props.service;
    return (
        <div className="col-md-4 mt-3">
            <div className="service-card-d">
                {/* <Card.Img src={img} className="img-fluid service-img"/> */}
                <div className="service-img">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <Card.Body>
                    <Card.Title className="ser-h1">{name}</Card.Title>
                    <Card.Title className="ser-h1">${price}</Card.Title>
                    <div className="services-Card-Hover">
                        <Card.Text>{description}</Card.Text>
                        <Link exact to={`/service/${id}`}>
                            <Button className="btn btn-success">Read More</Button>
                        </Link>
                    </div>
                </Card.Body>
            </div>
        </div>
    );
};

export default ServiceCard;
