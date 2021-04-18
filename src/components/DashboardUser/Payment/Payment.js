import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IePQqHRrrc5IdUEDXzqFLIkugLyFRuhVjqUl06aKYoYXgmuK8chyrisK07feiBW5t1I6eKi35puPhvHWnJNvAHj004YotJPet');

const Payment = ({ processCheckOut }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm processCheckOut={processCheckOut}></SimpleCardForm>
        </Elements>
    );
};

export default Payment;