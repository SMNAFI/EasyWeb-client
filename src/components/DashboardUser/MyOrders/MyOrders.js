import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MyOrders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getUserOrders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            });
    }, [loggedInUser.email])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <div className="pb-5 d-flex justify-content-between">
                    <h3>My Order List</h3>
                    <h5 className="text-secondary">{loggedInUser.userName}</h5>
                </div>
                <table className="table table-striped table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Service Name</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={index}>
                                    <td>{order.serviceName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;