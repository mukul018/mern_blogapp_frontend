import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';
import {BASE_URL} from '../helper.js'

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);
  const url1 = JSON.parse(JSON.stringify(BASE_URL)) + '/profile';
  const url2 = JSON.parse(JSON.stringify(BASE_URL)) + '/logout';
  useEffect(() => {
    fetch(url1, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  }, []);

  function logout() {
    fetch(url2, {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }
  
  const username = userInfo?.username;

  return (
    <header>
        <a href='/' className='logo'>Home</a>
        <nav>
          {username && (
            <>
              <span>Hello {username}</span>
              <Link to="/create">Create New Post</Link>
              <Link to="/" onClick={logout}>Logout</Link>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
    </header>
  )
}

export default Header