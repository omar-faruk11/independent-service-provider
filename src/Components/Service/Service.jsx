import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate()
    const {picture,name,price,details} = service;
    return (
        <div className='col'>
            <div className="p-3 shadow rounded">
            <img className='img-fluid rounded' src={picture} alt="" />
            <h4 className=' mt-2'>{name}</h4>
            <p className='mb-2'>{details.slice(0,150)}</p>
            <h5 className='mt-0 mb-3'>Price: ${price} per picture.</h5>
            <button onClick={()=> navigate('/chackout')} className=' btn btn-danger text-uppercase'>Chack Out</button>
            </div>
        </div>
    );
};

export default Service;