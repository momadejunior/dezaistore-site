import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }

    // Validate email
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('service_g6999ia', 'template_d9xe2dl', form.current, 'OAXV_TY-Aek8NjEhS')
        .then(
          (result) => {
            console.log(result.text);
            setSuccessMessage('Message sent successfully!');
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="container mt-5">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <div className="mb-3">
        <label htmlFor="user_name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          className={`form-control ${errors.user_name ? 'is-invalid' : ''}`}
          required
        />
        {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="user_email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          className={`form-control ${errors.user_email ? 'is-invalid' : ''}`}
          required
        />
        {errors.user_email && <div className="invalid-feedback">{errors.user_email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          required
        />
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
};
