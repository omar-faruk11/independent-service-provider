import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SignInWithSocal from '../../Components/SigninWithSocal/SignInWithSocal';
import auth from '../../firebase.init';

const LogIn = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleLogInFormSubmit = (event) =>{
          event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password)
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
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Submit
                    </Button>
                    <p className='text-center mt-2 mb-0'>Not Register yet?
                        <span onClick={() => navigate('/register')} className=' text-primary pointer-event' role="button"> Create an Account</span></p>
                </Form>
                <SignInWithSocal></SignInWithSocal>
            </div>
        </div>
    );
};

export default LogIn;