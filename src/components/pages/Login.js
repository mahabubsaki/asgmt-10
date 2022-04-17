import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { FiGithub } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../utilities/Loading';
import '../../styles/LoginSingup.css'

const Login = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [initUser, initLoading] = useAuthState(auth);
    useEffect(() => {
        if (!user) {
            if (initUser) {
                navigate('/')
            }
        }
    }, [initUser, navigate, user])
    const [myError, setMyError] = useState('')
    useEffect(() => {
        if (error) {
            setMyError(error.message)
        }
        else {
            setMyError('')
        }
    }, [error])
    useEffect(() => {
        if (myError) {
            toast.error(myError, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [myError])
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])
    if (loading) {
        return <Loading></Loading>;
    }
    if (initLoading) {
        return <Loading></Loading>;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div style={{ height: "600px" }} className="d-flex justify-content-center align-items-center">
            <div className="login-singup mx-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center my-3">Login</h1>
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setPassword(e.target.value)} />
                    <button className="d-block mx-auto btn btn-primary" type="submit">Login</button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                    <h5 className="mx-2" style={{ position: 'relative', top: '2.5px' }}>or</h5>
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                </div>
                <p className="text-center">New User ? <Link to="/register" className='text-decoration-none text-info'>Sign Up</Link> Now!</p>
                <button className="d-block w-50 mx-auto btn btn-light border border-primary mb-2">
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Continue With Google</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2">
                    <FiGithub></FiGithub>
                    <span className='ms-2'>Continue With Github</span>
                </button>
            </div>
        </div>
    );
};

export default Login;