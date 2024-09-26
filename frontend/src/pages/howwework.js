import React, { useState } from 'react';
import './howwework.css'; 
import image1 from '../image/washcar.jpg';

const HOWWEWORK = () => {

    return (
               <div className="How-contant">
    <div className="How-head"
    style={{ 
                    backgroundImage: `url(${image1})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How To Book a Service! </h1>
        </div>
    </div>

            <div className="How-contact-form">
              
             <p  style={{ fontFamily: '"Chakra Petch", sans-serif' ,fontSize:'25px'}}> At AutoKaar, we've streamlined the process of booking car care services to make it as simple and convenient as  possible. Here’s how it works:</p>
               <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> <li>Explore and Choose </li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>Visit our website and browse through a curated selection of top-rated car detailing studios, economical car wash centers, and local
  detailing experts in your area. Or else use our filters to find the service that best suits your needs.</p>

  <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Select Your Budget</li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>Select the range within which you would like to invest on any specific Service. Our website will show you 
    the list of service providers who will offer the services within your budget.</p>

    <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Select Your Service Provider</li></h2><p style={{ fontFamily: 'Mulish, sans-serif' }}>Once you’ve found the right provider, whether it's a full detail, exterior wash, interior clean, or any
     other specialized care, confirm and process for the next selection.</p>

     <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Book with Ease</li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>Choose a time frame that works for you from the available slots and confirm your booking with just one click. No need for 
    lengthy forms. Our Team will coordinate further.</p>
    <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Pick-up and Drop</li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>On the Day of Service our Driver will arrive at the pick-up point and take your vehicle, post 
completetion of Doccumentation, Take out all the important Files, Wallet, Cash and other important
 docs from the vehcile and handover the vehicle. </p>
 
 <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Share OTP</li></h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}> You also need to share OTP to initiate the process, post which you can track your vehicle and time for any specific service. </p>

 <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Payment Made Simple</li></h2>
<p style={{ fontFamily: 'Mulish, sans-serif' }}> Pay securely online through our platform. We offer multiple payment options to make the process 
even more convenient.</p>

<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Relax and Enjoy</li></h2>
<p style={{ fontFamily: 'Mulish, sans-serif' }}>On the day of your appointment, your chosen service provider will take care of your vehicle,
 leaving it looking and feeling like new. Track your service in real-time and receive updates right from our website.</p>

 <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}><li>Rate and Review</li></h2>
 <p style={{ fontFamily: 'Mulish, sans-serif' }}>After your service, share your experience with our community by rating and reviewing the provider.
     Your feedback helps us maintain the highest quality standards on our platform.</p>

     <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> <li>History Check</li></h2>
 <p style={{ fontFamily: 'Mulish, sans-serif' }}> You can also check history of your Payments and services which you've opted in the past.</p>

     <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> <li>Registered Office</li></h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>26, Deepak Society, Chuna Bhatti, Kolar Road, Bhopal-462042, M.P.</p>
               </div>
        </div>
      
    );
};

export default HOWWEWORK;
