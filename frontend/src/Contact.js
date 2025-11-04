import React, { useState } from "react";
import "./Pages.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting EVisionDrive.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      <p className="contact-info">
        Email: <a href="mailto:vishnubansal2542@gmail.com">vishnubansal2542@gmail.com</a> <br />
        LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">Your Profile</a>
      </p>
    </div>
  );
}
