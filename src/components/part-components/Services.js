import React, { useContext } from 'react';
import { ServicesContext } from '../../App';
import Service from './Service';

const Services = () => {
    let allServices;
    const { services } = useContext(ServicesContext)
    if (services.length > 0) {
        allServices = services
    }
    else {
        allServices = JSON.parse(localStorage.getItem('allServices'))
    }
    return (
        <div className="container w-75 mx-auto" id="services">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                {
                    allServices?.map(service =>
                        <Service
                            key={service.id}
                            item={service}>
                        </Service>)
                }
            </div>
        </div>
    );
};

export default Services;