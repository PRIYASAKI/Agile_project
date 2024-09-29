// components/ForgotPasswordPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPasswordPage.css'; // Import the CSS file

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    
    // Simulated password reset logic (replace with your API call)
    if (email) {
      alert(`Password reset link sent to ${email}`);
      // Here you could add logic to send the reset link via email
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        <Link to="/login">
          <button className="back-to-login-btn">Back to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
