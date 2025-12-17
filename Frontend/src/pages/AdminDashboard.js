import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const userType = localStorage.getItem('userType');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    if (userType !== 'admin') {
      alert('Access denied. Admin privileges required.');
    }
  }, []);

  const handleManageStudents = () => {
    alert('Student Management: View/Edit/Delete student records');
  };

  const handleManageFaculty = () => {
    alert('Faculty Management: Manage faculty assignments and schedules');
  };

  const handleManageCourses = () => {
    alert('Course Management: Create/Edit/Delete courses');
  };

  const handleViewReports = () => {
    alert('Reports: Academic performance, enrollment statistics');
  };

  const handleSettings = () => {
    alert('System Settings: Configure system parameters');
  };

  const handleManageAnnouncements = () => {
    alert('Announcements: Create/Edit campus announcements');
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <h1><i className="fas fa-user-shield"></i> Admin Dashboard</h1>
          <p>Welcome back, {user?.username || 'Administrator'}!</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <i className="fas fa-users"></i>
              <h3>Student Management</h3>
              <p>Manage student records and enrollment</p>
              <button className="btn btn-primary" onClick={handleManageStudents}>Manage Students</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Faculty Management</h3>
              <p>Manage faculty and staff information</p>
              <button className="btn btn-primary" onClick={handleManageFaculty}>Manage Faculty</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-book"></i>
              <h3>Course Management</h3>
              <p>Create and manage course offerings</p>
              <button className="btn btn-primary" onClick={handleManageCourses}>Manage Courses</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-chart-bar"></i>
              <h3>Reports</h3>
              <p>Generate academic and financial reports</p>
              <button className="btn btn-primary" onClick={handleViewReports}>View Reports</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-cog"></i>
              <h3>System Settings</h3>
              <p>Configure system preferences</p>
              <button className="btn btn-primary" onClick={handleSettings}>Settings</button>
            </div>

            <div className="dashboard-card">
              <i className="fas fa-bell"></i>
              <h3>Announcements</h3>
              <p>Manage campus-wide announcements</p>
              <button className="btn btn-primary" onClick={handleManageAnnouncements}>Manage</button>
            </div>
          </div>

          <div className="dashboard-sidebar">
            <div className="quick-stats">
              <h3>System Overview</h3>
              <div className="stat-item">
                <span>Total Students:</span>
                <strong>15,247</strong>
              </div>
              <div className="stat-item">
                <span>Active Faculty:</span>
                <strong>523</strong>
              </div>
              <div className="stat-item">
                <span>Active Courses:</span>
                <strong>1,245</strong>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activities</h3>
              <ul>
                <li>New student registration</li>
                <li>Course schedule updated</li>
                <li>Faculty meeting scheduled</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;