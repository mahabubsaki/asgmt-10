import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ item }) => {
    const navigate = useNavigate()
    const { service, img, id, price, description } = item || {};
    return (
        <div className="col mb-2">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{service}</h3>
                    <h2 className="card-title">Price : ${price}</h2>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-success" onClick={() => navigate(`checkout/${id}`)}>Book Now!</button>
                </div>
            </div>
        </div>
    );
};

export default Service;