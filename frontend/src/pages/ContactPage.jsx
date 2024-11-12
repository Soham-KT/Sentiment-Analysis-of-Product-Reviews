import React, { useState } from 'react';
import "../styles/ContactPage.css"; // Link to the CSS file
import contact from "../assets/support.png";

function ContactPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can add functionality to send formData to a backend server here
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <img src={contact} alt="Contact Illustration" className="contact-illustration" />
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
