import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className=' container'>
            <h2 className=' text-center mb-3 mt-5'>My Blogs</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className="col">
                    <p className="fw-bold">1. Difference between authorization and authentication</p>
                    <p className='text-muted'>Authorization is use usually comes after authenitication and  authentication is use usually the frst stepof secuity sccess control.Authorization grants or denies pemissions to the user do something.But authentication verifies te user's identify. authorization is not visible by the user. But Authentication is visible by the user.</p>
                </div>
                <div className="col">
                    <p className="fw-bold">2. Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p className='text-muted'> We are using firebase because Firebase manages all data real-time in the database. So the exchanhe of data to and fom the databbase is easy and quick. Back4App,Parse,AWS Amplify,Backendless etc the other options to implement authentication.</p>
                </div>
                <div className="col">
                <p className="fw-bold">3. What other services does firebase provide other than authentication</p>
                <p className='text-muted'>Without authentication firebase provide many services like..<br />
                1. Cloud Firestore. <br />
                2. Cloud Functions. <br />
                3. Hosting.<br />
                4. Cloud Storage.<br />
                5.Google Analytics.<br />
                6. Cloud Messaging.<br />
                7. Dynamic Links

                </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blogs;