import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <i className="fas fa-graduation-cap"></i>
          TechVista College
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/courses" className={`nav-link ${isActive('/courses')}`} onClick={() => setIsMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/departments" className={`nav-link ${isActive('/departments')}`} onClick={() => setIsMenuOpen(false)}>
            Departments
          </Link>
          <Link to="/faqs" className={`nav-link ${isActive('/faqs')}`} onClick={() => setIsMenuOpen(false)}>
            FAQs
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/signup" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </Link>
          <Link to="/login" className="nav-link login-btn" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-sign-in-alt"></i>
            Login
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;