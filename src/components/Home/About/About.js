import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container d-flex align-items-center" id="about">
            <div>
                <h1>Web Design Company You Can <span className="brand-color">Trust</span></h1>
                <p>We offer professional web design services at affordable rates to help your business attract more visitors!</p>
                <div className="text-width">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores facere incidunt? Atque aliquid quis vel ex reprehenderit illum eligendi, saepe temporibus nulla nam dolore, numquam impedit doloremque, minus eius!</p>
                </div>
                <div className="text-width">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores facere incidunt? Atque aliquid quis vel ex reprehenderit illum eligendi, saepe temporibus nulla nam dolore, numquam impedit doloremque, minus eius!</p>
                </div>
            </div>
        </div>
    );
};

export default About;