import React from 'react';

const NotMatch = () => {
    return (
        <div className=' d-flex justify-content-center align-content-center'>
            <div>
                <h1 className='fw-bolder text-center' style={{fontSize:"220px"}}>404</h1>
                <h2 className='fw-bolder text-danger'>This page is outside of the Universe</h2>
                <p className=' text-center'>The page you are trying to access doesn’t exist or has been moved. <br />Try going back to our homepage.</p>
            </div>
        </div>
    );
};

export default NotMatch;