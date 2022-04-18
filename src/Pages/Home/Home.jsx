import React, { useEffect, useState } from 'react';
import Service from '../../Components/Service/Service';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <div className=" mt-mb-5 pt-5">
                            <div>
                                <p className="display-5 fw-bold">
                                    Dream Photography
                                </p>
                                <p>Digital Photography. you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className='btn btn-danger text-uppercase'>Start here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-1">
                        <img className=' img-fluid' src="https://img.freepik.com/free-vector/cartoon-parents-kid-dog-posing-photo-studio_74855-20063.jpg?size=626&ext=jpg&ga=GA1.1.816967961.1650037131" alt="" />
                    </div>
                </div>
            </div>
            <div className=' container'>
                <h2 className='text-center mt-5 mb-3'>My Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;