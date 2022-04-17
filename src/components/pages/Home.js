import React from 'react';
import '../../styles/Home.css'
import Services from '../part-components/Services';


const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="w-75 text-primary">
                    <h1 className='fw-bolder'>Dr. Jack Nolan</h1>
                    <h4 className='fw-bolder'>Jack Nolan's Clinic Welcomes you</h4>
                    <h4 className='fw-bolder'>Hope you are fine and best wishes for services</h4>
                    <button class="btn btn-info">Check Services</button>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;