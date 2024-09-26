import React, { useState } from 'react';
import './Washing.css'; 
import ceramic1 from '../image/inside service/ceramic-coating 1.webp'
import ceramic2 from '../image/inside service/ceramic coating00.webp'
import ceramic3 from '../image/inside service/ceramic 2.jpg'
import image from '../image/washcar.jpg';

const Creamiccoating= () => {

    return (
               <div className="main-contant">
    <div className="creami-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div ><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Creamic coating</h1>
        </div>
    </div>
    <div className="creami-contant">
            <div className="creami-contact-image">
                <img src={ceramic1} alt="Car" />
            </div>
    <div className="creami-contact-form">
    <p>A liquid protective layer (6-8 microns thick) applied to vehicles that solidifies upon air exposure, creating an invisible barrier against damage.
    </p>
     <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Ceramic & Graphene Coatings</h2>
           <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Available in two variants:</h3>

         <li>	Maintenance (requires booster coat)</li>
         <li>	Without maintenance
         </li>
         <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Benefits:</h3>
<li>	Adds a glossy, mirror-like finish.
</li>
<li>	Protects against hairline scratches.
</li>

<li>	Prevents hard water stains.
</li>

<li>	Shields from harmful UV rays.
</li>

<li>	Hydrophobic, making cleaning easier.
</li>

<li>	Creates a non-sticky surface.
</li>
<h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Types:</h3>
<li>	9H Ceramic Coating (20-30 microns)
</li>
<li>	10H Ceramic Coating (30-40 microns)
</li>

<li>	Graphene Coating (1-5 microns) – Although thinner, it offers superior hardness compared to 9H and 10H.
</li>
<h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Note:
</h3>
<li>9H and 10H refer to the hardness level, measured on the Mohs scale.</li>
<li>Specific coatings are available for body, glass, and alloy wheels.
</li>
</div></div>

{/* 
               <div className="midd-contant">
            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>3 Year Package</h2>
                <p>We use state of the art equipment for car cleaning, seat upholstery, and deep cleaning, besides detailing services. 
                    Try our services once and we are sure you will stay with us for good. We use only ecofriendly materials so that 
                    your car’s expensive metallic paint is not damaged in the slightest way.

</p>  </div>     
                 <div className="midd-contact-image">
                     <img src={ceramic2} alt="Car" />
                 </div></div>
      */}

               {/* <div className="creami-contant">
            <div className="creami-contact-image">
                <img src={ceramic3} alt="Car" />
            </div>

            <div className="creami-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>5 Year Package</h2>
                <p>We use state of the art equipment for car cleaning, seat upholstery, and deep cleaning, besides detailing services. 
                    Try our services once and we are sure you will stay with us for good. We use only ecofriendly materials so that 
                    your car’s expensive metallic paint is not damaged in the slightest way.</p>
               </div>
        </div> */}
        </div>
      
    );
};

export default Creamiccoating;
