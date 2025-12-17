import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TechVista College</h1>
          <p>Empowering minds, shaping futures through excellence in education</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <i className="fas fa-university"></i>
            <p>Campus Image</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose TechVista College?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Expert Faculty</h3>
              <p>Learn from industry experts and experienced professors</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Modern Technology</h3>
              <p>State-of-the-art labs and cutting-edge equipment</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Small Class Sizes</h3>
              <p>Personalized attention with low student-to-faculty ratio</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-briefcase"></i>
              <h3>Career Support</h3>
              <p>Comprehensive career services and job placement assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>15,000+</h3>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Faculty Members</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Programs</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Job Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <div className="container">
          <h2>Latest News & Events</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <div className="placeholder-image">
                  <i className="fas fa-newspaper"></i>
                </div>
              </div>
              <div className="news-content">
                <h3>New Engineering Lab Opens</h3>
                <p>State-of-the-art engineering laboratory equipped with latest technology...</p>
                <span className="news-date">March 15, 2024</span>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <div className="placeholder-image">
                  <i className="fas fa-trophy"></i>
                </div>
              </div>
              <div className="news-content">
                <h3>Students Win National Competition</h3>
                <p>Our computer science team secured first place in the national coding championship...</p>
                <span className="news-date">March 10, 2024</span>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <div className="placeholder-image">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
              <div className="news-content">
                <h3>Spring Graduation Ceremony</h3>
                <p>Join us for the spring graduation ceremony celebrating our graduates...</p>
                <span className="news-date">March 5, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students who have transformed their lives at TechVista College</p>
          <Link to="/login" className="btn btn-primary">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;