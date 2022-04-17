import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div className=' w-100 h-100'>
            <div className=" d-flex align-content-center justify-content-center">
                <Form className=' p-3 shadow rounded-3 ' style={{margin:"10% 0 0 0"}}>
                    <h3 className=' text-center fw-bold mb-4'>Log In </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LogIn;