import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://calm-ravine-25463.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Services Added Successfully.');
            })
    };
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <div className="pb-5 d-flex justify-content-between">
                    <h3>Add Service</h3>
                    <h5 className="text-secondary">{loggedInUser.userName}</h5>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-3 form-group">
                            <input type="text" name="title" ref={register({ required: true })} placeholder="Title" className="form-control" />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="my-3 form-group">
                            <input type="text" name="price" ref={register({ required: true })} placeholder="Price" className="form-control" />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="my-3 form-group">
                            <textarea name="description" cols="30" rows="5" ref={register({ required: true })} placeholder="Description" className="form-control" />
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group text-right">
                            <button type="submit" className="btn-brand">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;