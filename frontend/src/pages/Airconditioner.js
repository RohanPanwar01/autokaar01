import React, { useState } from 'react';
import './Washing.css'; 
import Acvent from '../image/inside service/ac vent.webp';
import Accoli from '../image/inside service/ac coli.jpg';
import image from '../image/washcar.jpg';

const Airconditioner= () => {

    return (
               <div className="main-contant">
    <div className="Interior-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Air conditioner</h1>
        </div>
    </div>
               <div className="services-contant">
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>AC Care
</h2>
                <p>Includes cleaning AC ducts and coils to reduce allergens and bacteria, improve air quality, eliminate odors, and enhance AC performance, which can affect fuel efficiency.</p> 
                

                 </div>     
                 <div className="services-contact-image">
                     <img src={Acvent} alt="Car" />
                 </div></div>
     

               <div className="midd-contant">
            <div className="midd-contact-image">
                <img src={Accoli} alt="Car" />
            </div>

            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>AC Evaporator Coil Cleaning</h2>
                <p>Content to be provided</p>

                {/* <p>Due to external environmental conditions mostly all evaporator coils starts choking
                     after 20,000-25,000 kms. due to dirt/dust/water, which deposits on the surface and 
                     keep filing up the pores which may affect AC Cooling and Air Flow. With choked Coil 
                     below mentioned complaints can be raised by customers

<li>Improper Air Flow</li>
<li>Insufficient Cooling</li>
<li>Bad Smell during AC working</li></p> */}
               </div>
        </div>
        </div>
      
    );
};

export default Airconditioner;
