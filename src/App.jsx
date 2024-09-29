// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import AuctionListPage from './pages/AuctionListPage';  // New Page
import AuctionDetailPage from './pages/AuctionDetailPage';  // New Page
import UserProfilePage from './pages/UserProfilePage';  // New Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auctions" element={<AuctionListPage />} />  {/* New route for auction list */}
        <Route path="/auction/:auctionId" element={<AuctionDetailPage />} />  {/* New route for auction details */}
        <Route path="/profile" element={<UserProfilePage />} />  {/* New route for user profile */}
        <Route path="/register" element={<RegisterPage />} />  {/* Register route */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />  {/* Forgot Password route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
