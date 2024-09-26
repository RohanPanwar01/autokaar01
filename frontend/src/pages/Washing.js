import React, { useState } from 'react';
import './Washing.css'; 
import image from '../image/serviceimage/WASHING.jpg';
import image1 from '../image/washcar.jpg';
import exteriorwash from '../image/inside service/exterior wash.webp';
import interiorcleaning from '../image/inside service/interior cleaning.webp';

const Washing = () => {

    return (
               <div className="main-contant">
    <div className="wash-head"
    style={{ 
                    backgroundImage: `url(${image1})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Foam Wash</h1> </div>
    </div>
                {/* <div className="services-contant">
            <div className="services-contact-image">
                <img src={image} alt="Car" />
            </div>
             <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Washing</h2>
             <ul style={{ fontFamily: 'Mulish, sans-serif' }}> 
                 <li>It is always advisable to use Autocare shampoo with neutral pH</li> 
               <li>Car soap cuts through dirt with ease</li> 
               <li>Soap reveals true beauty of cars by stripping away residue</li> 
               <li>Multi surface cleaner for both interior and exterior application</li> 
               <li>Ideal for surfaces like paint, alloy, wheel and glass </li> </ul>
               </div>               
        </div> */}
        <div className="midd-contant">
            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Exterior Wash</h2>
                <p>Content to be provided</p>

                {/* <p>Our Exterior Wash service ensures that your vehicle's exterior is sparkling clean. We use high-quality cleaning products and professional techniques to remove dirt,
                     grime, and road salt, leaving your car looking polished and protected. This service includes a thorough wash, wax, and tire shine, enhancing your vehicle's
                      appearance while preserving its paint and finish.</p>  */} </div>     
                 <div className="midd-contact-image">
                     <img src={exteriorwash} alt="Car" />
                 </div></div>
               <div className="services-contant">
            <div className="services-contact-image">
                <img src={interiorcleaning} alt="Car" />
            </div>

            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Interior Cleaning</h2>
                <p>Content to be provided</p>
                {/* <p>Our Interior Cleaning service focuses on creating a spotless, comfortable, and hygienic environment 
                    inside your car. We clean and sanitize all interior surfaces, including the dashboard, seats, floor
                     mats, and door panels. Whether your interior is fabric or leather, we carefully remove dirt, stains, 
                     and odors, leaving your car fresh and inviting. We also provide vacuuming and detailing to give your 
                     vehicle's interior a renewed look.</p> */}
               </div>
               </div>
               </div>
      
    );
};

export default Washing;
