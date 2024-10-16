import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';  // Import the CSS file

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  // Validate form inputs
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.product.trim()) {
      errors.product = "Product is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Product Inquiry Form</h2>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="product">Product:</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            {errors.product && <p className="error-message">{errors.product}</p>}
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you-section">
          <h2>Thank You for Your Inquiry!</h2>
          <p>We have received your details:</p>
          <ul>
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Product:</strong> {formData.product}</li>
            <li><strong>Message:</strong> {formData.message}</li>
          </ul>
          <button onClick={() => navigate(0)}>Submit Another Inquiry</button>
        </div>
      )}
    </div>
  );
};

export default Home;
