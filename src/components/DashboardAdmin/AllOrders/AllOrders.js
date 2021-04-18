import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AllOrders.css';

const AllOrders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-25463.herokuapp.com/getAllOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, []);

    const handleChange = (e, id) => {
        fetch('https://calm-ravine-25463.herokuapp.com/updateStatus', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id: id, status: e.target.value })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <div className="pb-5 d-flex justify-content-between">
                    <h3>Order List</h3>
                    <h5 className="text-secondary">{loggedInUser.userName}</h5>
                </div>
                <table className="table table-striped table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Pay With</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={index}>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.serviceName}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <select class="select-status" defaultValue={order.status} onChange={e => { handleChange(e, order._id) }}>
                                            <option value="pending">Pending</option>
                                            <option value="onGoing">On Going</option>
                                            <option value="done">Done</option>
                                        </select>
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

export default AllOrders;