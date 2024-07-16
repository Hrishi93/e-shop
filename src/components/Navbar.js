import React from 'react'
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/home">ElectroShop</Link>
    </div>
    <div className="navbar-links">
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
  )
}

export default Navbar
