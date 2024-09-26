import React, { useState } from 'react';
import './Washing.css'; 
import ppf from '../image/inside service/PPf.jpg';
import ppf2 from '../image/inside service/ppf2.jpg'
import image from '../image/washcar.jpg';

const Paintprotectionfilm = () => {

    return (
               <div className="main-contant">
    <div className="Wind-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>PAINT PROTECTION FILM</h1>
        </div>
    </div>
               <div className="midd-contant">
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Paint Protection Film (PPF)</h2>
                <p>A thin, durable layer (150-200 microns thick, about 20-25 times thicker than a ceramic coating) applied to a car's painted surface to protect the paint from damage.</p>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Benefits :</h3>
                <li>	Shields against scratches, scuffs, and swirl marks</li>
<li>	Protects from rock chips, road debris, and bug splatters</li>
<li>	Maintains the paint's gloss and shine</li>
<li>	Easy to clean and maintain</li>
<li>	Provides UV protection</li>
<h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Types :</h3>
<li>	PVC (Polyvinyl Chloride) PPF: Most affordable option
</li>
<li>	TPH (Thermoplastic Poly Hydrocarbon) PPF: Mid-range, without self-healing properties
</li>
<li>	TPU (Thermoplastic Polyurethane) PPF: Premium, most effective option with excellent self-healing, non-yellowing, and elastic properties
</li>
<p>PPF comes in glossy, matte, black, and colored finishes
</p>


</div>     
                 <div className="services-contact-image">
                     <img src={ppf2} alt="Car" />
                 </div>
        </div></div>
      
    );
};

export default Paintprotectionfilm;
