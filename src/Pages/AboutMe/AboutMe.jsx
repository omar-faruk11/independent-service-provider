import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
import omar from  '../../Sheard/image/omar.jpg'

const AboutMe = () => {
    return (
        <div>
            <Header></Header>
            <div className=" container-fluid">
            <div className="row mt-5">
                <div className="col-12 col-md-6 mx-auto" >
                <img className=' rounded-circle mx-auto d-block' width={'200px'} src={omar} alt="" />
                    <h2 className='text-center'> Omar faruk</h2>
                    <p>I hadve big Dream. I want to be a good developer.So I am working very heard.I will learn advenced topics of react. And I will build spacel web aplication. My goal is to bild 10 web Aplication in next 2 mounth. I want to work with a tems. </p>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;