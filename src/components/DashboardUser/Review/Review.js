import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const reviewData = { ...data, image: loggedInUser.photoURL };
        fetch('https://calm-ravine-25463.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Thank you for you review.');
            })
    };

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="p-5">
                    <div className="pb-5 d-flex justify-content-between">
                        <h3>Review</h3>
                        <h5 className="text-secondary">{loggedInUser.userName}</h5>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-3 form-group">
                                <input type="text" name="name" ref={register({ required: true })} placeholder="Your Name" className="form-control" defaultValue={loggedInUser.userName} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="my-3 form-group">
                                <input type="text" name="designation" ref={register({ required: true })} placeholder="Company's Name, Designation" className="form-control" />
                                {errors.designation && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="my-3 form-group">
                                <textarea name="description" ref={register({ required: true })} cols="30" rows="5" className="form-control" placeholder="Description" />
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn-brand">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;