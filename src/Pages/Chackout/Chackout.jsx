import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../../Sheard/Header/Header';

const Chackout = () => {
    const handlechackoutsubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const name = event.target.name.value;
        const addres = event.target.addres.value;
        const phone = event.target.phone.value;
        const chagori = event.target.chagori.value;
        const pices = event.target.pices.value;
        console.log(email,name,addres,phone,chagori,pices);
        toast.success('order complite', {
            position: "top-center",
            autoClose: 110,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <div>
            <Header></Header>
            <div className=" container-fluid row ">
                <div className='col-12 col-md-4 mx-auto p-3 shadow rounded-3 mt-5'>
                    <h3 className=' text-center fw-bold mb-4'>Chack Out</h3>
                    <Form onSubmit={handlechackoutsubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name='email' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Your name" name='name' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAdddress">
                            <Form.Control type="text" placeholder="Your address" name='addres'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicphone">
                            <Form.Control type="number" placeholder="Your phone number" name='phone' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicChagori">
                            <Form.Control type="text" placeholder="Which service do your want?" name='chagori' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPicture">
                            <Form.Control type="number" placeholder="How many picture you want?" name='pices' />
                        </Form.Group>
                        <Button className='w-100 text-d' variant="danger" type="submit">
                            Submit
                        </Button>
                        <ToastContainer />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Chackout;