import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage token={authToken} />} />
      </Routes>
    </Router>
  );
};

export default App;