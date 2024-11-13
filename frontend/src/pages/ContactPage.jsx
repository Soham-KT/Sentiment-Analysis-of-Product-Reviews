import React, { useState } from "react";
import "../styles/ContactPage.css"; // Link to the CSS file
import contact from "../assets/support.png"; // Replace with the created image path

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Code to send formData to backend here
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <img
            src={contact}
            alt="Contact Illustration"
            className="contact-illustration"
          />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="maps-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.07034532942!2d75.87413007364344!3d22.68842507940935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc29e3c82ef%3A0x39f47fbb92c83277!2sIIPS%20-%20International%20Institute%20of%20Professional%20Studies%2C%20DAVV!5e0!3m2!1sen!2sin!4v1731520727938!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
