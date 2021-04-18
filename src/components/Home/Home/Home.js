import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <main id="header">
            <Header></Header>
            <About></About>
            <WhyUs></WhyUs>
            <Services></Services>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </main>
    );
};

export default Home;