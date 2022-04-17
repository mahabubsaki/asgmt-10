import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css'
import Services from '../part-components/Services';


const Home = () => {
    return (
        <div>
            <div className="banner mb-5">
                <div className="w-75 text-primary">
                    <h1 className='fw-bolder'>Dr. Jack Nolan</h1>
                    <h5 className='fw-bolder'>Jack Nolan's Clinic Welcomes you</h5>
                    <h5 className='fw-bolder'>Hope you are fine and best wishes for services</h5>
                    <button className="btn btn-info"><a href="#services" style={{ textDecoration: 'none', color: "black" }}>Check Services</a></button>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;