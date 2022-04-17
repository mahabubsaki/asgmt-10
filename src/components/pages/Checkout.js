import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../../App';

const Checkout = () => {
    const { services } = useContext(ServicesContext)
    const { id } = useParams()
    return (
        <div>
            <h1>{services.length}</h1>
            <h1>detal of {id}</h1>
        </div>
    );
};

export default Checkout;