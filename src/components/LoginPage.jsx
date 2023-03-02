import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import {BASE_URL} from '../helper.js'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  const url = JSON.parse(JSON.stringify(BASE_URL)) + '/login';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: {'Content-Type' : 'application/json'},
      credentials: 'include',
      });
      if(response.ok){
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        })
      }else{
        alert('wrong credentials');
      }
  };

  if(redirect){
    return <Navigate to={'/'} />
  }
 
  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form className='login' onSubmit={handleSubmit}>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
