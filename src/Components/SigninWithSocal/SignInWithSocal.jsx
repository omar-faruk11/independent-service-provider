import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignInWithSocal = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const handleGoogleSignIn =() =>{
        signInWithGoogle()
    }
    const handleFacebookSignIn = () =>{
        signInWithFacebook()
    } 
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