import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home"><span className="nav-icon">Easy Web</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-secondary" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to="/admin/allOrders">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to="/login">
                                {
                                    loggedInUser.email ? `${loggedInUser.userName}` : 'Login'
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;