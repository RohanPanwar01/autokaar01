import React, { useState } from 'react';
import './Washing.css'; 
import carinterior1 from '../image/inside service/car-interior1.webp';
import carinterior2 from '../image/inside service/car interior 2.jpg';
import carinterior3 from '../image/inside service/car interiro3.jpg';
import deepcleaning from '../image/inside service/deep clwaning.jpg';
import image from '../image/washcar.jpg';

const Interiortreatment= () => {

    return (
               <div className="main-contant">
    <div className="Interior-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Interior Enrichment</h1>
        </div>
    </div>
    
           <div className="services-contant">
            <div className="services-contact-image">
                <img src={carinterior1} alt="Car" />
            </div>

            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Interior Care</h2>
                <p>Maintaining and sanitizing the vehicle's interior, including vacuuming carpets and seats, wiping down surfaces (dashboard, door panels), and cleaning windows. It also covers the console, door trims, and roof.</p>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Benefits:</h3>
<li>	Enhances appearance.
</li>
<li>	Improves comfort.</li>
<li>	Preserves resale value.</li>
<li>	Promotes hygiene.

</li>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Types:</h3>
<li>	Liquid-based: Cost-effective and effective on stains.</li>
<li>	Foam-based: Thick foam, ideal for leather surfaces.</li>
<li>	Anti-microbial cleaning: For fungal protection.</li>

               </div></div>

               <div className="midd-contant">
            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Premium Foaming Enrichment</h2>
                <p>Content to be provided</p>

                {/* <p>Usually it is suggested to Clean Leather Seats with Foaming based Product to protect it from hard Chemicals to keep it looking new and Shining.</p> */}
                 </div>      
                 <div className="midd-contact-image">
                     <img src={carinterior2} alt="Car" />
                 </div></div>

               <div className="services-contant">
            <div className="services-contact-image">
                <img src={carinterior3} alt="Car" />
            </div>

            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Antimicrobial Treatment</h2>
                <p>Content to be provided</p>
                {/* <p>A treatment which lands in our premium range and helps to clean germs and Bacteria which takes place 
                    because of Hard Drinks, Soft Drinks, and Food Items(Snacks). This product is an ultimate solution for 
                    Fungus inside the Vehicle</p> */}
               </div>
        </div>
        <div className="midd-contant">
            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Deep Cleaning</h2>
                <p>Content to be provided</p>

                {/* <p>Post removal of Seats, Clean the Carpet area and then vacuuming, Cleaning is done properly</p>  */}
                 </div>     
                 <div className="midd-contact-image">
                     <img src={deepcleaning} alt="Car" />
                 </div></div>
        
        </div>
      
    );
};

export default Interiortreatment;
