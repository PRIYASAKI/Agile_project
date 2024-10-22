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
import ProductPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auctions" element={<AuctionListPage />} />  
        <Route path="/auction/:auctionId" element={<AuctionDetailPage />} /> 
        <Route path="/categories" element={<CategoriesPage />} />  
        <Route path="/products" element={<ProductPage />} />
        <Route path="/profile" element={<UserProfilePage />} />  
        <Route path="/register" element={<RegisterPage />} />  
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
