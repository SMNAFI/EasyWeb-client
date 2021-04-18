import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Manage.css';
import { UserContext } from '../../../App';

const Manage = () => {
    const [loggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-25463.herokuapp.com/getAllServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    const handleDelete = (e, id) => {
        const event = e.currentTarget.parentNode.parentNode;
        fetch('https://calm-ravine-25463.herokuapp.com/deleteService?id=' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.style.display = 'none';
                    alert('Service deleted successfully.')
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <div className="pb-5 d-flex justify-content-between">
                    <h3>Manage Services</h3>
                    <h5 className="text-secondary">{loggedInUser.userName}</h5>
                </div>
                <table className="table table-striped table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Service Name</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) =>
                                <tr key={index}>
                                    <td>{service.title}</td>
                                    <td>${service.price}</td>
                                    <td>
                                        <button className="delete-btn" onClick={e => handleDelete(e, service._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;