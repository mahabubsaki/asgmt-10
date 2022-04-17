import React from 'react';

const Loading = ({ children }) => {
    return (
        <div style={{ height: "500px" }} className="d-flex justify-content-center align-items-center flex-column">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>{children ? children : "Loading..."}</p>
        </div>
    );
};

export default Loading;