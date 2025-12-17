import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About TechVista College</h1>
          <p>Excellence in Education Since 1985</p>
        </div>
      </div>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 1985, TechVista College has been at the forefront of higher education,
                providing quality education and fostering innovation for nearly four decades.
                Our commitment to academic excellence and student success has made us one of
                the leading institutions in the region.
              </p>
              <p>
                We believe in empowering our students with the knowledge, skills, and values
                necessary to succeed in an ever-changing world. Our diverse community of
                learners, educators, and researchers work together to create an environment
                that promotes intellectual growth and personal development.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <i className="fas fa-building"></i>
                <p>College Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional education that prepares students for successful careers
                and meaningful lives while contributing to the advancement of knowledge and
                service to society.
              </p>
            </div>
            <div className="mv-card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                To be recognized as a premier institution of higher learning that transforms
                lives through innovative education, research, and community engagement.
              </p>
            </div>
            <div className="mv-card">
              <i className="fas fa-heart"></i>
              <h3>Our Values</h3>
              <p>
                Excellence, Integrity, Innovation, Diversity, Collaboration, and Social
                Responsibility guide everything we do at TechVista College.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
                <div className="placeholder-image">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="title">President</p>
              <p>Leading the college with 20+ years of educational excellence</p>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <div className="placeholder-image">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <h3>Dr. Michael Chen</h3>
              <p className="title">Vice President of Academics</p>
              <p>Overseeing academic programs and faculty development</p>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <div className="placeholder-image">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <h3>Dr. Emily Rodriguez</h3>
              <p className="title">Dean of Student Affairs</p>
              <p>Ensuring exceptional student experience and support services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <i className="fas fa-award"></i>
              <h3>Top 50 Colleges</h3>
              <p>Ranked among top 50 colleges nationally</p>
            </div>
            <div className="achievement-item">
              <i className="fas fa-medal"></i>
              <h3>Excellence in Teaching</h3>
              <p>Recognized for outstanding faculty and teaching methods</p>
            </div>
            <div className="achievement-item">
              <i className="fas fa-star"></i>
              <h3>Student Satisfaction</h3>
              <p>98% student satisfaction rate in recent surveys</p>
            </div>
            <div className="achievement-item">
              <i className="fas fa-globe"></i>
              <h3>Global Recognition</h3>
              <p>International partnerships with leading universities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;