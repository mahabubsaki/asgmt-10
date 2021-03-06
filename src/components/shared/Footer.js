import React from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa'
import '../../styles/Footer.css'
const Footer = () => {
    return (
        <>
            <div className="w-100 bg-dark text-white py-4 d-flex justify-content-center">
                <div>
                    <h1 className="d-flex align-items-center"><FaHandHoldingMedical></FaHandHoldingMedical>
                        <span className="ms-2"><span style={{ color: "orange" }}>Medi</span><span style={{ color: "LightGray" }}>Space</span></span></h1>
                    <h3>&copy; {new Date().getFullYear()} copyright : Lisa Nolan </h3>
                </div>
            </div>
            <div className="footer-container bg-dark text-white">
                <div>
                    <p>About Me</p>
                    <p>Read My Blogs</p>
                    <p>Sign Up To Deliver</p>
                    <p>Add Your Appointment</p>
                </div>
                <div>
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View all services</p>
                </div>
            </div>
        </>
    );
};

export default Footer;