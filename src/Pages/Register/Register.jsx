import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInWithSocal from '../../Components/SigninWithSocal/SignInWithSocal';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Header from '../../Sheard/Header/Header';
const Register = () => {
    const [passwordError , setPasswordError] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        const displayName = event.target.name.value;
        if (password !== confirmPassword) {
            return setPasswordError('your password not match')
        }
        if (email && password) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });
        }
    }
    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
          }
     },[user])

    return (
        <div>
            <Header></Header>
            <div className=" container-fluid row ">
            <div className='col-12 col-md-3 mx-auto p-3 shadow rounded-3 mt-5'>
                <h3 className=' text-center fw-bold mb-4'>Register</h3>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Name" name='name' />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email" name='email' />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConframPassword">
                        <Form.Control type="password" placeholder="Confirm Password" name='confirmpassword' />
                    </Form.Group>
                    {
                        error ? <p>{error.message}</p> : ''
                       
                    }
                    {
                         passwordError? <p className=' text-danger text-uppercase'>{passwordError}</p> : ''
                    }
                    <Button className='w-100' variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='text-center mt-2 mb-0'>Already Have An Account? <span onClick={() => navigate('/login')} className=' text-primary pointer-event' role="button">Login</span></p>
                <SignInWithSocal></SignInWithSocal>
            </div>
        </div>
        </div>
    );
};

export default Register;