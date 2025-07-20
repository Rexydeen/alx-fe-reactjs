import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      padding: '10px 20px',
      backgroundColor: '#f2f2f2',
      borderBottom: '1px solid #ccc',
      justifyContent: 'space-between',
      display: 'flex',
    }}>
      <Link to="/"       style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about"  style={{ marginRight: '15px' }}>About</Link>
      <Link to="/services" style={{ marginRight: '15px' }}>Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
