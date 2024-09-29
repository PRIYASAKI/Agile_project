// components/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulated login logic (replace this with your API call)
    const hardcodedEmail = 'user@example.com'; // Replace with your actual logic
    const hardcodedPassword = 'password123'; // Replace with your actual logic

    if (email === hardcodedEmail && password === hardcodedPassword) {
      alert('Login successful!');
      navigate('/home'); // Redirect to the home page after successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <button type="submit">Login</button>
        </form>
        <div className='box'>
          <p>New User?</p>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
