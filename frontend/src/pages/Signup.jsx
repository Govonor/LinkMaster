import React, { useState } from 'react';
import './styles/Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signup = async (name, email, password) => {
    const response = await fetch('/api/signup', { // Adjust the URL to your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }

    return await response.json(); // Adjust based on your API response
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(name, email, password);
      if (response.success) {
        setMessage('Signup successful!');
      } else {
        setMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Signup</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Signup;
