import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../helper.js'

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const url = JSON.parse(JSON.stringify(BASE_URL)) + '/register';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    }else{ 
      const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: {'Content-Type' : 'application/json'}
      });
      if(response.status === 200){
        alert('registration successful');
      }else{
        alert('registration failed');
      }
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form className='register' onSubmit={handleSubmit}>
      <h2>Register</h2>
        <div>
          <label htmlFor="text">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
