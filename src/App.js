import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-ui-kit/css/mdb.min.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  const [authToken, setAuthToken] = React.useState(null);

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  return (
    <div>
      {!authToken ? <LoginPage onLogin={handleLogin} /> : <HomePage token={authToken} />}
    </div>
  );
};

export default App;