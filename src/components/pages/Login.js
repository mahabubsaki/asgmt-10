import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { FiGithub } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../utilities/Loading';
import '../../styles/LoginSingup.css'

const Login = () => {
    // setting all the states and calling hooks
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [myError, setMyError] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [initUser, initLoading] = useAuthState(auth);
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(auth);
    let navigate = useNavigate();
    let location = useLocation();
    // remembering from where user came to login page and redirecting them back to that page
    let from = location.state?.from?.pathname || "/";
    // toast settings declared in a variable for reuse
    const toastSettings = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    // This useeffect set to block the user from going login page in case he is logged in
    useEffect(() => {
        if (!user && !user1 && !user2) {
            if (initUser) {
                navigate('/')
            }
        }
    }, [initUser, navigate, user, user1, user2])

    // this useeffect will keep eye on hook error and if that error changes it will set into myerror state
    useEffect(() => {
        if (error) {
            setMyError(error?.message)
        }
        else if (error1) {
            setMyError(error1?.message)
        }
        else if (error2) {
            setMyError(error2?.message)
        }
        else if (error3) {
            setMyError(error3?.message)
        }
        else {
            setMyError('')
        }
    }, [error, error1, error2, error3])
    // This useeffect set for keeping eye on error and show it when there is an error
    useEffect(() => {
        if (myError) {
            if (myError.includes('user-not-found')) {
                toast.error('Sorry! user not found with given email', toastSettings)
            }
            else if (myError.includes('wrong-password')) {
                toast.error('Sorry! wrong password given', toastSettings)
            }
            else {
                toast.error('Something went wrong', toastSettings)
            }
        }
    }, [myError])
    // giving success message when user logged in
    useEffect(() => {
        if (user || user1 || user2) {
            toast.success("Successfully logged in 🎉", toastSettings)
            navigate(from, { replace: true });
        }
    }, [user, navigate, from, user1, user2])
    // trying to create user on submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    // handling forget password
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        if (error3?.message) {
            toast.success('Forget password link has been reset,Please check your mail', toastSettings)
        }
    }
    // I only made toastSettings for reuse that's why not giving it on dependency
    if (loading || loading1 || loading2 || initLoading) {
        return <Loading></Loading>;
    }
    if (sending) {
        return <Loading>
            Sending...
        </Loading>
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
                <p className="text-primary text-center" style={{ cursor: 'pointer' }} onClick={handleResetPassword}>Forget Password?</p>
                <p className="text-center">New User ? <Link to="/register" className='text-decoration-none text-info'>Sign Up</Link> Now!</p>
                <button className="d-block w-50 mx-auto btn btn-light border border-primary mb-2" onClick={() => signInWithGoogle()}>
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Continue With Google</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2" onClick={() => signInWithGithub()}>
                    <FiGithub></FiGithub>
                    <span className='ms-2'>Continue With Github</span>
                </button>
            </div>
        </div>
    );
};

export default Login;