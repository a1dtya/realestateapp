import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    let errors = {};
    if (name.length < 4) {
      errors.name = "Name must be at least 4 characters long.";
    }
    return errors;
  };

  const validateStep2 = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!/^\d{10,12}$/.test(phoneNumber.replace(/[\s()+\-.]|ext/gi, ''))) {
      errors.phoneNumber = "Phone number must be 10-12 digits long.";
    }
    return errors;
  };

  const handleNext = () => {
    const validationErrors = validateStep1();
    if (Object.keys(validationErrors).length === 0) {
      setStep(2);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateStep2();
    if (Object.keys(validationErrors).length === 0) {
      setStep(3);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-form">
      {step === 1 && (


        <div className="form-step">
            <h6>CONTACT US</h6>
          <h2>Get In Touch With Us</h2>
          <p>Get free consultation with a professional real estate consultant.</p>
          <label>
            Name
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </label>
          <button onClick={handleNext} disabled={name.length < 4}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>Get In Touch With Us</h2>
          <p>Get free consultation with a professional real estate consultant.</p>
          <label>
            Email
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email id"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>
          <label>
            Phone Number
            <input 
              type="text" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </label>
          <div className="button-group">
            <button onClick={() => setStep(1)}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>Thank You for Connecting!</h2>
          <p>We appreciate your interest and will be in touch soon.</p>
          <p>In the meantime, feel free to browse our website to learn more about our offerings.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;