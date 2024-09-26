import React, { useState } from 'react';
import './howwework.css'; 
import image1 from '../image/washcar.jpg';

const TermsnCondition = () => {

    return (
               <div className="How-contant">
    <div className="How-head"
    style={{ 
                    backgroundImage: `url(${image1})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Terms & Condition</h1>
        </div>
    </div>

    <div className="How-contact-form">
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How We Work</h3>
              
             <p  style={{ fontFamily: '"Chakra Petch", sans-serif' }}> At AutoKaar, we've streamlined the process of booking car care services to make it as simple and convenient as  possible. Here’s how it works:</p>
               <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> <li>Explore and Choose </li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>Visit our website and browse through a curated selection of top-rated car detailing studios, economical car wash centers, and local
  detailing experts in your area. Or else use our filters to find the service that best suits your needs.</p>

  <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Select Your Budget</li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>Select the range within which you would like to invest on any specific Service. Our website will show you 
    the list of service providers who will offer the services within your budget.</p>

    <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Select Your Service Provider</li></h2><p>Once you’ve found the right provider, whether it's a full detail, exterior wash, interior clean, or any
     other specialized care, confirm and process for the next selection.</p>

     <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Book with Ease</li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>Choose a time frame that works for you from the available slots and confirm your booking with just one click. No need for 
    lengthy forms. Our Team will coordinate further.</p>
    <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Pick-up and Drop</li></h2>
    </div>
        </div>
      
    );
};

export default TermsnCondition;
