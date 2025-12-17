import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>
            <i className="fas fa-graduation-cap"></i>
            TechVista College
          </h3>
          <p>Empowering minds, shaping futures. Excellence in education since 1985.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Academic</h4>
          <ul>
            <li><Link to="/courses">Academic Calendar</Link></li>
            <li><Link to="/about">Library</Link></li>
            <li><Link to="/departments">Research</Link></li>
            <li><Link to="/login">Student Portal</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> 123 Education Street, Knowledge City, KC 12345</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> info@techvistacollege.edu</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 TechVista College. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;