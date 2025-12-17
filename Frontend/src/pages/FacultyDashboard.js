import React from 'react';
import '../styles/Dashboard.css';

const FacultyDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <h1><i className="fas fa-chalkboard-teacher"></i> Faculty Dashboard</h1>
          <p>Welcome back, Dr. Smith!</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <i className="fas fa-book-open"></i>
              <h3>My Courses</h3>
              <p>Manage your teaching assignments</p>
              <button className="btn btn-primary">View Courses</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-users"></i>
              <h3>Students</h3>
              <p>View and manage student information</p>
              <button className="btn btn-primary">View Students</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-clipboard-check"></i>
              <h3>Gradebook</h3>
              <p>Enter and manage student grades</p>
              <button className="btn btn-primary">Gradebook</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Schedule</h3>
              <p>View your teaching schedule</p>
              <button className="btn btn-primary">View Schedule</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-file-alt"></i>
              <h3>Course Materials</h3>
              <p>Upload and manage course content</p>
              <button className="btn btn-primary">Manage Materials</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-chart-line"></i>
              <h3>Analytics</h3>
              <p>View class performance analytics</p>
              <button className="btn btn-primary">View Analytics</button>
            </div>
          </div>

          <div className="dashboard-sidebar">
            <div className="quick-stats">
              <h3>Teaching Overview</h3>
              <div className="stat-item">
                <span>Active Courses:</span>
                <strong>4</strong>
              </div>
              <div className="stat-item">
                <span>Total Students:</span>
                <strong>156</strong>
              </div>
              <div className="stat-item">
                <span>Pending Grades:</span>
                <strong>23</strong>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activities</h3>
              <ul>
                <li>Assignment submitted by student</li>
                <li>New course material uploaded</li>
                <li>Grade entry deadline approaching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;