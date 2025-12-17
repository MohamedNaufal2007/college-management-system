import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/DepartmentDetail.css';

const DepartmentDetail = () => {
  const { id } = useParams();
  
  const departments = {
    1: {
      name: 'Computer Science & IT',
      head: 'Dr. James Wilson',
      faculty: 25,
      students: 800,
      description: 'Leading department in software development, AI, and cybersecurity.',
      programs: ['Computer Science', 'Information Technology', 'Data Science', 'Cybersecurity'],
      facilities: ['Advanced Computer Labs', 'AI Research Center', 'Cybersecurity Lab', 'Software Development Studio'],
      research: ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Cloud Computing']
    },
    2: {
      name: 'Engineering',
      head: 'Dr. Maria Garcia',
      faculty: 30,
      students: 950,
      description: 'Excellence in mechanical, electrical, and civil engineering.',
      programs: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Chemical Engineering'],
      facilities: ['Engineering Labs', 'Design Studio', 'Testing Facilities', 'Workshop'],
      research: ['Renewable Energy', 'Robotics', 'Materials Science', 'Structural Engineering']
    }
  };

  const dept = departments[id] || departments[1];

  return (
    <div className="department-detail">
      <div className="dept-hero">
        <div className="container">
          <h1>{dept.name}</h1>
          <p>Department Head: {dept.head}</p>
        </div>
      </div>

      <div className="dept-content">
        <div className="container">
          <div className="dept-grid">
            <div className="dept-info">
              <h2>About the Department</h2>
              <p>{dept.description}</p>
              
              <h3>Programs Offered</h3>
              <ul>
                {dept.programs.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>

              <h3>Facilities</h3>
              <ul>
                {dept.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>

              <h3>Research Areas</h3>
              <ul>
                {dept.research.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>

            <div className="dept-sidebar">
              <div className="stats-card">
                <h3>Department Stats</h3>
                <p><strong>Faculty:</strong> {dept.faculty} members</p>
                <p><strong>Students:</strong> {dept.students}</p>
                <p><strong>Programs:</strong> {dept.programs.length}</p>
                <Link to="/contact" className="btn btn-primary">Contact Department</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;