import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../../App';
import '../../styles/Checkout.css'
import Checkoutform from '../part-components/Checkoutform';
import Notfound from './Notfound';

const Checkout = () => {
    const { id } = useParams()
    let allServices;
    const { services } = useContext(ServicesContext)
    if (services.length > 0) {
        allServices = services
    }
    else {
        allServices = JSON.parse(localStorage.getItem('allServices'))
    }
    const singleService = allServices.find(item => item.id === id)
    if (!singleService) {
        return <Notfound></Notfound>
    }
    const { service, price, description, img } = singleService
    return (
        <div className="checkout-container">
            <div className="d-flex justify-content-center align-items-center left-div">
                <div className="text-center">
                    <img src={img} alt="" className="img-fluid rounded-3" />
                    <h1>{service}</h1>
                    <p>{description}</p>
                    <h1>Price: ${price}</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center right-div">
                <Checkoutform></Checkoutform>
            </div>
        </div>
    );
};

export default Checkout;