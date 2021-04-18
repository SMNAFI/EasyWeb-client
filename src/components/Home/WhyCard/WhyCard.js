import React from 'react';
import './WhyCard.css';

const WhyCard = ({ data }) => {
    const { title, description, image } = data;
    return (
        <div className="col-lg-4 col-md-6 wc-container mb-4">
            <div className="card p-5 text-center wc-card">
                <div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h3 className="my-3">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyCard;