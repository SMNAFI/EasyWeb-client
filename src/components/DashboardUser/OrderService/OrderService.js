import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';

const OrderService = ({ serviceName }) => {
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [serviceInfo, setServiceInfo] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        fetch('https://calm-ravine-25463.herokuapp.com/getService?id=' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServiceInfo(data);
            })
    }, [id])

    const onSubmit = data => {
        console.log(data);
        setOrderData(data);
    };

    const processCheckOut = paymentId => {
        const orderDetails = { ...orderData, paymentId, time: new Date(), status: 'pending', price: serviceInfo.price }
        console.log(orderDetails);
        console.log(paymentId);

        fetch('https://calm-ravine-25463.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your order placed successfully');
            })
    }

    return (
        <div className="p-5">
            <div className="pb-5 d-flex justify-content-between">
                <h3>Order</h3>
                <h5 className="text-secondary">{loggedInUser.userName}</h5>
            </div>
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-3 form-group">
                            <input type="text" name="name" ref={register({ required: true })} placeholder="Name" className="form-control" defaultValue={loggedInUser.userName} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="my-3 form-group">
                            <input type="email" name="email" ref={register({ required: true })} placeholder="Email" className="form-control" defaultValue={loggedInUser.email} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="my-3 form-group">
                            <input type="text" name="serviceName" ref={register({ required: true })} className="form-control" value={serviceInfo.title} readonly />
                        </div>
                        <div className="form-group text-right" style={{ display: orderData ? 'none' : 'block' }}>
                            <button type="submit" className="btn-brand">Send</button>
                        </div>
                    </form>
                </div>

                <div style={{ display: orderData ? 'block' : 'none' }}>
                    <p className="mb-5">Your service charge will be <strong>${serviceInfo.price}</strong></p>
                    <Payment processCheckOut={processCheckOut}></Payment>
                </div>
            </div>
        </div>
    );
};

export default OrderService;