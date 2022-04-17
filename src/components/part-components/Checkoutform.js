import React from 'react';

const Checkoutform = () => {
    return (
        <div className="w-75">
            <form>
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} />
                <input type="email" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="State" style={{ backgroundColor: '#F5F5F5' }} required />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="District" style={{ backgroundColor: '#F5F5F5' }} required />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Address - Road No" style={{ backgroundColor: '#F5F5F5' }} required />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Phone Number" style={{ backgroundColor: '#F5F5F5' }} required />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" type="submit">Order Now</button>
                </div>
            </form>
        </div>
    );
};

export default Checkoutform;