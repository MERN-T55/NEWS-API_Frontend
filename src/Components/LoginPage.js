import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import "./style.css";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
 
    if (!username || !password) {
      setError('Please fill in both fields.');
    } else if (password.length < 8) {
      setError('Incorrect password');
    } else {
   
      setError('');
      const isAuthenticated = true;

      if (isAuthenticated) {
        navigate('/'); 
      }
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
