import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else if (!isValidEmail(email)) {
      setError('Invalid email address.');
    } else if (!isValidUsername(username)) {
      setError('Username can only contain letters, numbers, and underscores.');
    } else {
 
      navigate('/');
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }
  const isValidUsername = (username) => {
    const usernameRegex = /^[A-Za-z0-9_]+$/;
    return usernameRegex.test(username);
  }

  return (
    <div className="login-container">
      <h2 className="login-header">Register</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
