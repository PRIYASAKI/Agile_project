// components/RegisterPage.js
import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [address, setAddress] = useState(''); // New state for address
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate mobile number and password match
    if (!/^\d{10}$/.test(mobile)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setErrorMessage('');

    // Simulate registration process
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile, email, address, password }), // Include email and address
      });

      const data = await response.json();
      if (data.success) {
        alert('Registration successful!');
        // Redirect to login page or home
      } else {
        setErrorMessage('Registration failed. Try again.');
      }
    } catch (error) {
      setErrorMessage('Error registering. Please try again later.');
    }
  };

  return (
    <div className="register-container">
  <div className="register-card">
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
      <div className="input-container">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>Address</label>
        <textarea
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          rows="3" // Set rows for better height
          style={{ padding: '10px' }} // Inline style for textarea
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button type="submit" className="register-btn">Register</button>
    </form>
  </div>
</div>

  );
};

export default RegisterPage;