import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-25463.herokuapp.com/getAllReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <section className="testimonial-container" id="testimonials">
            <div className="text-center">
                <h1>
                    What Our <span className="brand-color">Clients</span> Say
                </h1>
            </div>
            <div className="row mt-5">
                {
                    reviews.map((review, index) => <TestimonialCard review={review} key={index}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;