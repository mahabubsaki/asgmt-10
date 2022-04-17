import React from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="w-100 bg-dark text-white py-4 d-flex justify-content-center">
            <div>
                <h1 className="d-flex align-items-center"><FaHandHoldingMedical></FaHandHoldingMedical>
                    <span className="ms-2"><span style={{ color: "orange" }}>Medi</span><span style={{ color: "LightGray" }}>Space</span></span></h1>
                <h3>&copy; {new Date().getFullYear()} copyright : Lisa Nolan </h3>
            </div>
        </div>
    );
};

export default Footer;