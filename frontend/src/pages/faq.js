import React from 'react';
import './howwework.css'; 
import image1 from '../image/washcar.jpg';

function FAQPage() {
  return (
    <div className="How-contant">
       <div className="How-head"
    style={{ 
                    backgroundImage: `url(${image1})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Frequently Asked Questions</h1>
        </div>
    </div>
    <div className="How-contact-form"> 
    <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>What problem is AutoKaar helping me solve ?</h3>
                 <p  style={{ fontFamily: '"Chakra Petch", sans-serif' }}>AutoKaar is an all-in-one platform that offer customers with a wide network of professional car detailing studios in nearby location, helping to solve Problem like : 
             <ul className='faqpoint'style={{ fontFamily: 'Mulish, sans-serif' }}>
               <li>Quality Assurance against given Price</li>
              <li> Predefined Prices</li>
              <li>Reduced Waiting time</li> 
              <li> Product Usage</li>
              <li> Conflict Resolution </li>
              <li> Transparency across every processes</li>
              </ul>
              </p>             
               <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> How does AutoKaar work? </h2>

 <p style={{ fontFamily: 'Mulish, sans-serif' }}>AutoKaar aggregates car detailing studios and their services into one platform. You simply enter your location, browse available services, compare prices, and book an appointment online. AutoKaar ensures a seamless booking experience and helps you find the right studio based on your preferences.
 </p>
 <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>What types of services can I book through AutoKaar?
 </h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>You can book a wide range of car detailing services, including:
<ul className='faqpoint'style={{ fontFamily: 'Mulish, sans-serif' }}>
<li>Exterior and interior cleaning</li>
<li>Washing</li>
<li>Ceramic coating</li>
<li>Paint protection film (PPF)</li>
<li>Upholstery cleaning</li>
<li>Engine detailing</li>
<li>Headlight restoration  and Many More</li>
</ul></p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How do I find car detailing studios near me?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Simply enter your location or allow AutoKaar to access your location. Our platform will show you a list of nearby detailing studios, along with their ratings, reviews, and service prices. You can filter by service type, price range, or customer rating.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How do I book an appointment?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Enter your budget, and our platform will display tailored results. Choose a service provider by location or service type, filtering by exterior, interior, or full car detailing. Compare prices, read reviews, and select the best fit. Book your appointment, confirm details, and enjoy secure payment. A driver will pick up your car only after you share OTP with him.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Can I cancel or reschedule my appointment?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Yes, you can cancel or reschedule your appointment through your AutoKaar account. Just go to your bookings and follow the prompts to modify or cancel the appointment, subject to the studio’s cancellation policy.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How do I pay for the services?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>AutoKaar offers multiple payment options, including credit/debit cards, mobile wallets, and online banking, UPI. You can pay securely through the platform during the booking process.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Does AutoKaar offer any discounts or promotions?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Yes, AutoKaar frequently offers exclusive discounts and promotions in collaboration with our partner studios. Keep an eye on our promotions section or subscribe to our newsletter to stay updated.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How are the detailing studios rated on AutoKaar?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Studios on AutoKaar are rated based on customer reviews and service quality. After completing a service, customers are encouraged to leave reviews and rate their experience, which helps others make informed choices.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> Can I trust the quality of services offered by the detailing studios?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Yes, we partner only with verified and professional car detailing studios. Each studio undergoes a strict vetting process to ensure they meet our quality and customer service standards.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Is there a mobile app for AutoKaar?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Curetly we are taking orders through our Website only. But Yes, AutoKaar will make it available for both iOS and Android. You can easily browse, book, and manage your car detailing appointments on the go.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>What if I encounter an issue with my booking or service?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>If you face any issues with your booking or the service, you can contact AutoKaar customer support through the platform or app. We will work to resolve your issue promptly by coordinating with the service provider.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Do I need an account to use AutoKaar?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>Yes, creating an account helps you track your bookings, manage appointments, and receive notifications about exclusive deals. Signing up is quick and free.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How does AutoKaar ensure fair pricing?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>AutoKaar allows you to compare prices across multiple studios. We encourage transparency, and pricing details are listed upfront so you can make an informed decision before booking.
</p>
<h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>How can I become a partner studio on AutoKaar?
</h2>

<p style={{ fontFamily: 'Mulish, sans-serif' }}>If you're interested in listing your car detailing studio on AutoKaar, you can apply through our website. Our team will review your application and reach out to discuss partnership opportunities.
</p>
    </div>
    </div>
  );
}

export default FAQPage;