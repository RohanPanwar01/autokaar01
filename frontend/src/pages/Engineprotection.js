import React from 'react';
import './Washing.css'; 
import engine1 from '../image/inside service/engine-car.jpg';
import engine2 from '../image/serviceimage/ENGINE PROTECTION.jpg';
import engine3 from '../image/inside service/Rodent Repellent.webp';
import image from '../image/washcar.jpg';

const Engineprotection = () => {
    return (
        <div className="main-engine">
    <div className="engine-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Engine protection</h1>
        </div>
    </div>

    <div className="services-contant">
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Engine Care</h2>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Rat Protection Treatment:</h3>
                <p>Provides up to 80% protection from rats, typically effective for 6 months.</p>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Engine Polish:</h3>

                <p>A polish applied to maintain the engine’s shine and appearance.</p>  </div>     
                 <div className="services-contact-image">
                     <img src={engine1} alt="Car" />
                 </div></div>
    
           <div className="midd-contant">
            <div className="midd-contact-image">
                <img src={engine2} alt="Car" />
            </div>

            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Engine Coating (Engine Lacquer)</h2>
                <p>Protects the engine from heat and dust, keeping it looking new.</p>
                </div></div>

               <div className="services-contant">
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Rodent Repellent</h2>
                <p>Content to be provided</p>

                {/* <p>Rodent Repellent is a smart solution to keep rats and snakes at bay and thus protects from wire cut in
                     side engine compartment. Rodent repellent is workable in all conditions and is 80-85% effective and last 
                     for 5 months. During rainy and winters Snakes and Rats looks for a warm environment to keep their body warm 
                     and thus the best possible and easy available option is engine compartment. So it is important that we do this 
                     treatment in every 6 months. A small protection can keep big expenses at bay.</p>  */} </div>     
                 <div className="services-contact-image">
                     <img src={engine3} alt="Car" />
                 </div>
        </div>
        </div>
      
    );
};

export default Engineprotection;
