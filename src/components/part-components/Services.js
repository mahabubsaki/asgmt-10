import React, { useContext } from 'react';
import { ServicesContext } from '../../App';

const Services = () => {
    const { services } = useContext(ServicesContext)
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
            </div>
        </div>
    );
};

export default Services;