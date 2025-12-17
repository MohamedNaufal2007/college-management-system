import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleViewCourses = () => {
    alert('Courses: CS 301, Math 205, Physics 101');
  };

  const handleViewGrades = () => {
    alert('Grades: CS 301 (A), Math 205 (B+), Physics 101 (A-)');
  };

  const handleViewSchedule = () => {
    alert('Schedule: Mon-Wed-Fri 9:00 AM CS 301, Tue-Thu 2:00 PM Math 205');
  };

  const handleViewDetails = () => {
    alert('Financial Aid: $5,000 scholarship awarded');
  };

  const handleEditProfile = () => {
    alert('Profile editing feature coming soon!');
  };

  const handleViewProgress = () => {
    alert('Degree Progress: 85/120 credits completed (70.8%)');
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <h1><i className="fas fa-user-graduate"></i> Student Dashboard</h1>
          <p>Welcome back, {user?.username || 'Student'}!</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <i className="fas fa-book-open"></i>
              <h3>My Courses</h3>
              <p>View enrolled courses and schedules</p>
              <button className="btn btn-primary" onClick={handleViewCourses}>View Courses</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-chart-line"></i>
              <h3>Grades</h3>
              <p>Check your academic performance</p>
              <button className="btn btn-primary" onClick={handleViewGrades}>View Grades</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Schedule</h3>
              <p>View your class timetable</p>
              <button className="btn btn-primary" onClick={handleViewSchedule}>View Schedule</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-dollar-sign"></i>
              <h3>Financial Aid</h3>
              <p>Manage your financial information</p>
              <button className="btn btn-primary" onClick={handleViewDetails}>View Details</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-user-edit"></i>
              <h3>Profile</h3>
              <p>Update your personal information</p>
              <button className="btn btn-primary" onClick={handleEditProfile}>Edit Profile</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Degree Progress</h3>
              <p>Track your academic progress</p>
              <button className="btn btn-primary" onClick={handleViewProgress}>View Progress</button>
            </div>
          </div>

          <div className="dashboard-sidebar">
            <div className="quick-stats">
              <h3>Quick Stats</h3>
              <div className="stat-item">
                <span>Current GPA:</span>
                <strong>3.75</strong>
              </div>
              <div className="stat-item">
                <span>Credits Completed:</span>
                <strong>85/120</strong>
              </div>
              <div className="stat-item">
                <span>Current Semester:</span>
                <strong>Spring 2024</strong>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <ul>
                <li>Grade posted for CS 301</li>
                <li>Assignment due tomorrow</li>
                <li>New announcement in Math 205</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;