import React, { useState } from 'react';
import './Washing.css'; 
import headlamp from '../image/inside service/headlamp.avif';
import image from '../image/washcar.jpg';

const Headlamp = () => {

    return (
               <div className="main-contant">
    <div className="Interior-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Head lamp</h1>
        </div>
    </div>

               <div className="services-contant">
            <div className="services-contact-form">
            <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Headlamp Restoration</h2>
            <p>Restores yellowed headlamps, saving up to 80% of the cost of replacing them.</p> </div>     
                 <div className="services-contact-image">
                     <img src={headlamp} alt="Car" />
                 </div>
        </div></div>
      
    );
};

export default Headlamp;
