import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faCommentDots, faPlus, faUserPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data)
            });
    }, [loggedInUser.email])

    return (
        <div className="sidebar-container py-5 px-4">
            <div className="mb-5">
                <Link to='/' className="sidebar-header">
                    <h3>Easy Web</h3>
                </Link>
            </div>
            <ul className="list-unstyled">
                {
                    !isAdmin &&
                    <div>
                        <li>
                            <Link className="sidebar-link" to="/dashboard"><FontAwesomeIcon icon={faShoppingCart} /> Book</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/myOrders"><FontAwesomeIcon icon={faBars} /> My Orders</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/review"><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                        </li>
                    </div>
                }
                {
                    isAdmin &&
                    <div>
                        <li>
                            <Link className="sidebar-link" to="/admin/allOrders"><FontAwesomeIcon icon={faBars} /> Order List</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/admin/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/admin/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/admin/manage"><FontAwesomeIcon icon={faThLarge} /> Manage Services</Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;