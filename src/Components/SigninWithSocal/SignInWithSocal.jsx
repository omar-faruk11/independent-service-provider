import React, { useEffect } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App'
import auth from '../../firebase.init';

const SignInWithSocal = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
    }
    const handleFacebookSignIn = () =>{
        signInWithFacebook()
    } 
    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
          }
     },[user])
    return (
        <div>
            <div className=' d-flex justify-content-center align-items-center mb-2'>
                <div className='line'></div>
                <span className=' mx-2 mb-1'>Or</span>
                <div className='line'></div>
            </div>
            <div onClick={handleGoogleSignIn} className=" p-1  rounded border border-dark mb-2 text-center bg-light" role="button">
                <img src="https://img.icons8.com/fluency/25/000000/google-logo.png" alt="" />
                <span className='ms-2'>Sign in with Google</span>
            </div>
            <div onClick={handleFacebookSignIn} className=" p-1  rounded border border-dark mb-2 text-center bg-light" role="button">
                <img src="https://img.icons8.com/fluency/25/000000/facebook-new.png" alt="" />
                <span className='ms-2'>Sign in with Facebook</span>
            </div>
        </div>
    );
};

export default SignInWithSocal;