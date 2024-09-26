
import './Washing.css'; 
import image from '../image/washcar.jpg';
import image1 from '../image/serviceimage/anti rust.jpg';
import Silencer from '../image/inside service/silencer.jpg';

const ANTIRUSTPROTECTION = () => {

    return (
               <div className="main-contant">
    <div className="Wind-head"
    style={{ 
                    backgroundImage: `url(${image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50% 30%'}}>
        <div><h1 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>ANTI RUST PROTECTION</h1>
        </div>
    </div>
                <div className="services-contant">
            <div className="services-contact-image">
                <img src={image1} alt="Car" />
            </div>
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Anti Rust Protection</h2>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Underbody/Anti-Rust Coating:</h3>
                <p>A protective layer applied to the vehicle's underside to prevent rust and corrosion.</p>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Benefits:</h3>
                <li>	Protects against salt, moisture, and road debris.</li>
                <li>	Reduces noise and vibrations.</li>
                <li>	Extends vehicle lifespan and lowers maintenance costs.</li>               </div>
        </div>
        <div className="midd-contant">
            <div className="midd-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Silencer Coating</h2>
                <p>A protective layer for the exhaust system (muffler, tailpipe, catalytic converter), preventing rust, heat damage, and leaks. It reduces maintenance costs and increases the lifespan.</p>
               </div>
               <div className="midd-contact-image">
                <img src={Silencer} alt="Car" />
            </div>
        </div>
        <div className="services-contant">
            <div className="services-contact-image">
                <img src={image1} alt="Car" />
            </div>
            <div className="services-contact-form">
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Internal Panel protection</h2>
                <p>Content to be provided</p>
                {/* <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Underbody/Anti-Rust Coating:</h3>
                <p>A protective layer applied to the vehicle's underside to prevent rust and corrosion.</p>
                <h3 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Benefits:</h3>
                <li>	Protects against salt, moisture, and road debris.</li>
                <li>	Reduces noise and vibrations.</li>
                <li>	Extends vehicle lifespan and lowers maintenance costs.</li>           */}
                     </div>
        </div>
        </div>
      
    );
};

export default ANTIRUSTPROTECTION;
