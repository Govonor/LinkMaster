import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LinkMaster</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/mentorship">Mentorship</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
