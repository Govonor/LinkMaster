// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Optional
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import JobListing from './pages/JobListing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mentorship from './pages/Mentorship';
import EventCalendar from './pages/EventCalendar';
import CollaborativeProjects from './pages/CollaborativeProjects';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<UserProfile />} />
          <Route path="/jobs" element={<JobListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="/projects" element={<CollaborativeProjects />} />
        </Routes>
      </div>
      <Footer /> {/* Optional footer component */}
    </Router>
  );
};

export default App;
