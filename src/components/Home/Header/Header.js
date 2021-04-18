import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <section>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </section>
    );
};

export default Header;