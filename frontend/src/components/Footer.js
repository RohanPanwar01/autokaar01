import React from 'react';
import './Footer.css';  
import logo from '../image/LOGO-03.png';  
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faFacebook, faLinkedin,faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  const [showMessage, setShowMessage] = React.useState(false);
  return React.createElement(
    'div',
    { className: 'footer', style: { position: 'relative' } },
    React.createElement(
      'div',
      { className: 'footer-column-logo' },
      React.createElement(
        'a',
        { href: '/' },
        React.createElement('img', {
          src: logo,
          alt: 'Logo',
          style: { width: '90px', height: 'auto' },
          onMouseEnter: () => setShowMessage(true),
          onMouseLeave: () => setShowMessage(false),
        }),
        showMessage && React.createElement(
          'span',
          {
            style: {
              marginLeft: '10px',
              position: 'absolute',
              top: '0',
              left: '60px',
              background: '#161616',
              padding: '5px',
              color: 'gray',
              fontSize:'12px',
            }
          },
          'Click here to go back to our Homepage'
        )
      ),
      React.createElement('p', { className: 'ee', style: { fontFamily: 'Mulish, sans-serif', marginTop: '-5px' } }, 
        'Every service is rigorously screened and constantly rated to ensure you get the best service.'
      ),
    ),    
    React.createElement('div', { className: 'footer-column-about'},
      React.createElement('h3', { className: 'footer-title', style: { fontFamily: '"Chakra Petch", sans-serif' } }, 'ABOUT'),
      React.createElement('ul', null,
        React.createElement('li', { style: { fontFamily: 'Mulish, sans-serif' } },
        React.createElement(Link, { to: '/about' }, 'About us')),
        React.createElement('li', null, React.createElement(Link, { to: '/about' }, 'Our team')),
        React.createElement('li', null, React.createElement(Link, { to: '/faq' }, 'FAQ')),
        React.createElement('li', null, React.createElement(Link, { to: '/howwework' }, 'How To Book a Service!')),
      )
    ),
    React.createElement('div', { className: 'footer-column-policy' },
      React.createElement('h3', { className: 'footer-title', style: { fontFamily: '"Chakra Petch", sans-serif' } }, 'POLICY'),
      React.createElement('div', { className: 'footer-policy',  style: { fontFamily: 'Mulish, sans-serif' }},
        React.createElement('ul', null,
          React.createElement('li', null, 
            React.createElement(Link, { to: '/termsnondition' }, 'Terms & Condition')
          ),
          React.createElement('li', null, 
            React.createElement(Link, { to: '/privacypolicy' }, 'Privacy Policy')
          ),
          React.createElement('li', null, 
            React.createElement(Link, { to: '/cookiespolicy' }, 'Cookies Policy')
          )
        )
      )
    ),
    React.createElement('div', { className: 'footer-column-followus' },
      React.createElement('h3', { className: 'footer-title', style: { fontFamily: '"Chakra Petch", sans-serif' } }, 'SUPPORT'),
      React.createElement('div', { className: 'footer-policy', style: { fontFamily: 'Mulish, sans-serif' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' } },
          React.createElement(FontAwesomeIcon, { icon: faPhone }),
          React.createElement('a', { className: 'phone', href: 'tel:+919981040082', style: { fontFamily: 'Mulish, sans-serif' } }, '+919981040082')
        ),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' } },
          React.createElement(FontAwesomeIcon, { icon: faEnvelope }),
          React.createElement('a', { className: 'gmail', href: 'mailto:autokaar@gmail.com', style: { fontFamily: 'Mulish, sans-serif' } }, 'autokaar@gmail.com')
        ),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' } },
          React.createElement(FontAwesomeIcon, { icon: faClock }),
          React.createElement('p', { className: 'Time', style: { fontFamily: 'Mulish, sans-serif' } }, 'Timing 8:00AM to 8:00PM')
        )        
      )
    ),
        React.createElement('div', { className: 'footer-column-contact' },
      React.createElement('h3', { className: 'footer-title', style: { fontFamily: '"Chakra Petch", sans-serif' } }, 'HOW TO REACH'),
      React.createElement(
        'p',
        { style: { textAlign: 'left', padding: 7, fontFamily: 'Mulish, sans-serif' } },
        'Registered Office',
        React.createElement('br'),
        '26, Deepak Society, Chuna Bhatti',
        React.createElement('br'),
        'Kolar Road, Bhopal-462042, M.P.'),
            <div className='social-iconblock'>
      <a href="https://www.instagram.com/carzcafe.bpl?igsh=MnB6ZnpiMzNxdDVk">  <FontAwesomeIcon icon={faSquareInstagram} size="2x" id="social-icon" style={{ margin: '0 5px' }} /></a>
       <a href="https://www.facebook.com/CarzCafe.bpl?mibextid=rS40aB7S9Ucbxw6v">  <FontAwesomeIcon icon={faFacebook} size="2x" id="social-icon" style={{ margin: '0 5px' }} /></a>
         <a href="https://www.linkedin.com/company/carzcafe/">  <FontAwesomeIcon icon={faLinkedin} size="2x" id="social-icon" style={{ margin: '0 5px' }} /></a>
       <a href="https://x.com/i/flow/login">  <FontAwesomeIcon icon={faXTwitter} size="2x" id="social-icon" style={{ margin: '0 5px' }} /></a>
  </div>
    ),
    React.createElement('div', {
      className: 'footer-buttom',
      style: {
        fontFamily: 'Mulish, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingbottom: '5px',
      }
    },
      React.createElement('p', { style: { fontSize: '10px' } }, 'Copyright ©2024 All Rights Reserved By ',
        React.createElement('a', { href: '#', style: { color: 'blue' } }, 'CarzCafe')
      ),
      React.createElement('p', { style: { fontSize: '10px', fontFamily: '"Chakra Petch", sans-serif' } },
        // 'Proudly created by ',
        // React.createElement('a', { href: 'https://www.4tunerstech.com/', style: { color: 'blue' } }, '4TUNERS TECHNOLOGIES')
      )    
    )
  );
}

export default Footer;