import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Courses.css';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const staticCourses = [
    {
      id: 1,
      title: 'Computer Science',
      category: 'technology',
      duration: '4 years',
      degree: 'Bachelor of Science',
      description: 'Comprehensive program covering programming, algorithms, and software development.',
      icon: 'fas fa-laptop-code'
    },
    {
      id: 2,
      title: 'Business Administration',
      category: 'business',
      duration: '4 years',
      degree: 'Bachelor of Business Administration',
      description: 'Learn management, finance, marketing, and entrepreneurship skills.',
      icon: 'fas fa-briefcase'
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      category: 'engineering',
      duration: '4 years',
      degree: 'Bachelor of Engineering',
      description: 'Design, analyze, and manufacture mechanical systems and devices.',
      icon: 'fas fa-cogs'
    },
    {
      id: 4,
      title: 'Psychology',
      category: 'social',
      duration: '4 years',
      degree: 'Bachelor of Arts',
      description: 'Study human behavior, mental processes, and psychological theories.',
      icon: 'fas fa-brain'
    },
    {
      id: 5,
      title: 'Data Science',
      category: 'technology',
      duration: '2 years',
      degree: 'Master of Science',
      description: 'Advanced analytics, machine learning, and big data processing.',
      icon: 'fas fa-chart-line'
    },
    {
      id: 6,
      title: 'Electrical Engineering',
      category: 'engineering',
      duration: '4 years',
      degree: 'Bachelor of Engineering',
      description: 'Electronics, power systems, and electrical circuit design.',
      icon: 'fas fa-bolt'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', icon: 'fas fa-th' },
    { id: 'technology', name: 'Technology', icon: 'fas fa-laptop' },
    { id: 'business', name: 'Business', icon: 'fas fa-chart-bar' },
    { id: 'engineering', name: 'Engineering', icon: 'fas fa-tools' },
    { id: 'social', name: 'Social Sciences', icon: 'fas fa-users' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  if (loading) {
    return (
      <div className="courses-page">
        <div className="courses-hero">
          <div className="container">
            <h1>Loading Courses...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Discover your passion and build your future with our comprehensive programs</p>
        </div>
      </div>

      <section className="courses-content">
        <div className="container">
          <div className="course-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-icon">
                  <i className={course.icon}></i>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-degree">{course.degree}</p>
                  <p className="course-description">{course.description}</p>
                  <div className="course-details">
                    <span className="duration">
                      <i className="fas fa-clock"></i>
                      {course.duration}
                    </span>
                  </div>
                  <div className="course-actions">
                    <button className="btn btn-primary" onClick={() => navigate(`/course/${course._id}`)}>Learn More</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/contact')}>Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="admission-info">
        <div className="container">
          <h2>Admission Requirements</h2>
          <div className="admission-grid">
            <div className="admission-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Academic Requirements</h3>
              <ul>
                <li>High school diploma or equivalent</li>
                <li>Minimum GPA of 3.0</li>
                <li>Standardized test scores (SAT/ACT)</li>
              </ul>
            </div>
            <div className="admission-card">
              <i className="fas fa-file-alt"></i>
              <h3>Application Documents</h3>
              <ul>
                <li>Completed application form</li>
                <li>Official transcripts</li>
                <li>Letters of recommendation</li>
                <li>Personal statement</li>
              </ul>
            </div>
            <div className="admission-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Important Dates</h3>
              <ul>
                <li>Early Decision: November 15</li>
                <li>Regular Decision: January 15</li>
                <li>Spring Admission: October 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;