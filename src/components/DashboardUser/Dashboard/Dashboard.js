import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Card from '../Card/Card';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-25463.herokuapp.com/getAllServices')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <div className="pb-5 d-flex justify-content-between">
                    <h3>Services</h3>
                    <h5 className="text-secondary">{loggedInUser.userName}</h5>
                </div>
                <div>
                    <div className="row">
                        {
                            services.map((service, index) => <Card service={service} key={index}></Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;