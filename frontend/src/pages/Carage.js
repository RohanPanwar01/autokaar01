import React, { useState, useRef } from "react";
import carageImage from '../image/Carage.jpeg';
import { Link } from 'react-router-dom'; 
import "./Carage.css";


const CarInfo = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [carInfo, setCarInfo] = useState("");
  const carAgeRef = useRef(null);

  const getCarInfo = () => {
    const carAge = carAgeRef.current.value;
    if (carAge === "") {
      setShowButtons(false);
      return;
    }
    setShowButtons(true);
  };

  const submitTasks = () => {
    setShowButtons(false);
    carAgeRef.current.value = "";
    setCarInfo(""); 
  };

  const handleCarInfoChange = (e) => {
    setCarInfo(e.target.value);
  };

  return (
  <>
  <div className="Car-age">
    <div className="car-info-container">
      <div className="car-info-image">
        <img src={carageImage} alt="Car" />
      </div>
      <div className="car-info-content">
        <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}> Understand Your Car Care Needs </h2>
        <p>Enter your car's age to find out what maintenance it needs</p>
        <div className="input-group" style={{ marginRight: "20px" }}>
          <input 
            type="number" 
            ref={carAgeRef} 
            placeholder="Enter car age in years" 
            min="0"
            max="50" 
            value={carInfo}
            onChange={handleCarInfoChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getCarInfo();
              }
            }}
          />
          <button onClick={getCarInfo}>Get Info</button>
        </div>
        
        {showButtons && (
          <div className="TreatmentCategory">
  {carAgeRef.current?.value >= 1 && (
    <div className="TreatmentCategory">
      <div className="oNe">
        <div className="treatmentpartone">
          <Link to='/paintprotectionfilm'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}> Paint Protection Film</button> 
          </Link>
          <Link to='/ceramiccoating'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>Ceramic Coating</button>
          </Link>
          <Link to='/interiortreatment'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>Interior Cleaning</button>
          </Link>
          <Link to='/exteriortreatment'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>Exterior Rejuvenation</button>
          </Link>
        </div>

        <div className="treatmentparttwo">
          <Link to='/airconditioner'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>AC Care</button>
          </Link>
          <Link to='/antirustprotection'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>Antirust Coatings</button>
          </Link>
          <Link to='/engineprotection'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>Engine Protection</button>
          </Link>
          <Link to='/windshieldrestoration'>
            <button onClick={submitTasks} style={{ marginLeft: "5px" }}>Windshield Restoration</button>
          </Link>
        </div>
      </div>
        <Link to='/headlamprestoration'>
          <button onClick={submitTasks} style={{ marginLeft: "10px" }}>Headlamp Restoration</button>
        </Link>
      </div>
  )}
</div>
        )}
        <div id="carInfoResult">
        </div>
      </div>
    </div>
    <div className="Car-channel-partner">
    <h1 className="channel-heading">
  Enter your <span className="white-text">"Car Age"</span> to know Recommendations..!
</h1>
    </div>
    </div>
    </>

  );
};

export default CarInfo;