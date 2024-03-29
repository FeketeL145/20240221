import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('https://jwt.sulla.hu/login', {
      username,
      password
    })
    .then(response => {
      const token = response.data.token;
      onLogin(token);
      
    })
    .then(navigate('/home'))
    .catch(error => {
      console.error('Login failed:', error);
    });
  };

  return (
    <div className="container p-5 bg-ivory w-50">
      <div className='form-group mt-5 text-center'>
        <h2>Login</h2>
      </div>
      <div className='form-group'>
        <input type="text" className='form-control mb-2' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" className='form-control mb-2' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='form-group row d-flex justify-content-center'>
        <button className='btn btn-primary w-50' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;