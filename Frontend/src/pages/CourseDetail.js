import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  
  const courses = {
    1: {
      title: 'Computer Science',
      degree: 'Bachelor of Science',
      duration: '4 years',
      description: 'Comprehensive program covering programming, algorithms, and software development.',
      curriculum: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development'],
      career: ['Software Developer', 'Data Scientist', 'System Analyst', 'Web Developer'],
      tuition: '$25,000/year'
    },
    2: {
      title: 'Business Administration',
      degree: 'Bachelor of Business Administration',
      duration: '4 years',
      description: 'Learn management, finance, marketing, and entrepreneurship skills.',
      curriculum: ['Business Management', 'Marketing', 'Finance', 'Economics', 'Leadership', 'Strategic Planning'],
      career: ['Business Manager', 'Marketing Specialist', 'Financial Analyst', 'Entrepreneur'],
      tuition: '$22,000/year'
    }
  };

  const course = courses[id] || courses[1];

  return (
    <div className="course-detail">
      <div className="course-hero">
        <div className="container">
          <h1>{course.title}</h1>
          <p>{course.degree}</p>
        </div>
      </div>

      <div className="course-content">
        <div className="container">
          <div className="course-grid">
            <div className="course-info">
              <h2>Program Overview</h2>
              <p>{course.description}</p>
              
              <h3>Curriculum</h3>
              <ul>
                {course.curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Career Opportunities</h3>
              <ul>
                {course.career.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="course-sidebar">
              <div className="info-card">
                <h3>Program Details</h3>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Tuition:</strong> {course.tuition}</p>
                <p><strong>Start Date:</strong> Fall 2024</p>
                <Link to="/contact" className="btn btn-primary">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;