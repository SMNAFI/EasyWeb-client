import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Admin added successfully.');
            })
    };

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <div className="pb-5 d-flex justify-content-between">
                    <h3>Make Admin</h3>
                    <h5 className="text-secondary">{loggedInUser.userName}</h5>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-3 form-group">
                            <input type="email" name="adminEmail" ref={register({ required: true })} placeholder="Email" className="form-control" />
                            {errors.adminEmail && <span className="text-danger">This field is required</span>}
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

export default MakeAdmin;