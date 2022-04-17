import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { FiGithub } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import '../../styles/LoginSingup.css'
const Register = () => {
    // setting all the states and calling hooks
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [myError, setMyError] = useState('')
    const [initUser, initLoading] = useAuthState(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    // toastsettings variable declared for reuse
    const toastSettings = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    // This useeffect set to block the user from going register page in case he is logged in
    useEffect(() => {
        if (!user) {
            if (initUser) {
                navigate('/')
            }
        }
    }, [initUser, navigate, user])
    // this useeffect will keep eye on hook error and if that error changes it will set into myerror state
    useEffect(() => {
        if (error) {
            setMyError(error.message)
        }
        else {
            setMyError('')
        }
    }, [error])
    // This useeffect set for keeping eye on error and show it when there is an error
    // I only made toastSettings for reuse that's why not giving it on dependency
    useEffect(() => {
        if (myError) {
            if (myError.includes("email-already-in-use")) {
                toast.error("Sorry ! Given email already in use", toastSettings)
            }
            else {
                toast.error("Something went wrong!", toastSettings)
            }
        }
    }, [myError])
    // this event will call in case of form submit and will go some manual checking of password then user will be created
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length < 8) {
            toast.error('Password can not be less than 8 characters', toastSettings);
            return
        }
        if (password !== confirm) {
            toast.error('Confirm password did not match', toastSettings);
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    // this useeffect keep eye on user creation if user is created first sent a email verification and notifying it through toast, then updating the name from given from and navigating into home page
    useEffect(() => {
        sendEmailVerification()
        updateProfile({ displayName: name, photoURL: '' })
        if (user) {
            toast.success(`Sent an verification mail to ${user.user.email}, Please verify it for additional purchase`, toastSettings);
            navigate('/');
        }
    }, [user, navigate, name, updateProfile, sendEmailVerification])
    if (loading) {
        return <Loading></Loading>;
    }
    if (initLoading) {
        return <Loading></Loading>;
    }
    return (
        <div style={{ height: "600px" }} className="d-flex justify-content-center align-items-center">
            <div className="login-singup mx-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center my-3">Sign Up</h1>
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setName(e.target.value)} />
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Confirm Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setConfirm(e.target.value)} />
                    <button className="d-block mx-auto btn btn-primary" type='submit'>Sign Up</button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                    <h5 className="mx-2" style={{ position: 'relative', top: '2.5px' }}>or</h5>
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                </div>
                <p className="text-center">Already have an account? <Link to="/login" className='text-decoration-none text-info'>Log in</Link> Now!</p>
                <button className="d-block w-50 mx-auto btn btn-light border border-primary mb-2">
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Sign Up With Google</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2">
                    <FiGithub></FiGithub>
                    <span className='ms-2'>Sign Up With Github</span>
                </button>
            </div>
        </div>
    );
};

export default Register;