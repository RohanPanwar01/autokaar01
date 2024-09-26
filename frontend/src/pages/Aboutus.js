import React, { useState } from 'react';
import './howwework.css'; 
import image1 from '../image/washcar.jpg';

const Aboutus = () => {

    return (
               <div className="How-contant">
    <div className="How-head"
    style={{ 
                    backgroundImage: `url(${image1})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>About us </h1>
        </div>
    </div>


            <div className="How-contact-form">
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Who We Are:</h3>
              
             <p> At AutoKaar, we are revolutionizing the way you care for your vehicle. We bring 
                together car detailing studios, economical car wash centers, and local detailing 
                studios onto one seamless platform. Our mission is to make car care accessible and
                 hassle-free, allowing you to book the best services with just one click. Whether you need a 
                premium detailing job or a quick wash, AutoKaar connects you with trusted service 
                providers, ensuring your car gets the attention it deserves. We are your one-stop 
                solution for all your car care needs, designed with convenience, quality, and customer satisfactionin mind.</p>
                            </div>
        </div>
      
    );
};

export default Aboutus;
