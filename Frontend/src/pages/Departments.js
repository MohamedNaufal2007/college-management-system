import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Departments.css';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/departments');
      const data = await response.json();
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    } finally {
      setLoading(false);
    }
  };
  const staticDepartments = [
    {
      id: 1,
      name: 'Computer Science & IT',
      head: 'Dr. James Wilson',
      faculty: 25,
      students: 800,
      description: 'Leading department in software development, AI, and cybersecurity.',
      programs: ['Computer Science', 'Information Technology', 'Data Science', 'Cybersecurity'],
      icon: 'fas fa-laptop-code',
      color: '#3498db'
    },
    {
      id: 2,
      name: 'Engineering',
      head: 'Dr. Maria Garcia',
      faculty: 30,
      students: 950,
      description: 'Excellence in mechanical, electrical, and civil engineering.',
      programs: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Chemical Engineering'],
      icon: 'fas fa-cogs',
      color: '#e74c3c'
    },
    {
      id: 3,
      name: 'Business Administration',
      head: 'Dr. Robert Brown',
      faculty: 20,
      students: 600,
      description: 'Preparing future business leaders and entrepreneurs.',
      programs: ['Business Administration', 'Marketing', 'Finance', 'Human Resources'],
      icon: 'fas fa-briefcase',
      color: '#2ecc71'
    },
    {
      id: 4,
      name: 'Liberal Arts',
      head: 'Dr. Jennifer Davis',
      faculty: 18,
      students: 450,
      description: 'Fostering critical thinking and cultural understanding.',
      programs: ['English Literature', 'History', 'Philosophy', 'Fine Arts'],
      icon: 'fas fa-book',
      color: '#9b59b6'
    },
    {
      id: 5,
      name: 'Sciences',
      head: 'Dr. David Lee',
      faculty: 22,
      students: 520,
      description: 'Research and education in natural and applied sciences.',
      programs: ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
      icon: 'fas fa-flask',
      color: '#f39c12'
    },
    {
      id: 6,
      name: 'Social Sciences',
      head: 'Dr. Lisa Anderson',
      faculty: 15,
      students: 380,
      description: 'Understanding human behavior and social structures.',
      programs: ['Psychology', 'Sociology', 'Political Science', 'Economics'],
      icon: 'fas fa-users',
      color: '#1abc9c'
    }
  ];

  return (
    <div className="departments-page">
      <div className="departments-hero">
        <div className="container">
          <h1>Our Departments</h1>
          <p>Explore our diverse academic departments and their specialized programs</p>
        </div>
      </div>

      <section className="departments-overview">
        <div className="container">
          <div className="overview-stats">
            <div className="stat-card">
              <i className="fas fa-building"></i>
              <h3>6</h3>
              <p>Academic Departments</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>130+</h3>
              <p>Faculty Members</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-user-graduate"></i>
              <h3>3,700+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>24</h3>
              <p>Degree Programs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-grid-section">
        <div className="container">
          <div className="departments-grid">
            {staticDepartments.map(department => (
              <div key={department.id} className="department-card">
                <div className="department-header" style={{ backgroundColor: department.color }}>
                  <i className={department.icon}></i>
                  <h3>{department.name}</h3>
                </div>
                <div className="department-content">
                  <p className="department-description">{department.description}</p>
                  
                  <div className="department-info">
                    <div className="info-item">
                      <i className="fas fa-user-tie"></i>
                      <span>Department Head: {department.head}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-chalkboard-teacher"></i>
                      <span>Faculty: {department.faculty} members</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-users"></i>
                      <span>Students: {department.students}</span>
                    </div>
                  </div>

                  <div className="programs-section">
                    <h4>Programs Offered:</h4>
                    <ul className="programs-list">
                      {department.programs.map((program, index) => (
                        <li key={index}>{program}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="department-actions">
                    <button className="btn btn-primary" onClick={() => navigate(`/department/${department.id}`)}>Learn More</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/contact')}>Contact Department</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="research-centers">
        <div className="container">
          <h2>Research Centers & Labs</h2>
          <div className="research-grid">
            <div className="research-card">
              <i className="fas fa-microscope"></i>
              <h3>Advanced Research Lab</h3>
              <p>State-of-the-art facilities for cutting-edge research</p>
            </div>
            <div className="research-card">
              <i className="fas fa-robot"></i>
              <h3>AI & Machine Learning Center</h3>
              <p>Pioneering artificial intelligence and ML research</p>
            </div>
            <div className="research-card">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability Institute</h3>
              <p>Environmental research and green technology development</p>
            </div>
            <div className="research-card">
              <i className="fas fa-heartbeat"></i>
              <h3>Biomedical Research Center</h3>
              <p>Healthcare innovation and medical technology research</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;