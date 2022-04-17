import React, { useContext } from 'react';
import { ServicesContext } from '../../App';
import Service from './Service';

const Services = () => {
    const { services } = useContext(ServicesContext)
    return (
        <div className="container w-75 mx-auto" id="services">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 border">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}>
                        </Service>)
                }
            </div>
        </div>
    );
};

export default Services;