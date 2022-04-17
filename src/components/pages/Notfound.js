import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigate = useNavigate()
    return (
        <div style={{ height: "500px" }} className="d-flex justify-content-center align-items-center w-100">
            <div className="text-center">
                <h1>404 not found</h1>
                <h1>Are you lost? :(</h1>
                <h1>You are looking for a page that doesn't exist</h1>
                <button onClick={() => navigate('/')} className="btn btn-primary">Go To Home</button>
            </div>
        </div>
    );
};

export default Notfound;