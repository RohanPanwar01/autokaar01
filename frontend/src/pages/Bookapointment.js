import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './bookapointment.css';
import Gg from '../image/Car.jpg'

const Bookapointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [isCallChecked, setIsCallChecked] = useState(false);
    const [isWhatsappChecked, setIsWhatsappChecked] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        vehicleName: '',
        RegistrationNumber: '',
        dateTime: '',
    });

    const handleCallCheckboxChange = () => {
        setIsCallChecked(true);
        setIsWhatsappChecked(false);
    };

    const handleWhatsappCheckboxChange = () => {
        setIsWhatsappChecked(true);
        setIsCallChecked(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        const formattedNumber = value.replace(/\D/g, '');
        setPhoneNumber(formattedNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isCallChecked && !isWhatsappChecked) {
            setErrorMessage('Please select at least one contact method.');
            return;
        }
        setErrorMessage('');

        const contactMethod = isCallChecked ? 'call' : 'whatsapp';

        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    contactMethod,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitMessage('Thank you for booking an appointment! We will contact you soon.');
        } catch (error) {
            setErrorMessage('An error occurred while submitting your request.');
        }

        // Clear the form and reset states after 2 seconds
        setTimeout(() => {
            setSubmitMessage('');
            setFormData({
                name: '',
                phone: '',
                vehicleModel: '',
                RegistrationNumber: '',
                dateTime: '',
            });
            setIsCallChecked(false);
            setIsWhatsappChecked(false);
        }, 2000);
    };

    return (
        <>
            <div className="contact-container">
                <div className="contact-image">
                    <img src={Gg} alt="Placeholder" className="image-placeholder" />
                </div>
                <div className="contact-form">
                    <h2 className="heading121" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>BOOK AN APPOINTMENT!</h2>
                    <form onSubmit={handleSubmit} style={{ fontFamily: 'Mulish, sans-serif' }}>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder=" Enter Your Name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            maxLength={10}
                            onKeyDown={(e) => {
                                if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                    alert("Please enter numbers only.");
                                }
                            }}
                        />

                        <label htmlFor="vehicleName">Vehicle Model: </label>
                        <input
                            type="text"
                            id="vehicleModel"
                            name="vehicleModel"
                            placeholder="Enter your Car Model"
                            required
                            value={formData.vehicleModel}
                            onChange={handleInputChange}
                        />


                        <label htmlFor="RegistrationNumber">Registration Number: </label>
                        <input
                            type="text"
                            id="RegistrationNumber"
                            name="RegistrationNumber"
                            placeholder="Enter Your Registration Number"
                            required
                            value={formData.RegistrationNumber}
                            onChange={handleInputChange}
                            style={{ textTransform: 'uppercase' }}
                            maxLength={10}
                        />
                        <label htmlFor="vehicleName">Preferred Timing: </label>
                        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)} // Updates date on change
        showTimeSelect // Enables time selection
        timeFormat="HH:mm" // 24-hour time format
        timeIntervals={15} // Allows 15-minute intervals for time selection
        timeCaption="Time" // Caption for time selection
        dateFormat="Pp" // Shows both date and time
      />

                        <div className="checkbox-container">
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={isWhatsappChecked}
                                    onChange={handleWhatsappCheckboxChange}
                                />
                                <label> Whatsapp / Schedule an appointment </label>
                            </div>

                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={isCallChecked}
                                    onChange={handleCallCheckboxChange}
                                />
                                <label> Want us to call now? </label>
                            </div>
                        </div>
                        <button type="submit"className="submit-button" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>SUBMIT</button>

                        {errorMessage && (
                            <div className="error-message">
                                {errorMessage}
                            </div>
                        )}

                        {submitMessage && (
                            <div className="submit-message">
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Bookapointment;