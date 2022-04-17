import React from 'react';
import { toast } from 'react-toastify';

const Checkoutform = ({ user }) => {
    const { email, emailVerified, displayName } = user || {}
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thanks for ordering,We will call you as soon as possible", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        e.target.reset();
    }
    return (
        <div className="w-75">
            <form onSubmit={handleSubmit}>
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} readOnly value={displayName ? displayName : 'Stranger'} />
                <input type="email" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} readOnly value={email} />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="State" style={{ backgroundColor: '#F5F5F5' }} required />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="District" style={{ backgroundColor: '#F5F5F5' }} required />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Address - Road No" style={{ backgroundColor: '#F5F5F5' }} required />
                <input type="text" className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Phone Number" style={{ backgroundColor: '#F5F5F5' }} required />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" type="submit" disabled={!emailVerified}>Order Now</button>
                </div>
                <p className="text-danger text-center">{!emailVerified && "Please verify your email for order"}</p>
            </form>
        </div>
    );
};

export default Checkoutform;