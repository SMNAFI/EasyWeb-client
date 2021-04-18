import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { title, price, description, _id } = service;
    const history = useHistory();
    const handleServiceClick = id => {
        history.push(`services/${id}`);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="service-card p-5 text-white">
                <h3>{title}</h3>
                <h1>${price}</h1>
                <p>{description}</p>
                <div className="text-center">
                    <button className="btn-service" onClick={() => handleServiceClick(_id)}>Select Plan</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;