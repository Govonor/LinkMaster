import React, { useState } from 'react';
import './styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = async (email, password) => {
    const response = await fetch('/api/login', { // Adjust the URL to your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return await response.json(); // Adjust based on your API response
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response.success) {
        setMessage('Login successful!');
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage(''); // Clear message
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setMessage(''); // Clear message
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={handleEmailChange} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={handlePasswordChange} 
        required 
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
