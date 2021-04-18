import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <section className="bg-brand header-container d-flex align-items-center">
            <div>
                <h1 className="text-white">Next Generation <br /> Web <span className="brand-color">Solution</span> </h1>
                <p className="text-brand">Our web design company helps you build your <br /> unique website easily.</p>
            </div>
        </section>
    );
};

export default MainHeader;