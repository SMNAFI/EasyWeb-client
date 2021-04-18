import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div>
            <div className="footer-container text-white">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a className="text-decoration-none text-secondary" href="#about">About</a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-secondary" href="#services">Services</a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-secondary" href="/">Admin</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Stay Connected</h5>
                        <p>admin@easyweb.com</p>
                        <p>01548 245 457</p>
                        <div>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>#285, 5th floor</p>
                        <p>Savar, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <p className="text-center mt-5">
                    <small>Copyright &copy;{new Date().getFullYear()} Easy Web. All rights reserved.</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;