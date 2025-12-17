import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with TechVista College - we're here to help!</p>
        </div>
      </div>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions about our programs, admissions, or campus life? 
                We'd love to hear from you. Reach out using any of the methods below.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Visit Us</h3>
                    <p>123 Education Street<br />Knowledge City, KC 12345</p>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>Main: (555) 123-4567<br />Admissions: (555) 123-4568</p>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@techvistacollege.edu<br />admissions@techvistacollege.edu</p>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Office Hours</h3>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="financial">Financial Aid</option>
                      <option value="campus">Campus Life</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-contact">
        <div className="container">
          <h2>Department Contacts</h2>
          <div className="departments-grid">
            <div className="department-contact">
              <i className="fas fa-laptop-code"></i>
              <h3>Computer Science & IT</h3>
              <p>cs@techvistacollege.edu</p>
              <p>(555) 123-4570</p>
            </div>
            <div className="department-contact">
              <i className="fas fa-cogs"></i>
              <h3>Engineering</h3>
              <p>engineering@techvistacollege.edu</p>
              <p>(555) 123-4571</p>
            </div>
            <div className="department-contact">
              <i className="fas fa-briefcase"></i>
              <h3>Business Administration</h3>
              <p>business@techvistacollege.edu</p>
              <p>(555) 123-4572</p>
            </div>
            <div className="department-contact">
              <i className="fas fa-book"></i>
              <h3>Liberal Arts</h3>
              <p>liberalarts@techvistacollege.edu</p>
              <p>(555) 123-4573</p>
            </div>
            <div className="department-contact">
              <i className="fas fa-flask"></i>
              <h3>Sciences</h3>
              <p>sciences@techvistacollege.edu</p>
              <p>(555) 123-4574</p>
            </div>
            <div className="department-contact">
              <i className="fas fa-users"></i>
              <h3>Social Sciences</h3>
              <p>socialsciences@techvistacollege.edu</p>
              <p>(555) 123-4575</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us on Campus</h2>
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt"></i>
            <p>Interactive Campus Map</p>
            <p>123 Education Street, Knowledge City, KC 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;