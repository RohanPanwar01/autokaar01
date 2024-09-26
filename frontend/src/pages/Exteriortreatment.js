import React, { useState } from 'react';
import './Washing.css'; 
import exterior1 from '../image/inside service/ppf2.jpg';
import exterior2 from '../image/inside service/exterior2.jpg';
import exterior3 from '../image/inside service/exterior3.jpg';
import exterior4 from '../image/inside service/exterior4.jpg';
import image from '../image/washcar.jpg';

const Exteriortreatment= () => {

    return (
               <div className="main-contant">
    <div className="Interior-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Exterior streatment</h1>
        </div>
    </div>

    <div className="services-contant">
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Exterior Care</h2>
                <p>Improving the vehicle's exterior appearance through buffing and polishing painted surfaces.</p>  
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Benefits:</h3>
   <li>	Removes dirt, grime, and contaminants.</li>
   <li>	Protects and preserves the surface.</li>
   <li>	Restores paint shine and luster.</li>
   <li>	Increases resale value.</li>
   <li>	Eliminates swirl marks and scratches.</li></div> 

                 <div className="services-contact-image">
                     <img src={exterior1} alt="Car" />
                 </div></div>
    
           <div className="midd-contant"  >
            <div className="midd-contact-image">
                <img src={exterior2} alt="Car" />
            </div>

            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Paint Correction</h2>
                <p>Content to be provided</p>
                {/* <p>Fine Coursen Finishing/Rubbing Compounds are used to treat Swiri marks well.
                     Then AoolynWax to priduct the Fresh Paint from Haemful UV rays and Water Deposition upto Certain Days.</p> */}
               </div></div>

               <div className="services-contant">
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Exterior Enrichment</h2>
                <p>Content to be provided</p>

                {/* <p>This treatment is suggested on vehicles which are older than 6 months and not older than 
                    24 months, depending on the condition of the vehicle. This treatment helps to get rid from 
                    Swirl marks an minute scratches which are affecting paint shine and gloss.</p>
                    <p>Due to outside environmental conditions, painted surface gets damage because of Bird Droppings, 
                        tar-while driving on highway, Tree beat etc</p> */} </div>      
                 <div className="services-contact-image">
                     <img src={exterior3} alt="Car" />
                 </div></div>
     
               <div className="midd-contant">
            <div className="midd-contact-image">
                <img src={exterior4} alt="Car" />
            </div>

            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Surface Correction</h2>
                <p>Content to be provided</p>

                {/* <p>This treatments is suggested on vehicles which completely lost their shine and oxidation 
                    is visible on painted surface. It is suggested that this treatment must be performed on 
                    vehicles which are older than 24 months.</p> */}
               </div>
        </div></div>
      
    );
};

export default Exteriortreatment;
