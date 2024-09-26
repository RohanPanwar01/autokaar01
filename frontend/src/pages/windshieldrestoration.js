import React, { useState } from 'react';
import './Washing.css'; 
import wind  from '../image/inside service/windshield.webp';
import image from '../image/washcar.jpg';

const Windshieldrestoration = () => {

    return (
        <div className="main-contant">
        <div className="Wind-head"
        style={{ 
                        backgroundImage: `url(${image})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: '50% 30%'}}>
            <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Windshield restoration</h1>
            </div>
        </div>
    
                   <div className="services-contant">
                <div className="services-contact-form">
                    <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Windshield restoration</h2>
                    <p>Removes minor scratches, swirls, and imperfections from windshields, restoring clarity and improving safety, enhancing resale value.</p> 
                   
                    </div>     
                     <div className="services-contact-image">
                         <img src={wind } alt="Car" />
                     </div>
            </div></div>
          
        );
    };
    
    export default Windshieldrestoration;
    