import React from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderService from '../OrderService/OrderService';
import './Order.css';


const Order = () => {
    const { _id } = useParams();
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div>
                    <OrderService serviceName={_id} />
                </div>
            </div>
        </div>
    );
};

export default Order;