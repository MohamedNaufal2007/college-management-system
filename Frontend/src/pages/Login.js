import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [userType, setUserType] = useState('student');
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
          userType
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userType', userType);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        switch (userType) {
          case 'student':
            navigate('/student-dashboard');
            break;
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'faculty':
            navigate('/faculty-dashboard');
            break;
          default:
            break;
        }
        window.location.reload();
      } else {
        const data = await response.json();
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Backend server not running. Please start the server on port 3001.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Login to TechVista College</h2>
          <p>Select your role and enter your credentials</p>
        </div>

        <div className="user-type-selector">
          <button
            className={`user-type-btn ${userType === 'student' ? 'active' : ''}`}
            onClick={() => setUserType('student')}
          >
            <i className="fas fa-user-graduate"></i>
            Student
          </button>
          <button
            className={`user-type-btn ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => setUserType('admin')}
          >
            <i className="fas fa-user-shield"></i>
            Admin
          </button>
          <button
            className={`user-type-btn ${userType === 'faculty' ? 'active' : ''}`}
            onClick={() => setUserType('faculty')}
          >
            <i className="fas fa-chalkboard-teacher"></i>
            Faculty
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            <i className="fas fa-sign-in-alt"></i>
            Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
          <p>Need help? <Link to="/contact">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;