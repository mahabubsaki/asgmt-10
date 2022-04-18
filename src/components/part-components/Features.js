import React from 'react';
import '../../styles/Features.css'
import { FaStethoscope, FaAmbulance } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'
import { GiMedicalDrip } from 'react-icons/gi'
const Features = () => {
    return (
        <>
            <h1 className="text-center">Features and Timing</h1>
            <div className="container w-100 border features-container">
                <div className="row row-cols-2 text-center features">
                    <div>
                        <h3><FaStethoscope></FaStethoscope></h3>
                        <h3>24 Hour Support</h3>
                        <p>You will get 24 hour support once you book an appointment!</p>
                    </div>
                    <div>
                        <h3><BiPlusMedical></BiPlusMedical></h3>
                        <h3>Premium Healthcare</h3>
                        <p>You will get one of the best experiance of being consulted by our doctor</p>
                    </div>
                    <div>
                        <h3><FaAmbulance></FaAmbulance></h3>
                        <h3>Emergency Service</h3>
                        <p>We also provide emergency services if it's very urgent for your health</p>
                    </div>
                    <div>
                        <h3><GiMedicalDrip></GiMedicalDrip></h3>
                        <h3>Medical Conseling</h3>
                        <p>You can discuss with the doctor and will be listened carefully</p>
                    </div>
                </div>
                <div className="timing justify-content-center d-flex">
                    <div>
                        <h1>Working Hours</h1>
                        <h3>Monday-Wednesday</h3>
                        <h5>10.00 am - 5.00 pm</h5>
                        <h3>Thursday-Saturday</h3>
                        <h5>10.00 am - 2.00 pm</h5>
                        <h3>Sunday Off day</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;