/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Card } from 'react-bootstrap';
import './DoctorCard.css';

const DoctorCard = (props) => {
    const { name, description, img } = props.team;
    return (
        <div className="col-md-4 mt-3">
            {/* variant="top" */}
            <Card.Img src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="teams-Card-Hover">
                    <Card.Text>{description}</Card.Text>
                    <div className="hs_profile_social">
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa fa-skype" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-success">Read More</button>
                </div>
            </Card.Body>
        </div>
    );
};

export default DoctorCard;
