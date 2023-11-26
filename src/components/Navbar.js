import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt, FaUser, FaPlus, FaBook } from 'react-icons/fa';
import '../App.css';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu clicked');
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Link to='/' className='site-title'>App name</Link>
      
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li><CustomLink to='/takePartInVoting' icon={<FaBook />}>Take part in voting</CustomLink></li>
        <li><CustomLink to='/addVoting' icon={<FaPlus />}>Add Voting</CustomLink></li>
        <li><CustomLink to='/register' icon={<FaUserPlus />}>Register</CustomLink></li>
        <li><CustomLink to='/login' icon={<FaSignInAlt />}>Login</CustomLink></li>
        <li><CustomLink to='/account' icon={<FaUser />}>Your Account</CustomLink></li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, icon, ...props }) {
  const path = window.location.pathname;

  return (
    <Link to={to} className={`nav-link ${path === to ? "active" : ""}`} {...props}>
      {icon && <span className="icon">{icon}</span>}
      {children}
    </Link>
  );
}