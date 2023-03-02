import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import Layout  from './components/Layout';
import './styles/style.css'
import { UserContextProvider } from './components/UserContext';
import CreatePost from './components/CreatePost';
import IndexPage from './components/IndexPage';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes> 
      <Route path='/' element={<Layout/>}>
        <Route index element = {<IndexPage />} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/create'} element= {<CreatePost/>} />
        <Route path={'/post/:id'} element= {<PostPage/>} />
        <Route path={'/edit/:id'} element= {<EditPost/>} />
      </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
