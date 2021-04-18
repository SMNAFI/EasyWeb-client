import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ review }) => {
    const { name, designation, description, image } = review;
    return (
        <div className="col-md-4 mb-4">
            <div className="p-5 testimonial-card text-center card">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="my-3">
                    <h3>{name}</h3>
                    <h5>{designation}</h5>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;