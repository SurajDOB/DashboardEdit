import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Registration from './Registration';
import Navbar from './Navbar';
import Dashboard from './Dashboard/Dashboard';

import './App.css';
import './Navbar.css';
import './Dashboard/Dashboard.css';

const App = () => {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <div>
        {currentPath !== '/dashboard' && <Navbar />} {/* Hide navbar on dashboard */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
