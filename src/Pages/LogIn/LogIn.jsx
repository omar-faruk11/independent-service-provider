import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SignInWithSocal from '../../Components/SigninWithSocal/SignInWithSocal';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmali] = useState()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, passwordUpdateerror] = useSendPasswordResetEmail(
        auth
      );
      const handleLogInFormSubmit = (event) =>{
          event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password)
      }
      const handleResetPassword = async () =>{
        await sendPasswordResetEmail(email);
          toast('Sent email');
      }
      if(user){
          console.log(user);
          navigate('/')
      }
    return (
        <div className="container-fluid row">
            <div className='col-8 col-md-3 mx-auto p-3 shadow rounded-3 mt-5'>
                <Form onSubmit={handleLogInFormSubmit} className='mb-2'>
                    <h3 className=' text-center fw-bold mb-4'>Log In </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={(e)=>setEmali(e.target.value)} type="email" placeholder="Enter email" name='email' />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Submit
                    </Button>
                    <p className='mt-2 mb-0'>Not Register yet?
                        <span onClick={() => navigate('/register')} className=' text-primary pointer-event' role="button"> Create an Account</span></p>
                    <p className=' mt-2 mb-0'>Forget Password?
                        <span onClick={handleResetPassword} className=' text-primary pointer-event' role="button">Reset Password</span></p>
                        
                        <ToastContainer/>
                </Form>
                <SignInWithSocal></SignInWithSocal>
            </div>
        </div>
    );
};

export default LogIn;