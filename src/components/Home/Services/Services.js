import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-25463.herokuapp.com/getAllServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <section className="service-container" id="services">
            <div className="text-center">
                <h1>
                    Our <span className="brand-color">Services</span>
                </h1>
                <p>We offer a few standard packages as well as custom projects. <br /> Our web design company specializes in the professional creation of unique sites.</p>
            </div>
            <div className="row pt-5">
                {
                    services.map((service, index) => <ServiceCard service={service} key={index}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;