import React, { useState } from "react";
import "./part.css"; // Import the CSS file for styling
import Pp from '../image/Car2.jpg'; // Import the image
const ResponsiveLayout = () => {
  const [showForm, setShowForm] = useState(true);
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    registeredAddress: '',
    city: '',
    state: '',
    postalCode: '',
    gstn: '',
    otherService: '',
    website: '',
    storeclosed: 'sunday',
    otherBusinessType: '',
    yearEstablished: '',
    numEmployees: '',
    primaryContactName: '',
    primaryContactTitle: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    altContactName: '',
    altContactTitle: '',
    altContactEmail: '',
    altContactPhone: '',
    servicesOffered: '',
    serviceArea: '',
    serviceTurnaround: '',
    operatingHoursWeekdaysStart: '',
    operatingHoursWeekdaysEnd: '',
    operatingHoursWeekendsStart: '',
    operatingHoursWeekendsEnd: '',
    numServiceBays: '',
    equipmentAvailable: '',
    certifications: '',
    partnershipGoals: '',
    termsConditions: '',
    documentsRequired: '',
    additionalComments: '',
    signatoryName: '',
    signatoryTitle: '',
    signature: '',
    date: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    let currentErrors = {};

    // Validate section 1 (Company Information)
    if (currentSection === 2) {
      if (!formData.companyName) currentErrors.companyName = 'Company Name is required';
      if (!formData.businessType) currentErrors.businessType = 'Business Type is required';
      if (!formData.registeredAddress) currentErrors.registeredAddress = 'Address is required';
      if (!formData.city) currentErrors.city = 'City is required';
      if (!formData.state) currentErrors.state = 'State is required';
      if (!formData.postalCode) currentErrors.postalCode = 'Postal Code is required';
      // if (!formData.gstn) currentErrors.gstn = 'GSTN is required';
      // if (!formData.website) currentErrors.website = 'Website is required';
      // if (!formData.yearEstablished) currentErrors.yearEstablished = 'Year Established is required';
      // if (!formData.numEmployees) currentErrors.numEmployees = 'Number of Employees is required';
    }

    // Validate section 2 (Contact Information)
    if (currentSection === 1) {
      if (!formData.primaryContactName) currentErrors.primaryContactName = 'Primary Contact Name is required';
      if (!formData.primaryContactTitle) currentErrors.primaryContactTitle = 'Primary Contact Title is required';
      if (!formData.primaryContactEmail) currentErrors.primaryContactEmail = 'Primary Contact Email is required';
      if (!formData.primaryContactPhone) currentErrors.primaryContactPhone = 'Primary Contact Phone is required';
      if (!formData.altContactName) currentErrors.altContactName = 'Alternative Contact Name is required';
      if (!formData.altContactTitle) currentErrors.altContactTitle = 'Alternative Contact Title is required';
      if (!formData.altContactEmail) currentErrors.altContactEmail = 'Alternative Contact Email is required';
      // if (!formData.altContactPhone) currentErrors.altContactPhone = 'Alternative Contact Phone is required';
    }

    // Validate section 3 (Service Details)
    if (currentSection === 3) {
      if (!formData.servicesOffered) currentErrors.servicesOffered = 'Services Offered is required';
      if (!formData.serviceArea) currentErrors.serviceArea = 'Service Area is required';
      // if (!formData.serviceTurnaround) currentErrors.serviceTurnaround = 'Turnaround Time is required';
      if (!formData.operatingHoursWeekdaysStart) currentErrors.operatingHoursWeekdaysStart = 'Weekday Start Time is required';
      if (!formData.operatingHoursWeekdaysEnd) currentErrors.operatingHoursWeekdaysEnd = 'Weekday End Time is required';
      // if (!formData.operatingHoursWeekendsStart) currentErrors.operatingHoursWeekendsStart = 'Weekend Start Time is required';
      // if (!formData.operatingHoursWeekendsEnd) currentErrors.operatingHoursWeekendsEnd = 'Weekend End Time is required';
      if (!formData.numServiceBays) currentErrors.numServiceBays = 'Number of Service Bays is required';
      // if (!formData.equipmentAvailable) currentErrors.equipmentAvailable = 'Equipment Available is required';
      // if (!formData.certifications) currentErrors.certifications = 'Certifications is required';
    }

    // Validate section 4 (Partnership Goals and Terms)
    if (currentSection === 4) {
      // if (!formData.partnershipGoals) currentErrors.partnershipGoals = 'Partnership Goals are required';
      // if (!formData.additionalComments) currentErrors.additionalComments = 'Additional Comments are required';
    }

    // Check if there are any errors
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors); // Set errors to display
    } else {
      setErrors({}); // Clear errors
      setCurrentSection(currentSection + 1); // Proceed to the next section
    }
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the API with the form data
    fetch('http://localhost:5000/api/partners/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          // Handle successful response
          setIsSubmitted(true);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000); // Hide the success message after 3 seconds

          // Optionally reset form data after successful submission
          setFormData({
            companyName: '',
            businessType: '',
            registeredAddress: '',
            city: '',
            state: '',
            postalCode: '',
            gstn: '',
            website: '',
            yearEstablished: '',
            numEmployees: '',
            otherBusinessType: '',
            primaryContactName: '',
            primaryContactTitle: '',
            primaryContactEmail: '',
            primaryContactPhone: '',
            altContactName: '',
            altContactTitle: '',
            altContactEmail: '',
            altContactPhone: '',
            storeclosed: 'sunday',
            otherService: '',
            servicesOffered: '',
            serviceArea: '',
            serviceTurnaround: '',
            operatingHoursWeekdaysStart: '',
            operatingHoursWeekdaysEnd: '',
            operatingHoursWeekendsStart: '',
            operatingHoursWeekendsEnd: '',
            numServiceBays: '',
            equipmentAvailable: '',
            certifications: '',
            partnershipGoals: '',
            termsConditions: '',
            documentsRequired: '',
            additionalComments: '',
            signatoryName: '',
            signatoryTitle: '',
            signature: '',
            date: ''
          });
          setCurrentSection(1); // Reset to the first section
          // Keep the form visible after submission
          // setShowForm(false); // Optionally hide the form after submission
        } else {
          // Handle errors
          console.error('Form submission failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const displayError = (field) => {
    return errors[field] && <span className="error">{errors[field]}</span>;
  };



  return (
    <div className="container-part">
      <div className="overlay-content">
        <h1>Become a Channel Partner</h1>
        <p>Let's transform the digital channel partner experience together...</p>
        <button onClick={() => setShowForm(true)}>Become a Partner</button>
      </div>
      <img src={Pp} alt="Placeholder" className="image-placeholder" />

      {showForm && (
        <div className="form-container-part">
          <h2>Partner Details</h2>
          {isSubmitted && showSuccessMessage && (
            <p className="success-message-part">Form submitted successfully!</p>
          )}
          <form onSubmit={handleSubmit}>
            {currentSection === 1 && (
               <>
               <h3>Contact Information</h3>
               <div className="two">
               <div>
                 <label>Person Name: <span>*</span></label>
                 <input
                   type="text"
                   name="primaryContactName"
                   value={formData.primaryContactName}
                   onChange={handleChange}
                   required
                 />
                 {displayError('primaryContactName')}
               </div>
               <div>
                 <label>Position/Title: <span>*</span></label>
                 <input
                   type="text"
                   name="primaryContactTitle"
                   value={formData.primaryContactTitle}
                   onChange={handleChange}
                   required
                 />
                 {displayError('primaryContactTitle')}
               </div>
               </div>
               <div className="two">

               <div>
                 <label>Email Address: <span>*</span></label>
                 <input
                   type="email"
                   name="primaryContactEmail"
                   value={formData.primaryContactEmail}
                   onChange={handleChange}
                   required
                 />
                 {displayError('primaryContactEmail')}
               </div>
               <div>
                 <label>Phone Number: <span>*</span></label>
                 <input
                   type="number"
                   name="primaryContactPhone"
                   value={formData.primaryContactPhone}
                   onChange={handleChange}
                   required
                 />
                 {displayError('primaryContactPhone')}
               </div>
               </div>
               <h3>Alternate Contact </h3>

               <div className="two">
               <div>
                
                 <label>Person Name: <span>*</span></label>
                 <input
                   type="text"
                   name="altContactName"
                   value={formData.altContactName}
                   onChange={handleChange}
                   required
                 />
                 {displayError('altContactName')}
               </div>
               <div>
                 <label>Position/Title: <span>*</span></label>
                 <input
                   type="text"
                   name="altContactTitle"
                   value={formData.altContactTitle}
                   onChange={handleChange}
                   required
                 />
                  {displayError('altContactTitle')}
               </div>
               </div>
               <div className="two">
               <div>
                 <label>Email Address: <span>*</span></label>
                 <input
                   type="email"
                   name="altContactEmail"
                   value={formData.altContactEmail}
                   onChange={handleChange}
                   required
                 />
                  {displayError('altContactEmail')}
               </div>
               <div>
                 <label>Phone Number: </label>
                 <input
                   type="number"
                   name="altContactPhone"
                   value={formData.altContactPhone}
                   onChange={handleChange}
                   required
                 />
                   {/* {displayError('altContactPhone')} */}
               </div>
               </div>

               <button className="submit-bt" type="button" onClick={handleNext}>Next</button>

             
             </>
            )}
            {currentSection === 2 && (
             <>
             <h3>Company Information</h3>
             <div style={{display:'flex' , gap:'45px'}}>
             <div>
               <label>Company Name: <span>*</span></label>
               <input
                 type="text"
                 name="companyName"
                 value={formData.companyName}
                 onChange={handleChange}
                 required
               />
                 {displayError('companyName')}
             </div>
             <div>
  <label>Business Type: <span>*</span></label>
  <select
    name="businessType"
    value={formData.businessType}
    onChange={handleChange}
    required
  >
    <option value="">Select...</option>
    <option value="Car Detailing Studio">Car Detailing Studio</option>
    <option value="Economical Car Wash Center">Economical Car Wash Center</option>
    <option value="Local Detailing Studio">Local Detailing Studio</option>
    <option value="Other">Other (please specify)</option>
  </select>

  {displayError('businessType')}

  {/* Conditionally render input field when "Other" is selected */}
  {formData.businessType === 'Other' && (
    <div>
      <label>Please Specify:</label>
      <input
        type="text"
        name="otherBusinessType"
        value={formData.otherBusinessType || ''}
        onChange={handleChange}
        placeholder="Specify your business type"
        required
      />
    </div>
  )}
</div>

             </div>
             <div>
               <label>Registered Business Address: <span>*</span></label>
               <input
                 type="text"
                 name="registeredAddress"
                 value={formData.registeredAddress}
                 onChange={handleChange}
                 required
               />
               {displayError('registeredAddress')}
             </div>
             <div style={{display:'flex' , gap:'15px'}}>
             <div>
               <label>City: <span>*</span></label>
               <input
                 type="text"
                 name="city"
                 value={formData.city}
                 onChange={handleChange}
                 required
               />
               {displayError('city')}
             </div>
             <div>
                  <label>State/Province:</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select State...</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="AS">Assam</option>
    <option value="BR">Bihar</option>
    <option value="CG">Chhattisgarh</option>
    <option value="GA">Goa</option>
    <option value="GJ">Gujarat</option>
    <option value="HR">Haryana</option>
    <option value="HP">Himachal Pradesh</option>
    <option value="JK">Jammu and Kashmir</option>
    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UK">Uttarakhand</option>
    <option value="WB">West Bengal</option>
    <option value="AN">Andaman and Nicobar Islands</option>
    <option value="CH">Chandigarh</option>
    <option value="DH">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="LD">Lakshadweep</option>
    <option value="DL">Delhi</option>
    <option value="PY">Puducherry</option>
                  </select>
                  {displayError('state')}
                </div>
             
             <div>
               <label style={{whiteSpace:"nowrap"}}>Postal Code: <span>*</span></label>
               <input
                 type="text"
                 name="postalCode"
                 value={formData.postalCode}
                 onChange={handleChange}
                 required
               />
               {displayError('postalCode')}
             </div>
             </div>
             {/* <div style={{display:'flex' ,gap:'10px'}}> */}
             {/* <div>
               <label>Business Reg. Number (GSTN):</label>
               <input
                 type="text"
                 name="gstn"
                 value={formData.gstn}
                 onChange={handleChange}
                 required
               />
               {displayError('gstn')}
             </div> */}
             <div>
               <label>Website:</label>
               <input
                 type="text"
                 name="website"
                 value={formData.website}
                 onChange={handleChange}
                 required
               />
             </div>
             {/* </div> */}
             {/* <div style={{display:'flex' , gap:'45px'}}>
             <div>
               <label style={{whiteSpace:"nowrap"}}>Year Established:</label>
               <input
                 type="number"
                 name="yearEstablished"
                 value={formData.yearEstablished}
                 onChange={handleChange}
                 required
               />
               {displayError('yearEstablished')}
             </div> */}
             {/* <div>
               <label style={{whiteSpace:"nowrap"}}>Number of Employees:</label>
               <input
                 type="number"
                 name="numEmployees"
                 value={formData.numEmployees}
                 onChange={handleChange}
                 required
               />
                {displayError('numEmployees')}
             </div>
             </div> */}
              <button className="submit-bt" type="button" onClick={handlePrevious}>Previous</button>
              <button className="submit-bt" type="button" onClick={handleNext}>Next</button>
           </>
            )}
            {currentSection === 3 && (
              <>
                <h3>Service Details</h3>
                <div>
                  <label>Services Offered: <span>*</span></label>
                  <div>
  <input
    type="checkbox"
    name="servicesOffered"
    value="Exterior Detailing"
    onChange={handleChange}
  /> Exterior Detailing<br/>

  <input
    type="checkbox"
    name="servicesOffered"
    value="Interior Detailing"
    onChange={handleChange}
  /> Interior Detailing<br/>

  <input
    type="checkbox"
    name="servicesOffered"
    value="Full-Service Car Wash"
    onChange={handleChange}
  /> Car Wash<br/>

  <input
    type="checkbox"
    name="servicesOffered"
    value="Ceramic Coating"
    onChange={handleChange}
  /> Ceramic Coating<br/>

  <input
    type="checkbox"
    name="servicesOffered"
    value="Paint Protection Film"
    onChange={handleChange}
  /> Paint Protection Film<br/>

  <input
    type="checkbox"
    name="servicesOffered"
    value="Other"
    onChange={handleChange}
  /> Other (please specify)<br/>

  {formData.servicesOffered.includes('Other') && (
    <input
      type="text"
      name="otherService"
      value={formData.otherService || ''}
      onChange={handleChange}
      placeholder="Please specify"
      required
    />
  )}

  {displayError('servicesOffered')}
</div>

                </div>
                <div className="two">
                <div>
                  <label>Service Area Coverage: <span>*</span></label>
                  <select
                    name="serviceArea"
                    value={formData.serviceArea}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Local">Local</option>
                    <option value="Regional">Regional</option>
                    <option value="National">National</option>
                  </select>
                  {displayError('serviceArea')}
                </div>

                <div>
                  <label>Number of Service Bays: <span>*</span></label>
                  <input
                    type="number"
                    name="numServiceBays"
                    value={formData.numServiceBays}
                    onChange={handleChange}
                    required
                  />
                   {displayError('numServiceBays')}
                </div>
                </div>
                {/* <div>
                  <label>Service Turnaround Time:</label>
                  <input
                    type="number"
                    name="serviceTurnaround"
                    value={formData.serviceTurnaround}
                    onChange={handleChange}
                    required
                  />
                    {displayError('serviceTurnaround')}
                </div> */}
                <div className="two121">
               
                <div style={{display:'flex' , flexDirection:'column'}}>
                <h3>Operating Hours<br /> (Weekdays) <span>*</span></h3>
                <div>
                  <label>Start:</label>
                  <input
                    type="time"
                    name="operatingHoursWeekdaysStart"
                    value={formData.operatingHoursWeekdaysStart}
                    onChange={handleChange}
                     inputmode="numeric"
                    required
                  /><br/>
                   {displayError('operatingHoursWeekdaysStart')}
                </div>
                <div>
                  <label>End:</label>
                  <input
                    type="time"
                    name="operatingHoursWeekdaysEnd"
                    value={formData.operatingHoursWeekdaysEnd}
                    onChange={handleChange}
                    placeholder="HH:MM"
                     inputmode="numeric"
                    required
                  /><br/>
                    {displayError('operatingHoursWeekdaysEnd')}
                </div>
                </div>
               
                <div style={{display:'flex' , flexDirection:'column'}}>
                <h3>Operating Hours<br /> (Weekends) </h3>
                <div>
                  <label>Start:</label>
                  <input
                    type="time"
                    name="operatingHoursWeekendsStart"
                    value={formData.operatingHoursWeekendsStart}
                    onChange={handleChange}
                    required
                  /><br/>
                  {/* {displayError('operatingHoursWeekendsStart')} */}
                </div>
                <div>
                  <label>End:</label>
                  <input
                    type="time"
                    name="operatingHoursWeekendsEnd"
                    value={formData.operatingHoursWeekendsEnd}
                    onChange={handleChange}
                    required
                  /><br/>
                   {/* {displayError('operatingHoursWeekendsEnd')} */}
                </div>
                </div>
                </div>
      
               
                {/* <div>
                  <label>Equipment Available:</label>
                  <input
                    type="text"
                    name="equipmentAvailable"
                    value={formData.equipmentAvailable}
                    onChange={handleChange}
                    required
                  />
                   {displayError('equipmentAvailable')}
                </div> */}
                {/* <div>
                  <label>Certifications:</label>
                  <input
                    type="text"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    required
                  />
                    {displayError('certifications')}
                </div> */}

<div className="two">
<div style={{width:'72%'}}>
               <label>Store Closed on:</label>
               <select
                 name="storeclosed"
                 value={formData.storeclosed}
                 onChange={handleChange}
                 required
               >
                 <option value="Sunday">Sunday</option>
                 <option value="Monday">Monday</option>
                 <option value="Tuesday">Tuesday</option>
                 <option value="Wednesday">Wednesday</option>
                 <option value="Thursday">Thursday</option>
                 <option value="Friday">Friday</option>
                 <option value="Saturday">Saturday</option>
               </select>
             </div>
             </div>
                <div className="btt">
                <button  className="submit-bt" type="button" onClick={handlePrevious}>Previous</button>
                <button  className="submit-bt" type="button" onClick={handleNext}>Next</button>
                </div>
              </>
            )}
            {/* {currentSection === 4 && (
              <>
                <h3>Partnership Goals and Terms</h3>
                <div>
                  <label>Partnership Goals:</label>
                  <textarea
                    name="partnershipGoals"
                    value={formData.partnershipGoals}
                    onChange={handleChange}
                    required
                  />
                    {displayError('partnershipGoals')}
                </div> 
                
              
                 <div>
                  <label>Additional Comments:</label>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    required
                  />
                   {displayError('additionalComments')}
                </div> 
                <button  className="submit-bt" type="button" onClick={handlePrevious}>Previous</button>
                <button className="submit-bt" type="button" onClick={handleNext}>Next</button>
              </>
            )} */}
            {currentSection === 4 && (
              <>

<div>
                  <label>Documents Required:</label>
                  <p>Please share the following documents (autokaar’s Channel Support Mail ID):</p>
                 <ul>
                  <li>Business License/Registration Certificate</li>
                  <li>Proof of Insurance</li>
                  <li>List of Services and Pricing</li>
                  <li>Photos of Facility(1 inside & 1 outside)</li>
                  <li>Any other relevant certifications or documents</li>
                 </ul>
                </div>
<div>
                  <label>Terms and Conditions:</label>
                  {/* <textarea
                    name="termsConditions"
                    value={formData.termsConditions}
                    onChange={handleChange}
                    required
                  /> */}
                </div>

                {/* <h3>Signature</h3>
                <div>
                  <label>Signatory Name:</label>
                  <input
                    type="text"
                    name="signatoryName"
                    value={formData.signatoryName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Signatory Title:</label>
                  <input
                    type="text"
                    name="signatoryTitle"
                    value={formData.signatoryTitle}
                    onChange={handleChange}
                    required
                  />
                </div> */}
                <div>
                  <label>Signature: <span>*</span></label>
                  <input
                    type="text"
                    name="signature"
                    placeholder="Enter your name"
                    value={formData.signature}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Date: <span>*</span></label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="submit-bt" type="button" onClick={handlePrevious}>Previous</button>
                <button className="submit-bt" type="submit">Submit</button>
              </>
            )}
          </form>
          {showSuccessMessage && <div className="success-message">Form submitted successfully!</div>}
        </div>
      )}
    </div>
  );
};

export default ResponsiveLayout;


